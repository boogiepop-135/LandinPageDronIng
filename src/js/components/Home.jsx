import React from "react";
import Navbar from "./Navbar";      
import Jumbotron from "./Jumbotron";
import Servicios from "./Servicios";          
import Footer from "./Footer";
import Hero from "./Hero";
import { FaBeer } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Servicios />
            <Footer />
            <div>
                <h3> Cheers! <FaBeer /> </h3>
            </div>
        </>
    );
};

export default Home;