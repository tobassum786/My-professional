const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process...');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });
  fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });
}

try {
  // Step 1: Run PurgeCSS
  console.log('📦 Running PurgeCSS...');
  execSync('npx purgecss --config purgecss.config.js', { stdio: 'inherit' });
  
  // Step 2: Minify JavaScript
  console.log('⚡ Minifying JavaScript...');
  execSync('npx terser js/main.js -o dist/js/main.min.js --compress --mangle', { stdio: 'inherit' });
  
  // Step 3: Copy optimized CSS to dist
  console.log('🎨 Copying optimized CSS...');
  if (fs.existsSync('styles/styles.purged.css')) {
    fs.copyFileSync('styles/styles.purged.css', 'dist/css/styles.min.css');
  }
  
  // Step 4: Copy images to dist (Windows compatible)
  console.log('🖼️ Copying images...');
  if (fs.existsSync('Images')) {
    // Use Windows-compatible copy command
    if (process.platform === 'win32') {
      execSync('xcopy Images dist\\Images /E /I /Y', { stdio: 'inherit' });
    } else {
      execSync('cp -r Images dist/', { stdio: 'inherit' });
    }
  }
  
  // Step 5: Create optimized HTML from original
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
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Output files are in the dist/ directory');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 