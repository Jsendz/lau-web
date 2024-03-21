import { useState } from "react";
import { Logo2 } from "../assets";
import {useTranslation} from "react-i18next";;
import { Link } from "react-router-dom";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
    const [t, i18n] = useTranslation("global");

    const handleLanguageChange = (e) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
    };

  return (
    <nav className="w-full flex  items-center navbar bg-forestweb bg-no-repeat bg-cover" >
      <Link to='/'><img src={Logo2} alt="logo Hilltop Agency " className="w-[100px]"  /></Link>
      <div className="flex ml-3 font-bold">
                <button className="px-4 border-r-2 border-black" onClick={() => i18n.changeLanguage("en")} >EN</button>
                <button className="px-4 border-r-2 border-black" onClick={() => i18n.changeLanguage("es")} >ES</button>
                <button className="px-4 border-r-2 border-black" onClick={() => i18n.changeLanguage("fr")} >FR</button>
                <button className="px-4" onClick={() => i18n.changeLanguage("cat")} >CAT</button>
        </div>
       
        
    </nav>
  );
};

export default Navbar;
