import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Menu from './Components/Header/Hidemenu/HideMenu';

import './App.css';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact='true' element={<Home/>}></Route>
          <Route path='/menu' exact='true' element={<Menu/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
