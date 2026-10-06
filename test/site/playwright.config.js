const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: __dirname,
  testMatch: "*.spec.js",
  outputDir: "../../test-results/site",
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: "http://127.0.0.1:4187",
    browserName: "chromium",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "python3 -m http.server 4187 --bind 127.0.0.1 --directory _site",
    url: "http://127.0.0.1:4187",
    cwd: require("path").resolve(__dirname, "../.."),
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1024, height: 800 }, colorScheme: "light" } },
    { name: "wide", use: { viewport: { width: 1440, height: 900 }, colorScheme: "light" } },
    { name: "tablet", use: { viewport: { width: 768, height: 900 }, colorScheme: "light" } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 }, colorScheme: "light" } },
    { name: "narrow", use: { viewport: { width: 320, height: 700 }, colorScheme: "light" } },
    { name: "dark-mobile", use: { viewport: { width: 390, height: 844 }, colorScheme: "dark" } },
  ],
});
