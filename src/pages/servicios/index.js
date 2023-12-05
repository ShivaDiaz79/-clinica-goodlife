import React, { useState } from 'react';
import Service1 from '../components/Services/Service1';
import Service2 from '../components/Services/Service2';
import Service3 from '../components/Services/Service3';

const Servicio = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div>
      <h1>Servicios</h1>
      <ul>
        <li onClick={() => handleServiceClick('Service1')}>Servicio 1</li>
        <li onClick={() => handleServiceClick('Service2')}>Servicio 2</li>
        <li onClick={() => handleServiceClick('Service3')}>Servicio 3</li>
      </ul>
      <div>
        {selectedService === 'Service1' && <Service1 />}
        {selectedService === 'Service2' && <Service2 />}
        {selectedService === 'Service3' && <Service3 />}
      </div>
    </div>
  );
};

export default Servicio;