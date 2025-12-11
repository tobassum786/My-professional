# PurgeCSS Integration Guide

## Overview
PurgeCSS has been integrated into this project to remove unused CSS, resulting in smaller file sizes and improved performance.

## How It Works
The configuration scans the following files for CSS class usage:
- `./Index.html`
- `./Blog/Index.html`
- `./js/main.js`

It then removes any CSS that isn't being used in these files, with exceptions for classes in the safelist.

## Safelist
The following classes are preserved regardless of usage detection:
- `active` - Used for menu toggling
- `show` - Used for FAQ sections
- `hide` - Common utility class
- Any class starting with `nav-` - Navigation-related classes

## Running PurgeCSS
To generate the optimized CSS file:

```bash
npm run purge
```

This will create a new file at `./styles/purged.css` containing only the CSS that's actually used in your project.

## Using the Purged CSS
To use the optimized CSS in production:

1. Replace the CSS link in your HTML files:

```html
<!-- Change this: -->
<link rel="stylesheet" href="./styles/styles.css">

<!-- To this: -->
<link rel="stylesheet" href="./styles/purged.css">
```

2. Verify that all styling appears correctly after the change.

## Troubleshooting
If you notice missing styles after using the purged CSS:

1. Check if the missing class needs to be added to the safelist in `postcss.config.js`
2. Ensure all your HTML/JS files are included in the content array
3. Run the purge process again after making changes