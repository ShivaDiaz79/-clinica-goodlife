import React, { useState } from "react";
import Link from "next/link";
import Flechita from "../Svg/Flechita";
import MenuFlotante from "./MenuFlotante";
import MenuFlotante2 from "./MenuFlotante2";

const Index = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen2(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
  };

  return (
    <nav className="dark:bg-gray-900  bg-transparent hidden md:block w-full mt-4  px-40 ms-60">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-center w-full  ">
        <button
          onClick={toggleDropdown1}
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={isDropdownOpen1 ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between font-medium ${
            isDropdownOpen1 ? "block" : "hidden"
          } md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col px-28 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-10 mr-10 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent "
                aria-current="page"
              >
                Clinica
              </Link>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                onClick={toggleDropdown1}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 mr-10 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent "
              >
                Tratamientos <Flechita />
              </button>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button2"
                onClick={toggleDropdown2}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 mr-10 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent "
              >
                Servicios <Flechita />
              </button>
            </li>
            <li>
              <Link
                href="/trabajos"
                className="block py-2 pl-3 pr-4 mr-10 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent "
              >
                Reservas
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent "
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>                                                                                                                                                                                                                        
      </div>

      <div
        id="mega-menu-full-dropdown"
        className={`mt-1  shadow-sm  dark:bg-gray-800 dark:border-gray-600 ${
          isDropdownOpen1 ? "block" : "hidden"
        }`}
      >
        {isDropdownOpen1 && (
          <div>
            <MenuFlotante />
          </div>
        )}
      </div>

      <div
        id="mega-menu-full-dropdown2"
        className={`mt-1  shadow-sm bg-gray-50 md:bg-white dark:bg-gray-800  ${
          isDropdownOpen2 ? "block" : "hidden"
        }`}
      >
        {isDropdownOpen2 && (
          <div>
            <MenuFlotante2 />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Index;



