import puppeteer from 'puppeteer'
// const execa = require("execa")
// const {execa} = await import('execa')
import { execa } from 'execa';
import project  from './project.js';
(async () => {
	// 创建一个浏览器实例 Browser 对象
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 20
	});
	
	let first = true;
	async function createProject() {
		return new Promise(async (resolve) => {
			let item = project.projectArr.shift();

			// 通过浏览器实例 Browser 对象创建页面 Page 对象
			const page = await browser.newPage();
			// 通过url参数打开指定的页面
			await page.goto('http://10.0.90.97/');

			page.setViewport({
				width: 1920,
				height: 1080
			});
			if (first) {
				first = false;
				// 账号
				await page.type('#user_login', project.account);
				// 密码
				await page.type('#user_password', project.password);
				// 记住我
				// await page.click('#user_remember_me');
				// 点击登录
				await page.click('.btn.btn-save');
				// 登陆完成跳转首页
				await page.goto('http://10.0.90.97/');
			}

			// new project
			await page.click('.btn.btn-new');
			//输入项目名字
			await page.type('#project_path', item);
			// 创建仓库
			await page.click('.btn.btn-create.project-submit');

			console.log(project.projectArr.length, 'length');
			if (project.projectArr.length === 0) {
				resolve(true);
			}else {
				resolve(await createProject());
            }
		});
	}
	await createProject();
	
	console.log(execa)
	try {
		await execa('deploy.sh','',{ stdio : 'inherit'})
	} catch (error) {
		console.log(error)
	}
	// 关闭浏览器
	// await browser.close();
	// 对页面进行截图
	// await page.screenshot({ path: 'example.png' });

})();
