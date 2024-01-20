import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import Home from './pages/Home';
import MyBio from './pages/MyBio';

function App() {
  return (
    <Router>
      <div>
        <div className='home-banner'>

        </div>

        <CustomNavbar />

        <div className='home'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<MyBio />} />
          </Routes>
        </div>

        <CustomFooter />
      </div>

    </Router>
  );
}

export default App;
