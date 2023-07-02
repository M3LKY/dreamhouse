import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Videobg from './assets/img/ho.mp4';

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

import './App.css';

const App = () => {
  return (
    React.createElement('div', { className: 'app-container' },
      React.createElement('video', { className: 'video-bg', src: Videobg, autoPlay: true, muted: true, loop: true }),
      React.createElement('div', { className: 'content' },
        React.createElement(Header, null),
        React.createElement(Routes, null,
          React.createElement(Route, { path: '/dreamhouse', element: React.createElement(Home, null) }),
          React.createElement(Route, { path: '/dreamhouse/property/:id', element: React.createElement(PropertyDetails, null) })
        ),
        React.createElement(Footer, null)
      )
    )
  );
}

export default App;
