import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
        <Header />
    <ToastContainer position='top-center' />
  
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route  path="/Add" Component={AddEdit} />
        <Route  path="/update/:id" Component={AddEdit} />
        <Route  path="/view/:id" Component={View} />
        <Route  path="/about" Component={About} />
        <Route  path="/search" Component={Search} />

      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;