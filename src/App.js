import logo from './logo.svg';
import './App.css';

// import { Link } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import UsersHome from './pages/UsersHome';
import OrdersHome from './pages/OrdersHome';
import UserCreate from './pages/UserCreate';
import UserDetails from './pages/UserDetails';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TransactionHome from './pages/TransactionHome';
import Settings from './pages/Settings';
import AppSettings from './pages/AppSettings';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <section>
          <div>
            <Navbar />
          </div>
        </section>
        <section className='w-full flex'>
          <div className='w-2/12 h-100'>
            <SideBar/>
          </div>
          <div className='w-10/12'>
              <Routes>
                <Route path="/admin" element={<Home />} index/>
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/orders" element={<OrdersHome />} />
                <Route path="/admin/users" element={<UsersHome />} />
                <Route path="/admin/transactions" element={<TransactionHome />} />
                <Route path="/admin/users/create" element={<UserCreate />} />
                <Route path="/admin/users/:id" element={<UserDetails />} />
                <Route path="/admin/settings" element={<Settings />} />
                <Route path="/admin/appsettings" element={<AppSettings />} />
              </Routes>
            </div>
        </section>
        <section>
          <div>
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
