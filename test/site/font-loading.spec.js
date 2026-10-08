const { test, expect } = require("@playwright/test");

for (const path of ["/", "/publications/"]) {
  test(`${path} paints the selected font without a late resize on a cold load`, async ({ page, context }) => {
    const client = await context.newCDPSession(page);
    await client.send("Network.enable");
    await client.send("Network.setCacheDisabled", { cacheDisabled: true });
    await client.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: 150,
      downloadThroughput: 128 * 1024,
      uploadThroughput: 128 * 1024,
    });
    await client.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    const externalFonts = [];
    await page.route("**/*", async (route) => {
      if (route.request().resourceType() === "font") {
        externalFonts.push(route.request().url());
        return route.abort();
      }
      return route.continue();
    });
    await page.addInitScript(() => {
      window.fontRendering = { firstPaint: null, shifts: 0, shiftDetails: [] };
      window.measureHeadings = () =>
        [...document.querySelectorAll(".profile-name, main h1, main h2, main h3")].map((heading) => {
          const range = document.createRange();
          range.selectNodeContents(heading);
          const box = range.getBoundingClientRect();
          return { text: heading.textContent.trim(), width: box.width, height: box.height, size: getComputedStyle(heading).fontSize };
        });
      new PerformanceObserver((list) => {
        if (list.getEntries().some((entry) => entry.name === "first-contentful-paint")) {
          window.fontRendering.firstPaint = {
            headings: window.measureHeadings(),
            registeredFaces: [...document.fonts].filter((font) => font.family.includes("Ken Profile Sans")).length,
            regularLoaded: document.fonts.check('400 17px "Ken Profile Sans"'),
            semiboldLoaded: document.fonts.check('600 19px "Ken Profile Sans"'),
          };
        }
      }).observe({ type: "paint", buffered: true });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            window.fontRendering.shifts += entry.value;
            window.fontRendering.shiftDetails.push({
              time: entry.startTime,
              value: entry.value,
              sources: entry.sources.map((s) => ({
                node: s.node?.outerHTML?.slice(0, 160),
                before: s.previousRect.toJSON(),
                after: s.currentRect.toJSON(),
              })),
            });
          }
        }
      }).observe({ type: "layout-shift", buffered: true });
    });
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    await expect.poll(() => page.evaluate(() => window.fontRendering.firstPaint)).not.toBeNull();
    // Observe a later frame as well; immediate post-load checks miss delayed swaps.
    await page.waitForTimeout(500);
    const rendering = await page.evaluate(() => ({ ...window.fontRendering, finalHeadings: window.measureHeadings() }));
    expect(externalFonts).toEqual([]);
    expect(rendering.firstPaint.registeredFaces).toBe(3);
    expect(rendering.firstPaint.regularLoaded).toBe(true);
    expect(rendering.firstPaint.semiboldLoaded).toBe(true);
    expect(rendering.firstPaint.headings.length).toBeGreaterThan(0);
    expect(rendering.firstPaint.headings).toEqual(rendering.finalHeadings);
    if (rendering.shifts) console.log(JSON.stringify(rendering.shiftDetails));
    expect(rendering.shifts).toBe(0);
  });
}

test.describe("Without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("content remains visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Research Focus" })).toBeVisible();
    await expect(page.locator("body")).toHaveCSS("visibility", "visible");
  });
});

test("font decoding errors reveal readable fallback text", async ({ page }) => {
  await page.route("**/profile-fonts.css", async (route) => {
    const response = await route.fetch();
    const css = (await response.text()).replace(/data:font\/woff2;base64,[A-Za-z0-9+/=]+/g, "data:font/woff2;base64,AAAA");
    await route.fulfill({ response, body: css });
  });
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/fonts-loading/);
  await expect(page.locator("body")).toHaveCSS("visibility", "visible");
  await expect(page.getByRole("heading", { name: "Research Focus" })).toBeVisible();
});
