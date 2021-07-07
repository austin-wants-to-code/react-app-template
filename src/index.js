/**
 * index.js is the entryway of the application. It is what connects the React 
 * application to the actual HTML DOM. It should serve no purpose other than that.
 * 
 *** Because the file has just this one purpose, and due to the difficulty in     ***
 *** testing this file, it should not be extended needlessly. Any potential       ***
 *** changes to index.js should instead be made to App.js or other files          ***  
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ROOT_ELEMENT_CLASS } from './constants/applicationConstants';
import App from './components/App';

ReactDOM.render(<App/>, document.getElementById(ROOT_ELEMENT_CLASS));