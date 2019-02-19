[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/coliff/bootstrap-ie8/master/LICENSE)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/coliff)
[![NPM Downloads](https://img.shields.io/npm/dt/bootstrap-ie8.svg)](https://www.npmjs.com/package/bootstrap-ie8)
[![](https://data.jsdelivr.com/v1/package/gh/coliff/bootstrap-ie8/badge)](https://www.jsdelivr.com/package/gh/coliff/bootstrap-ie8)
[![github-stars-image](https://img.shields.io/github/stars/coliff/bootstrap-ie8.svg?label=github%20stars)](https://github.com/coliff/bootstrap-ie8)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Bootstrap 4 for IE8 and IE9

Bootstrap 4 drops support for Internet Explorer 8 and 9, but you can add it back by simply adding a conditional statement targeting IE 8 and 9 with a CSS file and a CDN-hosted JavaScript file to polyfill HTML5 element support.

### Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/coliff/bootstrap-ie8/archive/v4.3.1.zip)
- Clone the repo `git clone https://github.com/coliff/bootstrap-ie8.git`
- Install with [npm](https://www.npmjs.com/package/bootstrap-ie8) `npm install bootstrap-ie8`
- Install with [yarn](https://yarnpkg.com/en/package/bootstrap-ie8) `yarn add bootstrap-ie8`
- Install with [Composer](https://getcomposer.org/) `composer require coliff/bootstrap-ie8:4.3.1`

### Usage

1.  Add `<meta http-equiv="x-ua-compatible" content="ie=edge">` to the top of the <head> of your page

2.  Add the following conditional statements to the `<head>` of your page but after the Bootstrap 4 CSS:

```html
<!--[if IE 9]>
  <link href="https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/css/bootstrap-ie9.min.css" rel="stylesheet">
<![endif]-->
<!--[if lte IE 8]>
  <link href="https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/css/bootstrap-ie8.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/g/html5shiv@3.7.3"></script>
<![endif]-->
```

#### Optional JavaScript Fix

To fix the dropdown menus and modals you can add the following to the footer:

```html
<!--[if gte IE 9]><!-->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<!--<![endif]-->
<!--[if IE 9]>
  <script src="https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/js/bootstrap-ie9.min.js"></script>
<![endif]-->
<!--[if lte IE 8]>
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/js/bootstrap-ie8.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.js"></script>
<![endif]-->
```

This will load jQuery, PopperJS and Bootstrap as normal on all browsers other than IE8.
IE9 will load the `bootstrap-ie9.js` script.
IE8 will load the latest compatible version of jQuery, the unminified Bootstrap JS (the minified version causes an error) and the `bootstrap-ie8.js` fix.

### FAQS

**Q. What does this fix/polyfill?**

A. Internet Explorer 9 doesn't support flexbox so there is a float-based layout fallback and a couple of other minor fixes. Internet Explorer 8 doesn't support rem units so all units are specified in pixels. Media Queries are also not supported so IE8 has a fixed-width layout (min-width 998px).

**Q. Is the CSS hosted on a CDN?**

A. Yes, thanks to [JSDelivr](https://www.jsdelivr.com/package/gh/coliff/bootstrap-ie8?path=css) minified versions are available with the direct links:

- https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/css/bootstrap-ie8.min.css

- https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/css/bootstrap-ie9.min.css

**Q. Will you provide LESS/SASS files?**

A. Maybe in a future release I'll provide SASS file (with comments).

**Q. Do I need the RespondJS polyfill for IE8 like Bootstrap 3 uses?**

A. No. Instead the CSS is set to be fixed-width which makes things a lot easier. You don't need to change your HTML markup, the CSS will take care of it as the (min-width:992px) media queries are all set.

**Q. Where can I see a demo?**

A. Right here: [http://coliff.github.io/bootstrap-ie8/test.htm](http://coliff.github.io/bootstrap-ie8/test.htm)

**Q. I don't have access to IE8/IE9 browser to test- how can I see how my site appears?**

A. You could use my free [Multi-Browser Screenshots Chrome Extension](https://chrome.google.com/webstore/detail/multi-browser-screenshots/dhaknibfbngnmflbejdkliedmjmbjojk) to see screenshots of any webpage.

### Known Issues

- View a list of known issues at [https://github.com/coliff/bootstrap-ie8/issues](https://github.com/coliff/bootstrap-ie8/issues)
