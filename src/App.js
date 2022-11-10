import logo from './logo.svg';
import './App.css';

// import { Link } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import UsersHome from './pages/UsersHome';
import TripsHome from './pages/TripsHome';
import UserCreate from './pages/UserCreate';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Routes>
          <Route path="/admin" element={<Home />} index/>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/trips" element={<TripsHome />} />
          <Route path="/admin/users" element={<UsersHome />} />
          <Route path="/admin/users/create" element={<UserCreate />} />
          <Route path="/admin/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
