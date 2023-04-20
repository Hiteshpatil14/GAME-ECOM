import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import { useState } from 'react';
import Checkout from './components/Checkout';
import {BrowserRouter,Routes,Route} from "react-router-dom"


const Cartcontext=React.createContext()

const Cartprovider=({children})=>{
  const [total,setTotal]=useState(0)
  const [cart,setCart]=useState([])
  const addtocart=(element)=>{
    setCart([...cart,element])
    setTotal(total+element.attributes.Price)

  }
  const removefromcart=(id)=>{
    const prr=[...cart]
   const value= prr.splice(id,1)
   
   setTotal(total-value[0].attributes.Price)
    setCart([...prr])
  }
  return <Cartcontext.Provider value={{cart,addtocart,total,removefromcart}}>
    {children}
  </Cartcontext.Provider>
}

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Cartprovider >
      <Header />
      <Routes >
        <Route exact path='/' element={<Home/>}/>
        <Route path='/checkout' element={ <Checkout />}/>
     
      </Routes>
      
      </Cartprovider>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
export {Cartcontext}
