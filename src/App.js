import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './router/home/Home';
import AboutUs from './router/aboutus/AboutUs';
import HowItWorks from './router/keyfeatures/KeyFeatures';
import OurServices from './router/ourSevices/OurServices';
import More from './router/more/More';

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/howitworks" element={<HowItWorks />} />
          <Route exact path="/OurServices" element={<OurServices />} />
          <Route exact path="/More" element={<More />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
