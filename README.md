#Bootstrap 4 for IE8 (Alpha)

Bootstrap 3 drops support for Internet Explorer 8, but you can add it back by simply adding this conditional CSS.

```html
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// --> 
    <!--[if lt IE 9]>
      <link href="/css/bootstrap-ie8.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/g/html5shiv@3.7.3,respond@1.4.2"></script>
    <![endif]-->
```


### FAQS

* Q. Is this ready to use? 

  A. Not yet.


### Known Issues
- Bootstrap v4 uses rem units for layout which IE8 doesn't support so we need to provide grid layour CSS in px.
- This is not complete yet.
- As this is only a CSS stylesheet there may be problems with using Bootstrap 4's JavaScript in IE8


