import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [showError, setShowError] = useState(false);
  const { setQuery, error } = useContext(DataContext);

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
  };

  return (
    <>
      <div className="Formulario flex flex-col items-center">
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
    </>
  );
};

export default Formulario;