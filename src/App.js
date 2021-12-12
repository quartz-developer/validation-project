import './App.css';
import { Routes , Route , Navigate } from 'react-router';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <div>

      <Routes> 
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
      
    </div>
  );
}

export default App;
