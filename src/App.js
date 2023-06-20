import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
