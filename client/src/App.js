import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Join} />
        <Route path='/chat' element={Chat} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
