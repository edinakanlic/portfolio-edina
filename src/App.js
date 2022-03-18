import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import SingleProject from './pages/SingleProject';
import Projects from './pages/Projects';
import AboutSinglePage from './pages/AboutSinglePage';
import Error from './pages/Error';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/about' element={<AboutSinglePage />} />
        <Route exact path='/projects/:slug' element={<SingleProject />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
