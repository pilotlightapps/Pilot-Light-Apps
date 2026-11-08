/* Run from any directory with Node.js. No packages or network access required. */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const render = require(path.join(root, "app-detail.js"));
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "apps.js"), "utf8"), context);
const checking = process.argv.includes("--check");
let outdated = false;
for (const app of context.window.PILOT_LIGHT_APPS) {
  if (!/^[a-z0-9-]+\.html$/.test(app.pageUrl)) throw new Error(`Unsafe page path: ${app.pageUrl}`);
  if (!(app.imageWidth > 0 && app.imageHeight > 0)) throw new Error(`Missing image dimensions: ${app.slug}`);
  const file = path.join(root, app.pageUrl);
  const html = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const main = /<main id="app-detail" class="app-detail-main"[^>]*>[\s\S]*?<\/main>/;
  if (!main.test(html)) throw new Error(`Missing app-detail root: ${app.pageUrl}`);
  const expected = html.replace(main, `<main id="app-detail" class="app-detail-main" data-prerendered="true">${render(app)}</main>`);
  if (html === expected) {
    console.log(`${app.pageUrl}: current`);
  } else if (checking) {
    outdated = true;
    console.error(`${app.pageUrl}: stale; run node scripts/build-product-pages.cjs`);
  } else {
    fs.writeFileSync(file, expected);
    console.log(`${app.pageUrl}: generated`);
  }
}
if (outdated) process.exitCode = 1;
