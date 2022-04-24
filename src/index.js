import {html, render} from 'lit-html';
import {styleMap} from 'lit-html/directives/style-map.js';

export default (editor, opts = {}) => {
  const sm = editor.SelectorManager;
  const listEl = document.createElement('div');
  const prefix =  editor.Config.selectorManager.pStylePrefix;
  const selIdAttr = 'data-sel-id';
  const styles = `
    .${prefix}suggest {
      width: 100%;
      position: absolute;
      z-index: 999;
      padding: 0;
      margin: 0;
      left: 0;
      right: 0;
      transition: opacity .25s ease;
      text-align: left;
      padding: 0 5px;
    }
    .${prefix}suggest__class {
      xmargin: 0;
      xpadding: 10px;
      xtext-align: left;
      list-style: none;
      cursor: pointer;
      display: inline-block;
    }
  `

  function update(show, filter = '') {
    render(html`
    <ul
      class="${prefix}suggest ${prefix}one-bg"
      style=${styleMap({
        opacity: show ? '1' : '0',
        'pointer-events': show ? 'initial' : 'none',
      })}
    >
      ${ sm.getAll()
        .filter(sel => !sel.private && !sm.getSelected().includes(sel) && sel.getLabel().includes(filter))
        .sort()
        .map(sel => html`
          <li
            data-sel-id=${sel.id}
            class="${prefix}clm-tag ${prefix}three-bg ${prefix}suggest__class"
            @mousedown=${() => select(sel.id)}
          >
            ${sel.getLabel()}
          </li>
        `) 
      }
    </ul>
  `, listEl);
  }

  function select(selId) {
    const selector = sm.getAll().find(s => s.id === selId);
    sm.addSelected(selector);
  }

  const options = { ...{
    // default options
  },  ...opts };

  editor.on('load', () => {
    // build the UI
    const tags = editor.getContainer().querySelector(`#${prefix}clm-tags-field`);
    const input = tags.querySelector(`#${prefix}clm-new`);
    tags.parentNode.insertBefore(listEl, tags.nextSibling);
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);
    // bind to events
    input.addEventListener('blur', () => update(false));
    input.addEventListener('focus', () => update(true, input.value));
    editor.on('selector', () => update(false));
    input.addEventListener('keyup', () => update(true, input.value));
  })
};
