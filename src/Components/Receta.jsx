import React, { useEffect, useState } from 'react';
import '../Components/receta.css';

function Receta({ comidaId, onToggleReceta }) {
  const [receta, setReceta] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recetaVisible, setRecetaVisible] = useState(true);
  const [textoTraducido, setTextoTraducido] = useState('');
  const [lineas, setLineas] = useState('');

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${comidaId}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        setReceta(data.meals[0]);
        if (data.meals[0] && lineas.length === 0){
           setLineas(data.meals[0].strInstructions.split('\r\n'));
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReceta();
  }, [comidaId,lineas]);

   useEffect(() => {
    const traducirTexto = async () => {
      try {
        const API_URL='https://translation.googleapis.com/language/translate/v2';
        const API_KEY = 'AIzaSyDunoH9DtvSCcnrV56osGp8mupgxO2pDV0';
        const traduccion = await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify({
            q: lineas,
            source: "auto",
            target: "es",
            format: "text",
            key: API_KEY
          }),
          headers: { "Content-Type": "application/json" }
        });

        const traduccionJSON = await traduccion.json();
      
        setTextoTraducido(traduccionJSON.data.translations[0].translatedText);
      } catch (error) {
        console.error("Error al traducir:", error);
      }
    };
    if (lineas.length>0)
      traducirTexto();
  },[lineas]);



  if (isLoading) {
    return <div>Cargando receta...</div>;
  }

  if (!receta) {
    return <div>No se pudo obtener la receta.</div>;
  }

  const { strMealThumb, strInstructions } = receta;


  const getIngredientes = () => {
    const ingredientes = [];
  
    for (let i = 1; i <= 20; i++) {
      const ingredient = receta[`strIngredient${i}`];
      const measure = receta[`strMeasure${i}`];
  
      if (ingredient && measure) {
        ingredientes.push(
          <li key={`ingrediente${i}`}>{ingredient} ({measure})</li>
        );
      }
    }
  
    return ingredientes;
  };

  const ingredientes = getIngredientes();





  const handleRecetaClick = () => {
    onToggleReceta(comidaId);
    setRecetaVisible(false);
  };

  return (
    <div className={`receta`}
    style={{ display: recetaVisible ? '' : 'none' }}
    onClick={handleRecetaClick}>
  
      <div><h3>PREPARACION:</h3>
      <ul>
        {lineas.map((linea, index) => {
          if (linea.trim()) {
            return <li key={index}>{linea}</li>;
          } else {
            return null;
          }
        })}
      </ul>
      {/* <ul>
      {textoTraducido.map((linea, index) => {
          if (linea.trim()){
            return <li key={index}>{linea}</li>
          }else {
            return null;
          }
        }
          
        )}
      </ul> */}
      </div>
      <div><h3>INGREDIENTES:</h3>
      <ul>{ingredientes}</ul>
      </div>
      
    </div>
  );
}

export default Receta;
