import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/MyPortfolio/HomePage';
import ErrorPage from './components/MyPortfolio/ErrorPage';

import logo from './images/abid.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage img={logo}/>}/>
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
);

