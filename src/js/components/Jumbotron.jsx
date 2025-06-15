import React from 'react';

const Jumbotron = () => {
  return (
    <div className="hero-wrapper">
      {/* Fondo con imagen de portada */}
      <div className="background-image" />

      {/* Fondo decorativo con partículas suaves */}
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="hero-content">
        <div className="glass-card">
          <h1 className="title">Droning Mapping</h1>
          <p className="description">
            Combinamos experiencia topográfica con drones, GNSS y sistemas geoespaciales para ofrecer datos confiables,
            planos detallados y soluciones geotécnicas precisas para tus proyectos.
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
          min-height: 65vh;
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

        ${[...Array(12)].map((_, i) => `
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

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 2rem;
          width: 100%;
          max-width: 900px;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: white;
        }

        .title {
          font-size: 2.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .description {
          font-size: 1.15rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .cta-button {
          background: #00bcd4;
          color: white;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .cta-button:hover {
          background: #0097a7;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Jumbotron;
