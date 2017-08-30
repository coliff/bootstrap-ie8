# Bootstrap 4 for IE8 and IE9 (Beta)

Bootstrap 4 drops support for Internet Explorer 8 and 9, but you can add it back by simply adding a conditional statement targeting IE 8 and 9 with a CSS file and a CDN-hosted JavaScript file to polyfill media query and HTML5 element support.


### Usage

1. Add `<meta http-equiv="x-ua-compatible" content="ie=edge">` to the top of the <head> of your page

2. Add the following conditional statement to the <head> of your page but after the Bootstrap 4 CSS. It won't work with a CDN-hosted CSS file - your CSS must be hosted local in order for the RespondJS polyfill to work.

```html
    <!--[if IE]>
      <link href="/css/bootstrap-ie8.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/g/html5shiv@3.7.3,respond@1.4.2"></script>
    <![endif]-->
```


### FAQS

* Q. What about IE7?

  A. This doesn't include any IE7-specific fixes, but it should make it look more presentable 

* Q. Will the CSS be hosted on a CDN?

  A. Unfortunately, RespondJS (which is required to polyfill Media Query support) only works with local CSS so the Bootstrap IE8 CSS needs to be hosted locally. 


### Known Issues

- Bootstrap v4 uses rem units for layout which IE8 doesn't support so we need to provide grid layout CSS in px.
- As this is only a CSS stylesheet there are problems with using Bootstrap 4's JavaScript in IE8. An easy workaround is to include a link to the Bootstrap v3 JS file (this fixes the dropdown menus) wtihin the conditional statement.
- This is not complete yet.
