import React, { useEffect, useState } from 'react';
import Comidas from './Comidas';
import '../Components/areas.css';

function Areas() {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await response.json();
        setAreas(data.meals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAreas();
  }, []);

  const handleAreaChange = (event) => {
    const selectedAreaId = event.target.value;
    setSelectedArea(selectedAreaId);
  };

  return (
    <div id="areas">
      <select name="area" id="area" required value={selectedArea} onChange={handleAreaChange}>
        <option value="">Seleccione un área</option>
        {areas.map((area) => (
          <option key={area.strArea} value={area.strArea}>
            {area.strArea}
          </option>
        ))}
      </select>
      {selectedArea && <Comidas selectedAreaId={selectedArea} />}
    </div>
  );
}

export default Areas;
