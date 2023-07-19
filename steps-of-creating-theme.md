1. create site
```bash
hugo new site site-name
```
2. create theme
```bash
cd site-name
hugo new theme theme-name
```
3. create content
```bash
hugo new posts/my-first-post.md
```
4. run server
```bash
npm run dev
```
5. add scripts
a. add script second.js in src/src
b. in `vite.config.js`, rollupOptions -> input: add
```js
secondjs: path.resolve(__dirname, 'src/second.js'),
```
c. re-run `npm run dev`
6. add style
a. add style `second.css` in `src/src`
b. in `vite.config.js`, css: add
```js
secondstyle: path.resolve(__dirname, 'src/second.css'),
```
c. re-run `npm run dev`
7. use tailwind
It is well known, that tailwindcss has the purge mode. So, I have this dummy html in src folder. 
If you introduce some new classes in your html, you have to also include them in dummy html, for they will be included in the bundled css
