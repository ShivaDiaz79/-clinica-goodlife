import React, { useState } from "react";

const Tratamientos = [
  {
    title: "Tratamiento1",
    descriptions: [
      {
        description: "Descripción 1 del Tratamiento 1",
        link: "/Tratamientos/darquitectonico/descripcion1",
      },
      {
        description: "Descripción 2 del Tratamiento 1",
        link: "/Tratamientos/darquitectonico/descripcion2",
      },
      // ... Otras descripciones
    ],
  },
  {
    title: "Tratamiento2",
    descriptions: [
      {
        description: "Descripción 1 del Tratamiento 2",
        link: "/Tratamientos/planificacion/descripcion1",
      },
      {
        description: "Descripción 2 del Tratamiento 2",
        link: "/Tratamientos/planificacion/descripcion2",
      },
      // ... Otras descripciones
    ],
  },
  {
    title: "Tratamiento2",
    descriptions: [
      {
        description: "Descripción 1 del Tratamiento 2",
        link: "/Tratamientos/planificacion/descripcion1",
      },
      {
        description: "Descripción 2 del Tratamiento 2",
        link: "/Tratamientos/planificacion/descripcion2",
      },
      // ... Otras descripciones
    ],
  },
  // ... Otros tratamientos
];

const MenuFlotante = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleClick = (index) => {
    setSelectedTreatment(selectedTreatment === index ? null : index);
  };

  const handleDescriptionClick = (link) => {
    // Aquí puedes añadir la lógica para redirigir a la URL deseada
    window.location.href = link;
  };

  return (
    <div className="max-w-screen-xl mx-auto text-gray-900 dark:text-white md:px-6">
      <div className="flex">
        {Tratamientos.map((treatment, index) => (
          <div key={index} className="mr-4">
            <div
              onClick={() => handleClick(index)}
              className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <div className="font-semibold">{treatment.title}</div>
            </div>
            {selectedTreatment === index && (
              <div className="mt-2">
                {treatment.descriptions.map((desc, descIndex) => (
                  <div
                    key={descIndex}
                    onClick={() => handleDescriptionClick(desc.link)}
                    onMouseEnter={() => setSelectedTreatment(index)}
                    onMouseLeave={() => setSelectedTreatment(null)}
                    className="cursor-pointer text-black hover:underline"
                  >
                    {desc.description}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFlotante;