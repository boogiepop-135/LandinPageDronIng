import React, { useState } from 'react';

const ContactPage = () => {
  const [copiedText, setCopiedText] = useState('');

  // Números de WhatsApp (reemplaza con tus números reales)
  const whatsappNumbers = [
    {
      name: "Ventas y Cotizaciones",
      number: "+52 312 301 1429",
      cleanNumber: "5213123011429", // Número limpio para el enlace
      message: "Hola, me interesa obtener información sobre sus servicios de levantamientos topográficos con drones."
    },
    {
      name: "Soporte Técnico",
      number: "+52 442 204 4888",
      cleanNumber: "5214422044888", // Número limpio para el enlace
      message: "Hola, necesito soporte técnico sobre un proyecto de topografía."
    }
  ];

  // Email de contacto
  const contactEmail = "ingenieria@droningmapping.com";

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(type);
      setTimeout(() => setCopiedText(''), 2000);
    });
  };

  const openWhatsApp = (number, message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const openEmail = () => {
    const subject = encodeURIComponent("Consulta sobre servicios de Droning Mapping");
    const body = encodeURIComponent("Hola,\n\nMe interesa obtener información sobre sus servicios de levantamientos topográficos con drones.\n\nSaludos");
    const mailtoUrl = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div id="contacto" className="contact-wrapper">
      {/* Header de la página */}
      <div className="contact-header">
        <div className="header-content">
          <h1 className="page-title">Contáctanos</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte con tus proyectos de levantamientos topográficos
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="contact-content">
        <div className="contact-container">
          
          {/* Sección WhatsApp */}
          <div className="contact-section">
            <div className="section-header">
              <div className="icon-wrapper whatsapp-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </div>
              <h2 className="section-title">WhatsApp</h2>
            </div>
            <p className="section-description">
              Contacta directamente por WhatsApp para respuesta inmediata
            </p>
            
            <div className="whatsapp-cards">
              {whatsappNumbers.map((contact, index) => (
                <div key={index} className="contact-card whatsapp-card">
                  <div className="card-header">
                    <h3 className="card-title">{contact.name}</h3>
                    <span className="phone-number">{contact.number}</span>
                  </div>
                  <div className="card-actions">
                    <button 
                      className="action-button primary"
                      onClick={() => openWhatsApp(contact.cleanNumber, contact.message)}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="button-icon">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                      </svg>
                      Enviar mensaje
                    </button>
                    <button 
                      className="action-button secondary"
                      onClick={() => copyToClipboard(contact.number, `whatsapp-${index}`)}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="button-icon">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                      </svg>
                      {copiedText === `whatsapp-${index}` ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección Email */}
          <div className="contact-section">
            <div className="section-header">
              <div className="icon-wrapper email-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h2 className="section-title">Email</h2>
            </div>
            <p className="section-description">
              Envíanos un correo electrónico con los detalles de tu proyecto
            </p>
            
            <div className="contact-card email-card">
              <div className="card-header">
                <h3 className="card-title">Contacto General</h3>
                <span className="email-address">{contactEmail}</span>
              </div>
              <div className="card-actions">
                <button 
                  className="action-button primary"
                  onClick={openEmail}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="button-icon">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Enviar email
                </button>
                <button 
                  className="action-button secondary"
                  onClick={() => copyToClipboard(contactEmail, 'email')}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="button-icon">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                  {copiedText === 'email' ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="contact-section">
            <div className="info-card">
              <h3 className="info-title">¿Necesitas ayuda?</h3>
              <p className="info-text">
                Nuestro equipo está disponible de lunes a viernes de 8:00 AM a 6:00 PM (horario del centro de México). 
                Para emergencias o proyectos urgentes, contáctanos por WhatsApp y te responderemos lo antes posible.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Estilos */}
      <style>{`
        .contact-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
          position: relative;
          overflow: hidden;
        }

        .contact-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/img/foto-portada.jpg') no-repeat center center;
          background-size: cover;
          opacity: 0.05;
          z-index: 0;
        }

        .contact-header {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          padding: 4rem 1rem 2rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          position: relative;
          z-index: 1;
          padding: 2rem 1rem 4rem;
        }

        .contact-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-section {
          margin-bottom: 3rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .whatsapp-icon {
          background: linear-gradient(135deg, #25d366, #1ebe57);
        }

        .email-icon {
          background: linear-gradient(135deg, #ea4335, #d33b2c);
        }

        .contact-icon {
          width: 24px;
          height: 24px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .section-description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          font-size: 1.1rem;
          margin-left: 66px;
        }

        .whatsapp-cards {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .card-header {
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: white;
          margin: 0 0 0.5rem 0;
        }

        .phone-number, .email-address {
          font-size: 1.1rem;
          color: #00bcd4;
          font-weight: 500;
          font-family: 'Courier New', monospace;
        }

        .card-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .action-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          flex: 1;
          min-width: 140px;
          justify-content: center;
        }

        .action-button.primary {
          background: #00bcd4;
          color: white;
        }

        .action-button.primary:hover {
          background: #0097a7;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 188, 212, 0.4);
        }

        .action-button.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .action-button.secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .button-icon {
          width: 18px;
          height: 18px;
        }

        .email-card {
          max-width: 500px;
          margin: 0 auto;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(12px);
        }

        .info-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin: 0 0 1rem 0;
        }

        .info-text {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.2rem;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .section-description {
            margin-left: 0;
          }

          .whatsapp-cards {
            grid-template-columns: 1fr;
          }

          .card-actions {
            flex-direction: column;
          }

          .action-button {
            flex: none;
            min-width: auto;
          }

          .contact-header {
            padding: 2rem 1rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact-card {
            padding: 1.5rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;