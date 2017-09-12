# Bootstrap 4 for IE8 and IE9 (Beta)

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

* Q. What does this fix/polyill?

  A. Internet Explorer 9 doesn't support flexbox layout so there is a float-based layout fallback
     Internet Explorer 8 doesn't support rem units so all units are specified in pixels.
     Media Queries are also not supported so IE8 has a fixed-width layout.
     Plus much more... 

* Q. What about IE7?

  A. This doesn't include any IE7-specific fixes, but it should make it look more presentable 

* Q. Will the CSS be hosted on a CDN?

  A. Yes, in a future release. 


### Known Issues

- As this is only a CSS stylesheet there are problems with using Bootstrap 4's JavaScript in IE8. An easy workaround is to include a link to the Bootstrap v3 JS file (this fixes the dropdown menus) within the conditional statement. Be sure to use jQuery 1.x too.
- This is not complete yet.
