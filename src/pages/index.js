/* eslint-disable react/jsx-no-undef */
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundImageWhithButton from "@/components/BackgroundImageWithButton";
import Testimonios from "@/components/Testimonios";


const index = () => {
  const handleButtonClick = () => {
    // Lógica a ejecutar cuando se haga clic en el botón
    console.log("Botón clickeado");
  };
  return (
    <Layout>
      <div className="h-full">
        <BackgroundImageWhithButton
          imageUrl="https://res.cloudinary.com/di1v23yy0/image/upload/v1701711446/sol_bnwuiy.jpg" // Ruta a la imagen en tu carpeta pública
          buttonText="Click Me"
          buttonClickHandler={handleButtonClick}
        />
      </div>

      <div>
        <Hero />
      </div>
      <div className="">
        <Testimonios />
      </div>
    </Layout>
  );
};

export default index;
