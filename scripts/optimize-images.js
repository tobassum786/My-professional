const path = require('path');
const fs = require('fs');
const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const svgo = require('imagemin-svgo');

const sourceDir = path.join(__dirname, '..', 'Images');
const outputDir = path.join(sourceDir, 'optimized');

// Ensure the output directory exists before processing files
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const run = async () => {
  console.log('🖼️  Optimizing images...');

  try {
    const files = await imagemin([path.join(sourceDir, '**/*.{jpg,jpeg,png,svg}')], {
      destination: outputDir,
      plugins: [
        mozjpeg({ quality: 75 }),
        pngquant({ quality: [0.6, 0.8] }),
        svgo({ multipass: true }),
      ],
    });

    console.log(`✅ Optimized ${files.length} image(s) to ${outputDir}`);
  } catch (error) {
    console.error('❌ Image optimization failed:', error.message);
    process.exit(1);
  }
};

run();







