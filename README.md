# Grapesjs Ui Suggest Classes

[DEMO](https://codepen.io/lexo1000/pen/abErmeW)

## Summary

* Plugin name: `grapesjs-ui-suggest-classes`
* UI: a tag list will appear when you click "+" in the class list of an element


## Options

| Option | Description | Default |
|-|-|-
| `option1` | Description option | `default value` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-ui-suggest-classes`
* NPM
  * `npm i grapesjs-ui-suggest-classes`
* GIT
  * `git clone https://github.com/lexoyo/grapesjs-ui-suggest-classes.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-ui-suggest-classes.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-ui-suggest-classes'],
      pluginsOpts: {
        'grapesjs-ui-suggest-classes': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-ui-suggest-classes';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/lexoyo/grapesjs-ui-suggest-classes.git
$ cd grapesjs-ui-suggest-classes
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
