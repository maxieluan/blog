---
title: "Development of Hugo Theme with Vite and Tailwind"
date: 2023-07-25T04:02:11+08:00
draft: false
tags: ["hugo", "vite", "frontend"]
categories: ["hugo theme"]
description: "This post is to demostrate how to use Hugo, Vite and Tailwind to develop a Hugo theme."
author: "Max"
keywords: ["Hugo", "theme", "vite", "tailwind"]
featured: 
  flag: true
  weight: 1
---
## introduction
Hugo, with its simplicity, speed, and flexibility, has been popular among bloggers and portfolio creators worldwide. Its ability to effortlessly generate static sites, deployable with ease using global CDNs like Cloudflare Pages or Netlify, is a major advantage. The low hosting cost and minimal maintenance required make it an ideal choice, allowing content creators to focus on what matters most – writing and designing their sites.

However, when it comes to developing a theme, the traditional approach using native JS, CSS, and HTML has its limitations. While functional and straightforward, it lacks the speed and flexibility offered by modern frontend development. Integrating third-party libraries often becomes a cumbersome task, necessitating external CDN links or manual downloads placed within the static folder.

Through extensive exploration and experimentation, I've unlocked a viable solution. By leveraging npm for dependency management, harnessing Vite for theme bundling, and embracing Tailwind for styling, we can revolutionize Hugo theme development. And that's not all – this approach supports Hot Module Replacement (HMR), providing real-time visual feedback, faster layout and design, and enhanced extensibility with effortless integration of libraries like highlight.js, mathjax, and more.

In this blog post, I will share the key aspects of this approach

## Project Setup
1. Create a new Hugo site
```bash
hugo new site my-blog
```
2. Create a theme
```bash
cd my-blog
hugo new theme my-theme
```
3. Initialize npm
```bash
cd themes/my-theme
mkdir src
cd src
npm init -y
```
The folder structure should look like this:
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
### Vite Configuration
1. Install Vite
```bash
npm install vite --save-dev
```
2. Create a vite.config.js file
```bash
touch vite.config.js
```
3. Add the following code to vite.config.js
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
### Tailwind Configuration
1. Install Tailwind
```bash
npm install tailwindcss --save-dev
```
2. Create a tailwind.config.js file
```bash
npx tailwindcss init
```
3. Add the following code to tailwind.config.js
```js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,vue,jsx}"
    ],
}
```
4. postcss configuration
```bash
npm install postcss --save-dev
```
5. Create a postcss.config.js file
```bash
touch postcss.config.js
```
6. Add the following code to postcss.config.js
```js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
}
```
### package.json
This is the most important part, this will ensure your HMR works for your project. 
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
## Development
1. Write html in `themes/my-theme/layouts/**/*.html`
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
2. Write css in `themes/my-theme/src/main.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
3. Write js in `themes/my-theme/src/main.js`
```js
// hello world
console.log("hello world")
```
4. Run dev server
In `themes/my-theme/src` folder, run
```bash
npm run dev
```
## How this works:
We can break down the hot module reload process into two step process:

### Step 1: Vite Monitors and Bundles

Vite takes center stage in the first step. It keeps a watchful eye on the themes/my-theme/src folder, attentively monitoring for any changes in the files residing within.

As you work, Vite jumps into action, swiftly bundling all the changes and optimizations you've made. The result? Your transformed and bundled files are deposited into the themes/my-theme/static folder as specified in config file. Now, your theme is equipped with the latest updates, ready to show off its new look and functionality.

### Step 2: Hugo Springs to Action

In the second step, Hugo comes alive, keeping an eye on two locations within your theme: the themes/my-theme/static folder and the themes/my-theme/layouts folder.

Any modifications to the files residing in the themes/my-theme/static folder serve as a trigger for Hugo. As soon as it detects these changes, it sets off the rebuild process for your entire site. Just like that, your Hugo site gets a hot reload, reflecting the latest updates you made to your theme.

## Things to consider
While this blog post covered the essential steps, there are additional details that may arise during your implementation.

One key aspect to remember is that you'll need to manually copy all the utility classes used in your HTML to themes/my-theme/src/index.html to ensure proper Tailwind CSS output during the build process. This step ensures your theme's styling is as efficient and polished as possible.

Additionally, when building multiple JavaScript files, you may encounter variable collisions during the minification process. To avoid this issue, using Immediately Invoked Function Expressions (IIFE) can be a handy solution.

If you plan to publish your theme without sharing the source code, you'll need to traverse the theme folder, omit `src/*` and copy the rest to your designated theme folder. Since you only copy js and css files from static folder, they are minified and optimized, so you don't need to worry about the size of your theme.

Of course, automating these processes through custom scripts is an option to consider, providing further convenience and efficiency. Tailoring these automation scripts to fit your specific needs can save time and streamline your theme development workflow.

## Optimized Project Structure

To ensure a well-organized and efficient theme development process, I've revamped my project structure. Now, I work with three separate projects – "blog," "theme-dev," and "theme" – each serving a distinct purpose, allowing me to focus on specific tasks and keep things modular.

### 1. Project "blog"

In the "blog" project, I concentrate solely on crafting compelling content. This separation of concerns ensures that content creation remains the primary focus without distractions from theme development intricacies.

### 2. Project "theme-dev"

For experimentation, design, and theme development, I rely on the "theme-dev" project. Here, I have the freedom to explore new ideas, fine-tune layouts, and experiment with different styles, all within a sandbox-like environment.

"theme-dev" houses all the source code for my theme, making it the hub of creativity and innovation. I leverage npm, Vite, and Tailwind to achieve the optimal balance of speed, extensibility, and ease of use in crafting my themes.

Within this project, I also create build scripts tailored to my specific needs. These scripts streamline the development process, automatically bundling the theme and preparing it for deployment.

### 3. Project "theme"

Once my theme is perfected in "theme-dev", I'm ready to share it with the world. Project "theme" serves as the published version of my theme. Using scripts, I seamlessly copy the bundled files from "theme-dev" to "theme."

With my theme neatly packaged, I publish it to GitHub, allowing others to explore, use, and appreciate the work and creativity poured into its development. 

### Submodules for Separation and Synchronization

I register "theme" as a submodule within "blog" ensuring clear separation between my theme's development and my content management. As I evolve my theme, "blog" remains in sync with the latest improvements, making theme updates a breeze.

## Conclusion
Happy coding!