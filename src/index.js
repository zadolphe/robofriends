import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card.jsx';
import "tachyons";
//have to destructure since robots.js does not have export default
import { robots } from './robots';
import App from "./App.jsx";
import CardList from "./CardList";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


