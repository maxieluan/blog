const path = require('path')
const fs = require('fs')

module.exports = {
    build: {
        watch: {
            include: ['src/**/*', 'index.html']
        },
        outDir: path.resolve(__dirname, '../static'),
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/main.js'),
                maincss: path.resolve(__dirname, 'src/main.css'),
                secondjs: path.resolve(__dirname, 'src/second.js'),
            },
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: 'css/[name].[ext]',
            },
        }
    },
    plugins: [
       
    ],
    server: {
        port: 3000,
    },
}