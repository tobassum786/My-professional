#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Create deployment package
    echo "📁 Creating deployment package..."
    tar -czf deployment.tar.gz dist/
    
    echo "🎉 Deployment package created: deployment.tar.gz"
    echo ""
    echo "📋 Next steps:"
    echo "1. Upload deployment.tar.gz to your hosting provider"
    echo "2. Extract the contents to your web root directory"
    echo "3. Ensure your server serves index.html from the dist/ folder"
    echo ""
    echo "🌐 For Netlify:"
    echo "- Set build command: npm run build"
    echo "- Set publish directory: dist"
    echo ""
    echo "🌐 For Vercel:"
    echo "- Set build command: npm run build"
    echo "- Set output directory: dist"
    echo ""
    echo "🌐 For GitHub Pages:"
    echo "- Push the dist/ folder to gh-pages branch"
    echo "- Or use GitHub Actions for automatic deployment"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi 