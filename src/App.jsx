
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Residencia from './Pages/Residencia';
import Activa from './Pages/Activa';
import Inmobiliaria from './Pages/Inmobiliaria';
import Consergeria from './Pages/Consergeria';
import Options from './Components/Options';





function App() {
 
  return (
       
<Router >
   <Navbar />
   <Home />
   <Options />
    <Routes>
        <Route path="/Residencia" element={<Residencia />} />
        <Route path="/Empresa" element={<Activa />} />
        <Route path="/Inmobiliaria" element={<Inmobiliaria />} />
        <Route path="/Consergeria" element={<Consergeria />} />
      </Routes>
    <Footer />
</Router>
  )
}

export default App