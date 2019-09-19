# fe-question-bank
##### esop-fed前端团队

> Front-end Question Bank of esop-fed.

* 来源：本项目是 esop-fed 团队「技能提升计划」的一部分
* 初衷：希望促进团队成员学习讨论，达成技术共识，推动技术进步
<!-- * 纠偏：Interview并非本项目的目标，面试水平只是技术提升后的副产品 -->

#### Preview

https://esop-fed.github.io/fe-question-bank/

#### Useage

```bash
git clone git@github.com:esop-fed/fe-question-bank.git
npm i
docsify serve docs 或者 npm start
```
然后打开http://localhost:3000

#### Structure

```bash
.
├── docs // 项目文件
│   ├── _coverpage.md // 封面md
│   ├── _media // 静态资源文件
│   ├── _navbar.md // 导航配置md
│   ├── _sidebar.md // 侧边栏配置md
│   ├── index.html // 入口
│   └── questions // 题库，每道题都是一个md
│       └── basic-grammar // 分类文件夹
│           └── program1.md // 题目
├── README.md // 项目说明
└── package.json
```
