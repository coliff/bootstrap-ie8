[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/coliff/bootstrap-ie8/master/LICENSE)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/coliff)
[![](https://data.jsdelivr.com/v1/package/gh/coliff/bootstrap-ie8/badge)](https://www.jsdelivr.com/package/gh/coliff/bootstrap-ie8)

# Bootstrap 4 for IE8 and IE9

Bootstrap 4 drops support for Internet Explorer 8 and 9, but you can add it back by simply adding a conditional statement targeting IE 8 and 9 with a CSS file and a CDN-hosted JavaScript file to polyfill HTML5 element support.

### Usage

1. Add `<meta http-equiv="x-ua-compatible" content="ie=edge">` to the top of the <head> of your page

2. Add the following conditional statements to the `<head>`:

```html
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!--[if IE 9]>
      <link href="css/bootstrap-ie9.min.css" rel="stylesheet">
    <![endif]-->
    <!--[if lte IE 8]>
      <link href="css/bootstrap-ie8.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/g/html5shiv@3.7.3"></script>
      <script src="https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/js/bootstrap-ie8.js"></script>
    <![endif]-->
```

If you are using the bootstrap.js code add the following to the footer:

```html
  <!--[if gte IE 9]><!-->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <!--<![endif]-->
  <!--[if lte IE 8]>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.js"></script>
  <![endif]-->
```

This will load jQuery, PopperJS and Bootstrap as normal on all browsers other than IE8.
IE8 will instead load the latest compatible version of jQuery, the unminified Bootstrap JS (the minified version causes an error) and the Bootstrap IE8 fix.

### FAQS

**Q. What does this fix/polyfill?**

A. Internet Explorer 9 doesn't support flexbox so there is a float-based layout fallback and a couple of other minor fixes. Internet Explorer 8 doesn't support rem units and media queries. The bootstrap-ie8.js module fixes this.

**Q. What about IE7?**

A. This doesn't include any IE7-specific fixes, but it should make it look more presentable. 

**Q. Is the CSS hosted on a CDN?**

A. Yes, thanks to [JSDelivr](https://www.jsdelivr.com/package/gh/coliff/bootstrap-ie8?path=css) minified versions are available with the direct links:

   https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/css/bootstrap-ie8.min.css

   https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/css/bootstrap-ie9.min.css

   Caution! bootstrap-ie8.js works by requesting a pristine copy of your CSS via AJAX, so if you host your stylesheets on a CDN (or a subdomain), you'll need to set up a local proxy to request the CSS for old IE browsers. Prior versions recommended a deprecated x-domain approach, but a local proxy is preferable (for performance and security reasons) to attempting to work around the cross-domain limitations.

**Q. Why is the JavaScript completely broken on IE8?**

A. jQuery 3.x doesn't work with IE8 at all - you'll need to load jQuery 1.x. You can do this using conditional comments if you like - see [this gist](https://gist.github.com/coliff/6012c1dcc5a7c86878b4ce333823527e).

**Q. Will you provide LESS/SASS files?**

A. Maybe in a future release I'll provide SASS file (with comments).

**Q. Do I need the RespondJS polyfill for IE8 like Bootstrap 3 uses?**

A. No. Instead the CSS is set to be fixed-width which makes things a lot easier. You don't need to change your HTML markup, the CSS will take care of it as the (min-width:992px) media queries are all set.

**Q. Where can I see a demo?**

A. Right here: [http://coliff.github.io/bootstrap-ie8/test.htm](http://coliff.github.io/bootstrap-ie8/test.htm)

**Q. I don't have access to IE8/IE9 browser to test- how can I see how my site appears?**

A. You could use my free [Multi-Browser Screenshots Chrome Extension](https://chrome.google.com/webstore/detail/multi-browser-screenshots/dhaknibfbngnmflbejdkliedmjmbjojk) to see screenshots of any webpage.

### Known Issues

- As this is only a CSS stylesheet there are problems with using Bootstrap 4's JavaScript in IE8. An easy workaround is to include a link to the Bootstrap v3 JS file (this fixes the dropdown menus) within the conditional statement. Be sure to use jQuery 1.x too.
- View a list of known issues at [https://github.com/coliff/bootstrap-ie8/issues](https://github.com/coliff/bootstrap-ie8/issues)
