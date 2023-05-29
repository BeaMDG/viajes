import React from 'react'
import {Routes, Route} from 'react-router-dom'


import Home from '../src/Routes/Home';
import Weather from '../src/Routes/Weather';

import Museos from '../src/Routes/Museos';
import Gastro from '../src/Routes/Gastro';
import Appibea from '../src/Routes/Appibea';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Weather' element={<Weather />} />
        
        <Route path='/Museos' element={<Museos />} />
        <Route path='/Gastro' element={<Gastro />} />
        <Route path='/Appibea' element={<Appibea />} />
      </Routes>
    </>
  );
}

export default App;