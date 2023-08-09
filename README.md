> This code is part of a bigger project: [Silex v3](https://www.silex.me/) which aims to be a free/libre alternative to webflow
> 
> For bugs and support please [start a discussion here](https://community.silex.me)

# Grapesjs Ui Suggest Classes

[DEMO](https://codepen.io/lexo1000/pen/abErmeW)

## Summary

* Plugin name: `grapesjs-ui-suggest-classes`
* UI: a tag list will appear when you click "+" in the class list of an element
* Feature: suggest css classes as you type

![Suggest CSS classes as you type](https://user-images.githubusercontent.com/715377/164978546-eb6eba13-f20a-4b53-873f-c98d54cdf93b.png)


## Options

| Option | Description | Default |
|-|-|-|
| `containerStyle` | The css style of the tags container | check the source code |
| `tagStyle` | The css style of the tags | check the source code |
| `enablePerformance` | Display execution times | false |
| `enableCount` | Compute and display the number of components using each CSS class, and order classes accordingly. The algorithm for this is not very efficient yet and impacts preformances | true |


## Download

* CDN
  * `https://unpkg.com/grapesjs-ui-suggest-classes`
* NPM
  * `npm i @silexlabs/grapesjs-ui-suggest-classes`
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
import plugin from '@silexlabs/grapesjs-ui-suggest-classes';
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
