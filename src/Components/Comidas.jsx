import React, { useEffect, useState } from 'react';
import Receta from '../Components/Receta';
import '../Components/comidas.css';

function Comidas({selectedAreaId}) {
  const [comidas, setComidas] = useState([]);
  

  useEffect(() => {
    const fetchComidas = async () => {
      try {
        const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedAreaId}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        setComidas(data.meals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComidas();
  }, [selectedAreaId]);

  const toggleReceta = (comidaId) => {
    setComidas((prevComidas) =>
      prevComidas.map((comida) => {
        if (comida.idMeal === comidaId) {
          return {
            ...comida,
            recetaVisible: !comida.recetaVisible,
          };
        } else {
          return {
            ...comida,
            recetaVisible: false,
          };
        }
    })
    );
  };


  return (
    <div id="comidas">
      {comidas.map((comida) => (
        <div key={comida.idMeal} 
          className="comida" 
          id={comida.idMeal} 
          onClick={() => toggleReceta(comida.idMeal)}>
          <img src={comida.strMealThumb} width={100} height={100} alt={comida.strMeal} />
          <p className='comidaTitulo'>{comida.strMeal}</p>
          {comida.recetaVisible && 
            <Receta comidaId={comida.idMeal} 
            onToggleReceta={toggleReceta} />}
        </div>
      ))}
    </div>
  );
}

export default Comidas;