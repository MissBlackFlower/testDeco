Gulp Boilerplate for generic CSS/HTML/JS development
=============
<a href="http://riverco.de" target="_blank">riverco.de</a> gulp boilerplate.

Structure
=============
`/src/` - thats where you write code.

`/build/` - compiled code. Do not ever edit this folder.

What is happening
=============
We have two options for building html
1) `/src/index.html` and `/src/partials/` - for old school HTML.

2) Optionally one can use `Pug` (it's commented in gulpfile.js). Basic template is in `/src/pug/`

_Sass_ is compiled and postprocessed with Autoprefixer. We are using `gulp-ruby-sass`, so don't forget to _install Ruby and Sass_ to use this boilerplate.

`src/img/icons` are joined into sprite, which could be used in Sass like this:
```
.icon
		+s(png_name)
```

`src/img/svg` are joined into icon font, and can be used like this:
```
<i class="icon-svg_name"></i>
```

We are also using simplest include system with `gulp-rigger`, works for javascrpt and html:
```
//= partials/partial.html
```
