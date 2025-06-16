import React from 'react';
import logo from '/public/img/logo para navbar blanco.png';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center fw-bold text-uppercase text-white" href="#inicio">
          <img
            src={logo}
            alt="Logo Droning Mapping"
            width="120"
            height="80"
            className="d-inline-block align-text-top me-2"
            style={{ borderRadius: '4px' }}
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
            <a className="nav-link text-white" href="#inicio">
              Inicio
            </a>
            <a className="nav-link text-white" href="#servicios">
              Servicios
            </a>
            {/* Cambiado href para que vaya a la sección de contacto */}
            <a
              className="nav-link btn btn-success text-white px-3 ms-3 shadow-sm d-flex align-items-center gap-2 whatsapp-button"
              href="#contacto"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Estilo personalizado para el navbar */}
      <style>{`
        .navbar-custom {
          background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
          height: 70px;
          min-height: 70px;
        }

        .nav-link {
          font-weight: 500;
          transition: color 0.3s;
          padding: 0.25rem 1rem !important;
        }

        .nav-link:hover {
          color: #00bcd4 !important;
        }

        .btn-success {
          background-color: #25D366;
          border: none;
          padding: 0.375rem 1rem !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-success:hover {
          background-color: #1ebe5d;
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-button svg {
          transition: transform 0.3s ease;
        }

        .whatsapp-button:hover svg {
          transform: rotate(10deg) scale(1.1);
        }

        .navbar-brand {
          padding: 0 !important;
          height: 100%;
          display: flex !important;
          align-items: center !important;
        }

        .container-fluid {
          height: 100%;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;