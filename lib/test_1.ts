import puppeteer from "puppeteer";
async function scrape(url: string) {
  // 启动浏览器
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // 访问指定的URL
  await page.goto(url);

  // 等待页面加载并获取需要的数据
  // 示例：获取页面上的第一个h1标签的内容
  // const result = await page.evaluate(() => {
  //   const heading = document.querySelector("");
  //   return heading ? heading.innerText : null;
  // });
  setInterval(async () => {
    const content = await page.content();
    console.log(content);
  }, 5000);

  // console.log(result);

  // 关闭浏览器
  // await browser.close();
}

// 使用示例URL调用函数
scrape("https://twitter.com/AlfaDAO_");
