# Tobassum Munir - Front-end Developer Portfolio

A modern, responsive portfolio website showcasing front-end development skills and projects.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern CSS
- **Performance Optimized**: PurgeCSS integration for minimal CSS bundle
- **Modern Build Tools**: Webpack, PostCSS, and optimization pipeline
- **Code Quality**: ESLint, Stylelint, and Prettier for consistent code
- **Image Optimization**: Automated image compression and optimization
- **SEO Optimized**: Structured data and meta tags

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Animations
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Build Tools**: Webpack, PostCSS, PurgeCSS
- **Code Quality**: ESLint, Stylelint, Prettier
- **Icons**: Bootstrap Icons
- **Slider**: Swiper.js

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd My-professional
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
This will start a live server on `http://localhost:3000`

### Build for Production
```bash
npm run build
```
This will:
- Purge unused CSS with PurgeCSS
- Minify JavaScript with Terser
- Optimize images
- Generate optimized assets in `dist/` folder

### Code Quality

#### Lint CSS
```bash
npm run lint:css
# Alias:
npm run csslint
```

#### Lint JavaScript
```bash
npm run lint:js
```

#### Format Code
```bash
npm run format
```

### Optimize Images
```bash
npm run optimize-images
```
Optimized copies are written to `Images/optimized/` without altering the originals.

### One-Command Setup
```bash
npm run setup
```
Runs CSS linting and generates optimized image assets to speed up first-time setup.

## 📁 Project Structure

```
My-professional/
├── Images/                 # Image assets
│   ├── blog images/       # Blog related images
│   ├── favicon/          # Favicon files
│   ├── projects/         # Project screenshots
│   └── web__assest/      # Web assets and icons
├── js/                   # JavaScript files
│   └── main.js          # Main JavaScript file
├── styles/              # CSS files
│   └── styles.css       # Main stylesheet
├── dist/                # Build output (generated)
├── Index.html           # Main HTML file
├── package.json         # Dependencies and scripts
├── webpack.config.js    # Webpack configuration
├── postcss.config.js    # PostCSS configuration
├── purgecss.config.js   # PurgeCSS configuration
├── .eslintrc.json       # ESLint configuration
├── .stylelintrc.json    # Stylelint configuration
├── .prettierrc          # Prettier configuration
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## 🔧 Build Process

### CSS Optimization
- **PurgeCSS**: Removes unused CSS classes
- **Autoprefixer**: Adds vendor prefixes automatically
- **CSSNano**: Minifies and optimizes CSS
- **PostCSS**: Processes CSS with plugins

### JavaScript Optimization
- **Terser**: Minifies and compresses JavaScript
- **Babel**: Transpiles modern JS to compatible versions
- **Webpack**: Bundles and optimizes assets

### Image Optimization
- **ImageMin**: Compresses images without quality loss
- **MozJPEG**: Optimizes JPEG images
- **PNGQuant**: Optimizes PNG images
- **SVGO**: Optimizes SVG files

## 🎯 Performance Features

- **CSS Purge**: Removes unused styles automatically
- **Minification**: Compressed CSS and JS files
- **Image Optimization**: Compressed images for faster loading
- **Code Splitting**: Optimized bundle sizes
- **Caching**: Proper cache headers and versioning

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

**Tobassum Munir**
- Front-end Developer
- Portfolio: [tmweb2.netlify.app](https://tmweb2.netlify.app/)
- GitHub: [@tobassum786](https://github.com/tobassum786)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📞 Contact

- **Email**: tobassum@msn.com
- **Phone**: +966-538975722
- **WhatsApp**: [wa.me/966538975722](https://wa.me/966538975722)
