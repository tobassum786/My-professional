module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        colormin: true,
        minifyFontValues: true,
        minifySelectors: true,
      }]
    }),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './Index.html',
        './js/**/*.js'
      ],
      safelist: [
        /^bi-/,
        /^swiper-/,
        /^slide/,
        /^fade/,
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
    })
  ]
} 