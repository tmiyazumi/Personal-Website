// import Navbar from './Pages/Navbar';
import NavbarNew from './Pages/Components/Navbar/NavbarComp';
import Home from './Pages/Home';
import About from './Pages/About';
import Experiences from './Pages/Experiences';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <BrowserRouter>
    <NavbarNew />
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
