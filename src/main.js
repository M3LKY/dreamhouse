import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(HouseContextProvider, null,
    React.createElement(Router, null,
      React.createElement(React.StrictMode, null,
        React.createElement(App, null)
      )
    )
  )
);
