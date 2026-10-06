const { test, expect } = require("@playwright/test");
const bibliography = require("fs").readFileSync(require("path").join(__dirname, "../../_bibliography/papers.bib"), "utf8");
const paperCount = (bibliography.match(/^@(?!(?:comment|string|preamble)\b)\w+\s*[{(]/gim) || []).length;

for (const route of ["/", "/publications/"]) {
  test(`${route} preserves the profile layout and navigation`, async ({ page }, testInfo) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("requestfailed", (request) => errors.push(request.url()));
    page.on("response", (response) => {
      if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("nav a")).toHaveCount(2);
    await expect(page.locator('nav [aria-current="page"]')).toHaveText(route === "/" ? "Home" : "Publications");
    await expect(page.locator(".cv-button")).toHaveAttribute("href", "/assets/pdf/ken_nakamura_cv.pdf");
    await expect(page.locator(".cv-button svg")).toHaveCount(0);
    await expect(page.getByRole("link", { name: "LinkedIn", exact: true })).toHaveAttribute("href", "https://www.linkedin.com/in/ken-nakamura-jp/");
    await expect(page.getByRole("link", { name: "GitHub", exact: true })).toHaveAttribute("href", "https://github.com/nken-eccs");
    await expect(page.getByRole("link", { name: "Google Scholar", exact: true })).toHaveAttribute("href", /user=bwohtdYAAAAJ/);
    await expect(page.locator(".site-footer")).toHaveText(`© ${new Date().getFullYear()} Ken Nakamura. All rights reserved.`);
    const layout = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      sticky: getComputedStyle(document.querySelector(".site-header")).position,
      font: document.fonts.check('17px "Source Sans 3"'),
      photo: document.querySelector(".profile-photo").naturalWidth,
      links: [...document.querySelectorAll(".profile-links a")].map((link) => {
        const box = link.getBoundingClientRect();
        return { top: box.top, height: box.height, width: box.width };
      }),
    }));
    expect(layout.overflow).toBe(false);
    expect(layout.sticky).toBe("sticky");
    expect(layout.font).toBe(true);
    expect(layout.photo).toBeGreaterThan(0);
    if (page.viewportSize().width <= 700) {
      expect(layout.links[0].height).toBe(44);
      expect(layout.links.slice(1).map((link) => link.height)).toEqual([56, 56, 56, 56]);
      expect(new Set(layout.links.slice(1).map((link) => link.top)).size).toBe(1);
      expect(
        Math.max(...layout.links.slice(1).map((link) => link.width)) - Math.min(...layout.links.slice(1).map((link) => link.width))
      ).toBeLessThan(1);
    }
    if (route === "/publications/") {
      const citations = page.locator(".publication-list li");
      await expect(citations).toHaveCount(paperCount);
      const years = (await citations.allTextContents()).map((text) => Number(text.match(/\((\d{4})\)/)[1]));
      expect(years).toEqual([...years].sort((a, b) => b - a));
      await expect(page.locator("#nakamura2026beyond a")).toHaveAttribute("href", "https://arxiv.org/abs/2605.20127");
      await expect(citations.locator("strong")).toHaveText(Array(paperCount).fill("Nakamura, K."));
      await expect(page.locator("#asanuma2025correspondence")).toContainText("Scientific Reports, 15, 32175.");
    } else {
      await expect(page.locator("main h2")).toHaveText(["Research Focus", "Education", "Research Visits", "Honors & Fellowships"]);
      await expect(page.locator("main")).toContainText("dynamic information-processing mechanisms");
    }
    await page.screenshot({ path: testInfo.outputPath("page.png"), fullPage: true });
    await page.evaluate(() => window.scrollTo(0, 400));
    expect((await page.locator(".site-header").boundingBox()).y).toBe(0);
    await page.getByRole("link", { name: route === "/" ? "Publications" : "Home", exact: true }).click();
    await expect(page).toHaveURL(route === "/" ? /\/publications\/$/ : /4187\/$/);
    expect(errors).toEqual([]);
  });
}

test("CV files and missing-page navigation are available", async ({ page, request }) => {
  for (const name of ["ken_nakamura_cv.pdf", "ken_nakamura_cv_letter.pdf"]) {
    const response = await request.get(`/assets/pdf/${name}`);
    expect(response.ok()).toBe(true);
    expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  }
  await page.goto("/404.html");
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("link", { name: "Return to the home page" }).click();
  await expect(page.locator("main")).toContainText("Research Focus");
});
