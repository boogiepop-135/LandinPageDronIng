import React from 'react';
import logo from '/src/img/logo para navbar.png';

const Jumbotron = () => {
  return (
    <div className="hero-wrapper">
      {/* Fondo con imagen de portada */}
      <div className="background-image" />

      {/* Fondo decorativo con partículas suaves */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Iconos de redes sociales */}
      <div className="social-icons">
        <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>

      {/* Contenido principal */}
      <div className="hero-content">
        <div className="glass-card text-center">
          <img
            src={logo}
            alt="Logo Droning Mapping"
            width="200"
            style={{ marginBottom: '1rem' }}
          />
          <p className="description">
            "Somos una empresa Queretana con amplia experiencia y profesionalismo, especializada en levantamientos topográficos con drones, GNSS y fotogrametría. Utilizamos tecnología de vanguardia para entregar datos precisos, planos detallados
             y soluciones geoespaciales confiables que optimizan tus proyectos de construcción, infraestructura y medio ambiente.
          </p>
          <a href="https://wa.link/hf4gzn" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">Contáctanos</button>
          </a>
        </div>
      </div>

      {/* Estilos */}
      <style>{`
        .hero-wrapper {
          position: relative;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/src/img/foto de portada.jpg') no-repeat center center;
          background-size: cover;
          opacity: 0.25;
          z-index: 0;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          animation: float 10s infinite ease-in-out;
        }

        ${[...Array(6)].map((_, i) => `
          .particle-${i + 1} {
            width: ${10 + Math.random() * 20}px;
            height: ${10 + Math.random() * 20}px;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
          }
        `).join('')}

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }

        .social-icons {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 3;
          display: flex;
          gap: 15px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .social-link:nth-child(1):hover {
          background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
          color: white;
        }

        .social-link:nth-child(2):hover {
          background: #1877f2;
          color: white;
        }

        .social-icon {
          width: 22px;
          height: 22px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 1.5rem;
          width: 100%;
          max-width: 700px;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: white;
        }

        .description {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-weight: 400;
          text-align: justify;
        }

        .cta-button {
          background: #00bcd4;
          color: white;
          padding: 0.5rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .cta-button:hover {
          background: #0097a7;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .social-icons {
            top: 15px;
            right: 15px;
            gap: 10px;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .social-icon {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default Jumbotron;