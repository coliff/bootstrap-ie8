# Bootstrap 4 for IE8 and IE9 (Beta 2)

Bootstrap 4 drops support for Internet Explorer 8 and 9, but you can add it back by simply adding a conditional statement targeting IE 8 and 9 with a CSS file and a CDN-hosted JavaScript file to polyfill HTML5 element support.

### Usage

1. Add `<meta http-equiv="x-ua-compatible" content="ie=edge">` to the top of the <head> of your page

2. Add the following conditional statements to the <head> of your page but after the Bootstrap 4 CSS.

```html
    <!--[if IE]>
      <link href="/css/bootstrap-ie9.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/g/html5shiv@3.7.3"></script>
    <![endif]-->
    <!--[if lt IE 9]>
	  <link href="/css/bootstrap-ie8.css" rel="stylesheet">
    <![endif]-->
```

### FAQS

**Q. What does this fix/polyfill?**

A. Internet Explorer 9 doesn't support flexbox so there is a float-based layout fallback and a couple of other minor fixes. Internet Explorer 8 doesn't support rem units so all units are specified in pixels. Media Queries are also not supported so IE8 has a fixed-width layout (min-width 998px).

**Q. What about IE7?**

A. This doesn't include any IE7-specific fixes, but it should make it look more presentable. 

**Q. Will the CSS be hosted on a CDN?**

A. Yes, in a future release. 

**Q. Why is the JavaScript completely broken on IE8?**

A. jQuery 3.x doesn't work with IE8 at all - you'll need to load jQuery 1.x. You can do this using conditional comments if you like - see [https://gist.github.com/coliff/6012c1dcc5a7c86878b4ce333823527e](https://gist.github.com/coliff/6012c1dcc5a7c86878b4ce333823527e)

**Q. Will you provide LESS/SASS files?**

A. Maybe in a future release I'll provide SASS file (with comments) and a minified ready-for-production min.css file.

**Q. Do I need the RespondJS polyfill for IE8 like Bootstrap 3 uses?**

A. No. Instead the CSS is set to be fixed-width which makes things a lot easier. You don't need to change your HTML markup, the CSS will take care of it as the (min-width:992px) media queries are all set.

**Q. Where can I see a demo?**

A. Right here: [https://coliff.github.io/bootstrap-ie8/test.htm](https://coliff.github.io/bootstrap-ie8/test.htm)

### Known Issues

- As this is only a CSS stylesheet there are problems with using Bootstrap 4's JavaScript in IE8. An easy workaround is to include a link to the Bootstrap v3 JS file (this fixes the dropdown menus) within the conditional statement. Be sure to use jQuery 1.x too.
- This is not complete yet.
- View a list of known issues at [https://github.com/coliff/bootstrap-ie8/issues](https://github.com/coliff/bootstrap-ie8/issues)
