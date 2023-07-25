---
title: "使用Vite和Tailwind开发Hugo主题"
date: 2023-07-25T04:02:11+08:00
draft: false
tags: ["hugo", "vite", "前端"]
categories: ["hugo主题"]
description: "本文将演示如何使用Hugo，Vite和Tailwind来开发Hugo主题。"
author: "Max"
keywords: ["Hugo", "theme", "vite", "tailwind"]
featured: 
  flag: true
  weight: 1
---
## 简介
Hugo以其简洁、快速和灵活性在创作者中广受欢迎。因可生成静态站点，配合全球CDN（如Cloudflare Pages或Netlify），可节省大量托管费用和运维工作，因而是博客理想的选择。

然而，当涉及开发主题时，传统的使用本地JS、CSS和HTML的方法存在局限性。虽然功能齐备且简单明了，但缺乏现代前端开发框架提供的速度和灵活性。整合第三方库经常变得繁琐，需要外部CDN链接或手动下载并放置在静态文件夹中。

经过探索和实验，我发现了一个可行的解决方案。通过利用npm进行依赖管理，使用Vite进行bundle，以及采用Tailwind进行样式设计，我们可以转变Hugo主题开发的方式。而且这种方法还支持热模块替换（HMR），提供实时视觉反馈，更快的布局和设计速度，以及轻松集成highlight.js、mathjax等库的灵活性。

在这篇博文中，我将分享这种方法的关键要点。

## 设置项目
1. 新建博客
```bash
hugo new site my-blog
```
2. 新建主题
```bash
cd my-blog
hugo new theme my-theme
```
3. 初始化npm
```bash
cd themes/my-theme
mkdir src
cd src
npm init -y
```
文件夹结构如下
```
my-blog
├── config.toml
├── content
.....
├── themes
│   └── my-theme
        ├── archetypes
        ├── layouts
        ├── static
        └── src
            ├── node_modules
            ├── package.json
            ├── src
            |   ├── main.js
            |   └── main.css
            └── index.html
            
```
### Vite配置
1. 安装Vite
```bash
npm install vite --save-dev
```
2. 创建vite.config.js
```bash
touch vite.config.js
```
3. 添加以下代码到vite.config.js
```js
module.exports = {
    build : {
        outDir : "../static"
        watch : {
            include : ["src/**", "index.html"]
        }
        rollupOptions : {
            input: {
                main: path.resolve(__dirname, "src/main.js"),
                css: path.resolve(__dirname, "src/main.css"),
            },
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: 'css/[name].[ext]',
            }
        }
    },
```
### Tailwind配置
1. 安装Tailwind
```bash
```bash
npm install tailwindcss --save-dev
```
2. 创建tailwind.config.js
```bash
npx tailwindcss init
```
3. 添加以下代码到tailwind.config.js
```js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,vue,jsx}"
    ],
}
```
4. 安装postcss
```bash
npm install postcss --save-dev
```
5. 创建postcss.config.js
```bash
touch postcss.config.js
```
6. 添加以下代码到postcss.config.js
```js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
}
```
### package.json
这是最重要的部分，这将确保您的项目的HMR工作。
```json
{
  ...
  "scripts": {
    "build": "vite build",
    "dev": "concurrently \"hugo server -D --source=../../../\" \"vite build\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}
```
## 开发主题
1. 在`themes/my-theme/layouts/**/*.html`中写html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ .Title }}</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <header>
        <h1>{{ .Title }}</h1>
    </header>
    <main>
        {{ .Content }}
    </main>
    <footer>
        <p>© {{ now.Format "2006" }} {{ .Site.Title }}</p>
    </footer>
    <script type="module" src="/js/main.js"></script>
</body>
```
2. 在`themes/my-theme/src/main.css`中写css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
3. 在`themes/my-theme/src/main.js`中写js
```js
// hello world
console.log("hello world")
```
4. 运行开发服务器
在`themes/my-theme/src`文件夹中运行
```bash
npm run dev
```
## 如何实现热模块替换
我们可以将热模块替换过程分解为两个步骤：

### 步骤1：Vite 监控并打包

在第一步中，Vite 掌握主导权。它监视 themes/my-theme/src 文件夹，观察其中文件的任何更改。

当进行开发工作时，Vite会工作，将所做的所有更改和优化打包成捆绑文件。结果如何？转换和捆绑后的文件会被放置在 themes/my-theme/static 文件夹中，正如配置文件中所指定的那样。现在，主题已经具备了最新的更新。

### 步骤2：Hugo

在第二步中，Hugo 发挥作用，它监视主题中的两个位置：themes/my-theme/static 文件夹和 themes/my-theme/layouts 文件夹。

themes/my-theme/static 文件夹中的文件修改会触发 Hugo 会触发站点的重建。

## 需要考虑的事项
虽然这篇博文涵盖了基本步骤，但在实施过程中可能会出现一些额外的细节。

首先要记住的一个重要方面是，需要手动将在 HTML 中使用的所有utility class复制到 themes/my-theme/src/index.html 文件中，以确保在构建过程中获得正确的 Tailwind CSS 输出。

此外，如果构建多个 JavaScript 文件，可能会在最小化过程中遇到变量冲突的问题。为了避免这个问题，您可以使用立即调用的函数表达式（IIFE）来解决。

如果计划发布主题而不共享源代码，需要遍历主题文件夹，省略 src/* 目录，并将其余部分复制到指定的主题文件夹中。由于只复制静态文件夹中的 js 和 css 文件，它们已经经过了最小化和优化，因此您无需担心主题的大小。

当然，可以考虑通过自定义脚本来自动化这些过程，提供更多的便利和效率。将这些自动化脚本调整为适合您的特定需求，可以节省时间并简化主题开发流程。

## 优化的项目结构

为了确保项目结构井然有序，我对项目结构进行了改进。现在，我使用三个独立的项目 - "blog"、"theme-dev" 和 "theme"，每个项目都有不同的目的，让我能够专注于特定的任务，并保持模块化。

### 1. 项目 "blog"

在 "blog" 项目中，我专注于撰写内容。这种关注分离确保内容创作始终是主要焦点，不会被主题开发的复杂性所干扰。

### 2. 项目 "theme-dev"

对于实验、设计和主题开发，我依赖于 "theme-dev" 项目。在这里，我探索新的想法，微调布局，并尝试不同的样式，所有这些都在一个类似沙箱的环境中进行。

"theme-dev" 项目包含我主题的所有源代码。我利用 npm、Vite 和 Tailwind 来实现速度、可扩展性和易用性的最佳平衡，从而打造我的主题。

在这个项目中，我还创建了构建脚本。这些脚本简化了开发过程，自动打包主题并准备部署。

### 3. 项目 "theme"

一旦在 "theme-dev" 中完善了我的主题，我就准备好分享它。"theme" 项目充当我主题的发布版本。使用脚本，我可以轻松地将从 "theme-dev" 打包好的文件复制到 "theme" 中。

经过整理的主题，我将其发布到 GitHub，让其他人可以探索、使用。

### 子模块用于分离和同步

我将 "theme" 注册为 "blog" 的子模块，确保我主题的开发与我的内容管理之间有明确的分离。随着我主题的发展，"blog" 保持与最新改进的同步，使主题更新变得轻而易举。

## 总结
总结
