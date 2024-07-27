const fs = require('fs');
const path = require('path');

console.log('🚀 Starting standalone build process...');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });
  fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });
}

try {
  // Step 1: Copy and minify CSS (simple approach)
  console.log('🎨 Processing CSS...');
  let cssContent = fs.readFileSync('styles/styles.css', 'utf8');
  
  // Simple CSS minification (remove comments and extra whitespace)
  cssContent = cssContent
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/\s*{\s*/g, '{') // Remove spaces around braces
    .replace(/\s*}\s*/g, '}') // Remove spaces around braces
    .replace(/\s*:\s*/g, ':') // Remove spaces around colons
    .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
    .replace(/\s*,\s*/g, ',') // Remove spaces around commas
    .trim();
  
  fs.writeFileSync('dist/css/styles.min.css', cssContent);
  
  // Step 2: Copy and minify JavaScript (simple approach)
  console.log('⚡ Processing JavaScript...');
  let jsContent = fs.readFileSync('js/main.js', 'utf8');
  
  // Simple JavaScript minification
  jsContent = jsContent
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\/\/.*$/gm, '') // Remove single-line comments
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/\s*{\s*/g, '{') // Remove spaces around braces
    .replace(/\s*}\s*/g, '}') // Remove spaces around braces
    .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
    .replace(/\s*,\s*/g, ',') // Remove spaces around commas
    .trim();
  
  fs.writeFileSync('dist/js/main.min.js', jsContent);
  
  // Step 3: Copy images to dist (Windows compatible)
  console.log('🖼️ Copying images...');
  if (fs.existsSync('Images')) {
    // Use Node.js fs to copy directory recursively
    function copyDir(src, dest) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      const items = fs.readdirSync(src);
      items.forEach(item => {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);
        
        if (fs.statSync(srcPath).isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    }
    
    copyDir('Images', 'dist/Images');
  }
  
  // Step 4: Create optimized HTML
  console.log('📄 Creating optimized HTML...');
  let htmlContent = fs.readFileSync('Index.html', 'utf8');
  
  // Replace CSS and JS references with optimized versions
  htmlContent = htmlContent.replace(
    'href="./styles/styles.css"',
    'href="./css/styles.min.css"'
  );
  htmlContent = htmlContent.replace(
    'src="./js/main.js"',
    'src="./js/main.min.js"'
  );
  
  fs.writeFileSync('dist/index.html', htmlContent);
  
  // Step 5: Show file sizes
  const originalCssSize = fs.statSync('styles/styles.css').size;
  const minifiedCssSize = fs.statSync('dist/css/styles.min.css').size;
  const originalJsSize = fs.statSync('js/main.js').size;
  const minifiedJsSize = fs.statSync('dist/js/main.min.js').size;
  
  console.log('✅ Standalone build completed successfully!');
  console.log('📁 Output files are in the dist/ directory');
  console.log('📊 File size reductions:');
  console.log(`   CSS: ${(originalCssSize / 1024).toFixed(1)}KB → ${(minifiedCssSize / 1024).toFixed(1)}KB (${((1 - minifiedCssSize / originalCssSize) * 100).toFixed(1)}% reduction)`);
  console.log(`   JS: ${(originalJsSize / 1024).toFixed(1)}KB → ${(minifiedJsSize / 1024).toFixed(1)}KB (${((1 - minifiedJsSize / originalJsSize) * 100).toFixed(1)}% reduction)`);
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 