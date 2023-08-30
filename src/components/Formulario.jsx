import React, { useContext, useState, useEffect, useRef } from 'react';
import { DataContext } from '../context/DataContext';
import Fondo from "../../public/1.jpg"

const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [showError, setShowError] = useState(false);
  const { setQuery, error } = useContext(DataContext);
  const resultsRef = useRef(null);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(titulo);
    scrollResultsIntoView();
  };

  const scrollResultsIntoView = () => {
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="Formulario bg-cover min-h-screen flex flex-col justify-center items-center transition"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(28, 28, 28, 0.5), #1f2937), url(${Fondo})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <h2 className="text-2xl text-amber-400 font-bold mb-4">Encuentra una película</h2>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type='text'
            placeholder='Título de la película'
            className="border border-gray-300 p-2 mr-2 rounded-lg"
            onChange={e => setTitulo(e.target.value)}
          />
          <input
            type="submit"
            value="Buscar"
            className="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500"
          />
        </form>
        {showError && (
          <p className="text-red-500 bg-yellow-200 p-2 rounded-md mt-4">
            Esta película no existe
          </p>
        )}
      </div>

      <div ref={resultsRef}>
        {/* Aquí van los resultados de la búsqueda */}
      </div>
    </>
  );
};

export default Formulario;