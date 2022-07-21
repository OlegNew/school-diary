import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data/data';
// import './scss/component/button.scss';

import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);


