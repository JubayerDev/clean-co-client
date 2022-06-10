import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar >
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/services' element={ <Services />} />
          <Route path='/Contact' element={ <Contact />} />
          <Route path='/login' element={ <Login />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
