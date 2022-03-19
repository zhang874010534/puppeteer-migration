## 安装

### npm i --save puppeteer --ignore-scripts 

### node node_modules/puppeteer/install.js

### 修改

puppeteer/project

```js
projectArr: ['ManagerForShuShuNew', 'MPForShuShu'],// 迁移的库
account: 'zhangce', // 账号
password: '123456',// 密码
```

deploy.sh

```shell
projectArr=(ManagerForShuShuNew MPForShuShu)

targetName=zhangce 目标仓库
```





## 使用

### node ./puppeteer.js

### sh ./depoly.sh

### 或者

npm run serve

