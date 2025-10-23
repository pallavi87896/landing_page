import './App.css';
import  Navbar  from "./components/navbar";
import { BrowserRouter } from 'react-router-dom';
import { GridBackgroundDemo } from './components/gridBackground';
function App() {
  
  return (
     
    <BrowserRouter>
    <Navbar/>
    <GridBackgroundDemo/>
    </BrowserRouter>
   
  )
}

export default App;
