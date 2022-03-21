import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import NotFound from './components/Error/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Join />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
