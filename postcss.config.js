<<<<<<< ours
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgecss({
      content: ['./Index.html', './Blog/Index.html', './js/main.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ['active', 'show', 'hide', /^nav-/] // Keep these classes regardless of usage
    })
  ]
};
|||||||
=======
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
>>>>>>> theirs
