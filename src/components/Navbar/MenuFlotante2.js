import React from "react";
import Link from "next/link";

const Tratamientos = [
  {
    title: "Servicios1",
    description: "Description del servicio de esteticos",
    link: "/servicios/darquitectonico",
  },
  {
    title: "Servicios2",
    description: "Description del servicio de esteticos",
    link: "/servicios/planificacion",
  },
  {
    title: "Servicios3",
    description: "Description del servicio de esteticos",
    link: "/servicios/remodelaciones",
  },
  {
    title: "Servicios4",
    description: "Description del servicio de esteticos",
    link: "/servicios/construciones",
  },
  {
    title: "Servicios5",
    description: "Description del servicio de esteticos",
    link: "/servicios/supervision",
  },
  {
    title: "Servicios6",
    description: "Description del servicio de esteticos",
    link: "/servicios/interiores",
  },
];

const MenuFlotante2 = () => {
  return (
    <section className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
      {Tratamientos.map((tratamientos, index) => (
        <ul key={index}>
          <li>
            <Link
              href={tratamientos.link}
              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">{tratamientos.title}</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {tratamientos.description}
              </span>
            </Link>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default MenuFlotante2;
