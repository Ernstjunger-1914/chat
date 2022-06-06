import { Route, Routes } from 'react-router-dom';
import { ChatPage, LoginPage, RegisterPage } from './components/pages';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ChatPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
