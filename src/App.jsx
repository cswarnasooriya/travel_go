import React from 'react'
import './App.css'

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Catergories from './Components/Categories/Categories';
import Destinations from './Components/Destinations/Destinations/';
import Guide from './Components/Guide/Guide';
import Sponsors from './Components/Sponsors/Sponsors';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
      <Header/>
      <Home/>
      <Catergories />
      <Destinations/>
      <Guide/>
      <Sponsors/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
