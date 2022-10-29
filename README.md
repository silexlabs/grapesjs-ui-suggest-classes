> This code is part of a bigger project: [Silex v3](https://github.com/silexlabs/Silex/tree/v3) which aims to be a free/libre alternative to webflow. PR welcome.

# Grapesjs Ui Suggest Classes

[DEMO](https://codepen.io/lexo1000/pen/abErmeW)

## Summary

* Plugin name: `grapesjs-ui-suggest-classes`
* UI: a tag list will appear when you click "+" in the class list of an element
* Feature: suggest css classes as you type

![Suggest CSS classes as you type](https://user-images.githubusercontent.com/715377/164978546-eb6eba13-f20a-4b53-873f-c98d54cdf93b.png)


## Options

| Option | Description | Default |
|-|-|-
| `containerStyle` | The css style of the tags container | check the source code |
| `tagStyle` | The css style of the tags | check the source code |



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
