import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function abc() {
  console.log('test');
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
