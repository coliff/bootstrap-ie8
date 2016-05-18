#Bootstrap 4 for IE8 (Alpha)

Bootstrap 4 drops support for Internet Explorer 8, but you can add it back by simply adding this conditional CSS and a CDN-hosted JavaScript file to polyfill media query and HTML5 element support.

```html
    <!--[if lt IE 9]>
      <link href="/css/bootstrap-ie8.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/g/html5shiv@3.7.3,respond@1.4.2"></script>
    <![endif]-->
```


### FAQS

* Q. What about IE7 ? 

  A. This doesn't include any IE7-specific fixes, but it should make it look more presentable 


### Known Issues
- Bootstrap v4 uses rem units for layout which IE8 doesn't support so we need to provide grid layout CSS in px.
- As this is only a CSS stylesheet there may be problems with using Bootstrap 4's JavaScript in IE8
- This is not complete yet.
