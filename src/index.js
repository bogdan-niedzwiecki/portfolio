import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import font from './assets/fonts/MADE-Soulmaze.otf';
import grains from './assets/images/grains.webp';

let preloadFont = () => {
  let preloadFont = document.createElement('link');
  preloadFont.rel = 'preload';
  preloadFont.href = font;
  preloadFont.as = 'font';
  preloadFont.type = 'font/otf';
  document.head.appendChild(preloadFont);
}

let preloadGrains = () => {
  let preloadGrains = document.createElement('link');
  preloadGrains.rel = 'preload';
  preloadGrains.href = grains;
  preloadGrains.as = 'image';
  document.head.appendChild(preloadGrains);
}

preloadFont();
preloadGrains();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
