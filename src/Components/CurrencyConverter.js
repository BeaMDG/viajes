import React, { useState } from 'react';
import CurrencySelector from '../Components/CurrencySelector';
import '../Components/styles.css'; 

function CurrencyConverter({ currencies }) {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleConvert = () => {
    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      .then(response => response.json())
      .then(data => {
        setConvertedAmount(data.rates[toCurrency]);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  return (
    <div className='moneda'>
      <CurrencySelector
        label="de: "
        currencies={currencies}
        selectedCurrency={fromCurrency}
        onChange={e => setFromCurrency(e.target.value)}
      />
      <CurrencySelector
        label="a: "
        currencies={currencies}
        selectedCurrency={toCurrency}
        onChange={e => setToCurrency(e.target.value)}
      />
      <div className='cantidad'>
        <label>Cantidad: </label>
        <input type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
      </div>
      <button onClick={handleConvert}>Convertir</button>
      <div className='resultado'>
        <h2>Resultado:</h2>
        <p>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
      </div>
    </div>
  );
}

export default CurrencyConverter;


