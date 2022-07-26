import './App.css';
import Header from './common/header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pages from './pages/Pages';
import Data from './components/flashDetails/Data'
import { useState } from 'react';
import Cart from './common/Cart/Cart';
import Footer from './common/footer/Footer';


function App() {

  const {productItems} = Data

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Pages productItems={productItems}/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
