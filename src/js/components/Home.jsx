import React from "react";
import Navbar from "./Navbar";      
import Jumbotron from "./Jumbotron";
import Servicios from "./Servicios";          
import Footer from "./Footer";
import Hero from "./Hero";
import WorkCards from "./WorkCards";
import ContactPage from "../pages/Contacto";
import { FaBeer } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <Navbar />
            <div id="inicio">
                <Jumbotron />
            </div>
            <div id="servicios">
                <Servicios />
            </div>
            {/* El ContactPage ya tiene id="contacto" */}
            <ContactPage />
            <WorkCards />
            <Footer />
        </>
    );
};

export default Home;