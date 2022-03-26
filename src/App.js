import logo from './logo.svg';
import './App.css';
// import { BrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import SideBar from './components/SideBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <SideBar></SideBar>
        <div className='content'>
          <div className='content-warp'>content</div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
