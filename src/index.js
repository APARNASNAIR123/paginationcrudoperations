import React from 'react';
 import ReactDOM from 'react-dom';
 //import './index.css';
 //import App from './App';
import reportWebVitals from './reportWebVitals';
 //import App1 from './components/app1'
import 'semantic-ui-css/semantic.min.css';
//import App from './components/paginationfilter/App'
//mport Dataserve from './components/postapp'
import App from './crudoperations/App'

/*ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);*/
 /*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
    <Dataserve />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
