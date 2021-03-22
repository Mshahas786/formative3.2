import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WorkContainer from './WorkContainer';
import InputWork from './InputWork';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Database from "Database";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <InputWork />
    <WorkContainer />
    <Database />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
