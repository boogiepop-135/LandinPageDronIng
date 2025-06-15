import React from 'react';
import logo from '/src/img/logo de mapping.png'; // Asegúrate de que la ruta y el nombre del archivo sean correctos

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center fw-bold text-uppercase" href="#inicio">
          <img
            src={logo}
            alt="Logo Droning Mapping"
            width="200"
            height="50"
            className="d-inline-block align-text-top me-2"
            style={{ borderRadius: '2%' }}
          />
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#inicio">
              Inicio
            </a>
            <a className="nav-link" href="#servicios">
              Servicios
            </a>
            <a
              className="nav-link btn btn-success text-white px-3 ms-2"
              href="https://wa.link/hf4gzn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto vía WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
