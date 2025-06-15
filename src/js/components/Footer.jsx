import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=61554254472595" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/droningmapping" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com/tu-canal" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
      <p className="footer-text">© 2025 Droning Mapping. Todos los derechos reservados.</p>

      <style>{`
        .footer {
          background-color: #111;
          color: #fff;
          padding: 2rem 1rem;
          text-align: center;
        }

        .social-links {
          margin-bottom: 1rem;
        }

        .social-links a {
          color: #fff;
          font-size: 1.8rem;
          margin: 0 0.75rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-links a:hover {
          color: #00bcd4;
          transform: scale(1.2);
        }

        .footer-text {
          font-size: 0.9rem;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
