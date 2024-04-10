import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'

import VendingMachine from './VendingMachine'
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<VendingMachine/>} />
        <Route path='/Chips' element={<Chips/>} />
        <Route path='/Soda' element={<Soda/>} />
        <Route path='/Candy' element={<Candy/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;