const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/welcome-feature/runtime-es5.js',
        './dist/welcome-feature/polyfills-es5.js',
        './dist/welcome-feature/main-es5.js'
    ]
    
    await fs.ensureDir('./src/assets')
    
    await concat(files, './src/assets/welcome-feature.bootstrap.js')
    console.info('welcome feature created successfully!')

})()


// type .\dist\welcome-feature\runtime-es5.js 
// .\dist\welcome-feature\polyfills-es5.js 
// .\dist\welcome-feature\main-es5.js > 
// .\dist\welcome-feature\welcome-feature.bootstrap.js