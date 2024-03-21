
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar,Footer,Home,Options} from './Components/index.js';
import Residencia from './Pages/Residencia.jsx';
import Inmobiliaria from './Pages/Inmobiliaria.jsx';
import Conserjeria from './Pages/Conserjeria.jsx';
import Empresa from './Pages/Empresa.jsx';




import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Residencia from './Pages/Residencia';
import Activa from './Components/Activa';
import Inmobiliaria from './Pages/Inmobiliaria';
import Consergeria from './Pages/Consergeria';
import Options from './Components/Options';





function App() {

  
  return (
       
<Router >
   <Navbar />
   <Options/>
       <Routes>
          <Route index element={<Home />} />
          <Route path="/Empresa" element={<Empresa />} />
          <Route path="/Residencia" element={<Residencia />} />
          <Route path="/Inmobiliaria" element={<Inmobiliaria />} />
          <Route path="/Conserjeria" element={<Conserjeria />} /> 
       </Routes>
    <Footer />
</Router>
  )
}

export default App