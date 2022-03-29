import logo from './logo.svg';
import './App.css';

// import { Link } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import UsersHome from './pages/UsersHome';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UsersHome />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
