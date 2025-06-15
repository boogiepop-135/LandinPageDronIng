import React, { useState } from 'react';

const WorkCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ejemplo de datos para las tarjetas (solo imágenes)
  const works = [
    {
      image: '/img/trabajo.jpg',
    },
    {
      image: '/img/trabajo1.jpg',
    },
    {
      image: '/img/trabajo2.jpg',
    },
    {
      image: '/img/trabajo3.jpg',
    },
    {
      image: '/img/trabajo4.jpg',
    },
    {
      image: '/img/trabajo5.jpg',
    },
    {
      image: '/img/trabajo6.jpg',
    },
    {
      image: '/img/trabajo7.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= works.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? works.length - 4 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="section-title">Conocenos</h2>
      
      <div className="carousel-container">
        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
          ❮
        </button>
        
        <div className="carousel-track">
          <div 
            className="carousel-slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {works.map((work, index) => (
              <div key={index} className="carousel-slide">
                <img src={work.image} alt={`Trabajo ${index + 1}`} className="slide-image" />
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Indicadores de puntos */}
      <div className="carousel-dots">
        {works.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Estilos */}
      <style>{`
        .carousel-wrapper {
          padding: 3rem 1.5rem;
          background: #1a2a34;
          text-align: center;
        }

        .section-title {
          color: white;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .carousel-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .carousel-slides {
          display: flex;
          height: 100%;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-slide {
          flex: 0 0 25%;
          height: 100%;
          padding: 0 5px;
          box-sizing: border-box;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 8px;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-btn:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-btn-prev {
          left: 15px;
        }

        .carousel-btn-next {
          right: 15px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          background: #00bcd4;
          transform: scale(1.2);
        }

        .carousel-dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .carousel-container {
            max-width: 90%;
          }

          .carousel-track {
            height: 250px;
          }

          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .carousel-btn-prev {
            left: 10px;
          }

          .carousel-btn-next {
            right: 10px;
          }

          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkCards;