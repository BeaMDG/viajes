import React, { useState, useEffect } from 'react';
import CurrencyConverter from '../Components/CurrencyConverter';
import '../Components/styles.css';




function Appibea() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Obtener las monedas disponibles al cargar el componente
    fetch('https://api.frankfurter.app/currencies')
      .then(response => response.json())
      .then(data => {
        const currencyList = Object.keys(data);
        setCurrencies(currencyList);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div>
            <div className='texto'>
        <p>El conversor de divisas le permite comprobar los últimos tipos de cambio medios de compra y venta y convertir las principales divisas del mundo.<br />¿Cómo utilizar el conversor de divisas?<br />Para utilizar el conversor de divisas, seleccione en el menu desplegable los nombres de las divisas, se encuentran en formato ISO de 3 letras.</p>
</div>
      <div className='contenedor'>
      <h1>Conversor de Divisas</h1>
      {currencies.length > 0 ? (
        <CurrencyConverter currencies={currencies} />
      ) : (
        <p>Cargando monedas...</p>
      )}
      </div>
    </div>
  );
}

export default Appibea;

