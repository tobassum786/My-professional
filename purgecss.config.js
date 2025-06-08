module.exports = {
  content: [
    'Index.html',
    'js/**/*.js',
    'styles/**/*.css'
  ],
  css: [
    'styles/styles.css'
  ],
  output: 'styles/styles.purged.css',
  safelist: [
    // Bootstrap Icons classes that might be dynamically added
    /^bi-/,
    // Swiper classes
    /^swiper-/,
    // Animation classes
    /^slide/,
    /^fade/,
    // Utility classes that might be used dynamically
    'activated',
    'show',
    'current',
    'open__menu',
    'close__menu',
    'add__btn',
    'minimize__btn',
    'toggle__icons',
    'toggle__menu',
    'nav__items',
    'nav__links',
    'faq__toggle',
    'faq__menu',
    'faq__items',
    'faqs__dropdown'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  fontFace: true,
  keyframes: true,
  variables: true
} 