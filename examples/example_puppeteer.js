const puppeteer = require("puppeteer")

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://mhaidarhanif.com")
  await page.screenshot({ path: "mhaidarhanifcom.png" })

  await browser.close()
})()
