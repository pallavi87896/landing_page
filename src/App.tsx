import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css';
import  Navbar  from "./components/navbar";
import Contests from './components/Contests';
import Problems from './components/Problems';
import { Header } from './components/header';
import Dashboard from './components/Dashboard';
import  Cards  from './components/cards';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { GridBackgroundDemo } from './components/gridBackground';
import CodeToReward from './components/demo';
import HowItWorks from './components/howItWorks';
import CTASection from './components/cta';
import Footer from './components/footer';
function App() {
  
  return (
     
    <BrowserRouter>
    <Navbar/>
    <GridBackgroundDemo/>
    
    </BrowserRouter>
   
  )
}

export default App;
