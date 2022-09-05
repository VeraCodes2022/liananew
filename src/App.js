import React,{createContext,useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Thank from './Components/Subscribe/Thank';
import Menu from './Components/Header/Hidemenu/HideMenu';
import './App.css';

export const AppContext=createContext(null);

function App() {

  const [email,setEmail]=useState("");

  return (
    <AppContext.Provider value={{email,setEmail}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact='true' element={<Home/>}></Route>
          <Route path='/thank' exact='true' element={<Thank/>}></Route>
          <Route path='/menu' exact='true' element={<Menu/>}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
