import React from 'react';
import { FaMapMarkedAlt, FaCubes, FaDraftingCompass, FaRulerCombined, FaHardHat, FaBuilding, FaLayerGroup, FaPlane } from 'react-icons/fa';
import { MdOutlineWater, MdPrecisionManufacturing } from 'react-icons/md';

const servicios = [
  { nombre: 'Levantamientos Topográficos', icono: <FaMapMarkedAlt /> },
  { nombre: 'Rectificación de Medidas y Superficies', icono: <FaRulerCombined /> },
  { nombre: 'Planos para Subdivisiones y Fusiones', icono: <FaDraftingCompass /> },
  { nombre: 'Lotificación de Predios', icono: <FaLayerGroup /> },
  { nombre: 'Colocación de Puntos de Control GNSS', icono: <FaMapMarkedAlt /> },
  { nombre: 'Replanteo de Predios Urbanos, Rurales y Ejidales', icono: <FaMapMarkedAlt /> },
  { nombre: 'Control de Obra Mecánica, Civil y Terracería', icono: <FaHardHat /> },
  { nombre: 'Levantamientos Arquitectónicos', icono: <FaBuilding /> },
  { nombre: 'Batimetrías', icono: <MdOutlineWater /> },
  { nombre: 'Modelado 3D', icono: <FaCubes /> },
  { nombre: 'Modelado BIM (Building Information Modeling)', icono: <MdPrecisionManufacturing /> },
  { nombre: 'Elaboración de Proyectos Geométricos', icono: <FaDraftingCompass /> },
  { nombre: 'Cálculo de Volumetrías y Avances de Obra', icono: <FaRulerCombined /> },
  { nombre: 'Fotogrametría y Restitución', icono: <FaPlane /> },
  { nombre: 'Toma de Imágenes Mediante Drone para Avances de Obra', icono: <FaPlane /> },
  { nombre: 'Inspección Visual de Estructuras Mediante Equipo Multirrotor', icono: <FaPlane /> }
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-5 text-primary fw-bold">Nuestros Servicios</h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {servicios.map((servicio, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="fs-1 text-info mb-3">{servicio.icono}</div>
                  <p className="card-text fw-semibold text-dark">{servicio.nombre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;