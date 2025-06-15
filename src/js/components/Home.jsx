import React from "react";
import Navbar from "./Navbar";      
import Jumbotron from "./Jumbotron";
import Servicios from "./Servicios";          
import Footer from "./Footer";
import Hero from "./Hero";
import WorkCards from "./WorkCards"; // <-- Corrección aquí
import { FaBeer } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Servicios />
            <WorkCards /> {/* <-- Corrección aquí */}
            <Footer />
            <div>
                
            </div>
        </>
    );
};

export default Home;
