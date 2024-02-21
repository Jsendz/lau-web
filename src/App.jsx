
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
=======
import {Navbar,Footer,Home,Options} from './Components/index.js';
import Residencia from './Pages/Residencia.jsx';
import Inmobiliaria from './Pages/Inmobiliaria.jsx';
import Conserjeria from './Pages/Conserjeria.jsx';
import Empresa from './Pages/Empresa.jsx';



>>>>>>> a9cdc17359bf833c32e6eadef5589c44a1a8a602

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
<<<<<<< HEAD
   <Home />
   <Options />
    <Routes>
        <Route path="/Residencia" element={<Residencia />} />
        <Route path="/Empresa" element={<Activa />} />
        <Route path="/Inmobiliaria" element={<Inmobiliaria />} />
        <Route path="/Consergeria" element={<Consergeria />} />
      </Routes>
=======
   <Options/>
       <Routes>
          <Route index element={<Home />} />
          <Route path="/Empresa" element={<Empresa />} />
          <Route path="/Residencia" element={<Residencia />} />
          <Route path="/Inmobiliaria" element={<Inmobiliaria />} />
          <Route path="/Conserjeria" element={<Conserjeria />} /> 
       </Routes>
>>>>>>> a9cdc17359bf833c32e6eadef5589c44a1a8a602
    <Footer />
</Router>
  )
}

export default App