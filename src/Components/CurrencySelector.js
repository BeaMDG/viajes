import React from 'react';
import '../Components/styles.css';

function CurrencySelector({ label, currencies, selectedCurrency, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <select value={selectedCurrency} onChange={onChange}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelector;
