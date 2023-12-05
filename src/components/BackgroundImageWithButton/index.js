import Image from "next/image";
import Navbar from "@/components/Navbar"

const BackgroundImageWhithButton= ({ imageUrl, buttonText, buttonClickHandler }) => {
  return (
    
    <div className="relative h-screen">
      <div className="">
        <Image
          src={imageUrl}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute  justify-end items-center pb-8">
        <Navbar/>
        {/* Aquí puedes agregar cualquier otro contenido que desees mostrar encima de la imagen */}
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={buttonClickHandler}>
          {buttonText}
        </button> */}
      </div>
    </div>
  );
};


export default BackgroundImageWhithButton