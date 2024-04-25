import React from "react";
import { Link } from "react-router-dom";
import pokeball from "../../assets/pokeball.png";


const NavigationBar: React.FC = () => (
    <nav className="mx-auto bg-yellow-400 flex justify-between h-12 items-center shadow-lg">
        <div className="mx-auto flex justify-between items-center w-9/12">
            <Link to="/">
            <img src={pokeball} alt="Poke Logo" className="h-10 w-10" />
            </Link>
            <div className="flex gap-5 items-center">
                <Link className="text-black hover:text-white" to="/">Pokedex</Link>
                <Link className="text-black hover:text-white" to="/favorite">Favorites</Link>
            </div>
        </div>
    </nav>
);

export default NavigationBar;