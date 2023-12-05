import Image from 'next/image';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <div className="relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">informacion general a destacar</h2>
              <p className="leading-relaxed">Principal in</p>
              <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="w-full  absolute top-0 left-0">
              <Image
                alt="gallery"
                className="object-cover object-center opacity-25"
                src="https://res.cloudinary.com/di1v23yy0/image/upload/v1701637406/11_ceaodq.jpg"
              
                width={220}
                height={120}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="relative w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 mb-4">
                <div className="relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">informacion general a destacar</h2>
                  <p className="leading-relaxed">Principal in</p>
                  <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="w-full  absolute top-0 left-0">
                  <Image
                    alt="gallery"
                    className="object-cover object-center  opacity-25"
                    src="https://res.cloudinary.com/di1v23yy0/image/upload/v1701637406/11_ceaodq.jpg"
                    width={142}
                    height={160}
                  />
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="relative w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 mb-4">
                <div className="relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">informacion general a destacar</h2>
                  <p className="leading-relaxed">Principal in</p>
                  <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="absolute top-0 left-0">
                  <Image
                    alt="gallery"
                    className="object-cover object-center  opacity-25"
                    src="https://res.cloudinary.com/di1v23yy0/image/upload/v1701637406/11_ceaodq.jpg"
                    
                    width={142}
                    height={220}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



// import React from 'react';
// import Image from 'next/image';

// const imageData = [
//   {
//     src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1701637406/11_ceaodq.jpg",
//     width: 320,
//     height: 50
//   },
//   {
//     src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1701637406/11_ceaodq.jpg",
//     width: 242,
//     height: 160
//   },
//   {
//     src: "https://res.cloudinary.com/di1v23yy0/image/upload/v1701637406/11_ceaodq.jpg",
//     width: 242,
//     height: 220
//   }
// ];

// const descriptions = [
//   "Principal descripcion de los servicios 1",
//   "Principal descripcion de los servicios 2",
//   "Principal descripcion de los servicios 3"
// ];

// const titles = [
//   "Título 1",
//   "Título 2",
//   "Título 3"
// ];

// const urls = [
//   "#url1",
//   "#url2",
//   "#url3"
// ];

// const Hero = () => {
//   const renderBlocks = () => {
//     return imageData.map((data, index) => (
      
//       <div
//         key={index}
//         className={` ${index === 0 ? 'lg:w-2/3' : 'sm:w-1/2'} p-4`}
//       >
        
//         <div className="relative z-10 w-full bg-green-300 py-16 px-6 mb-4">
         
//             <h2 className="text-xl text-gray-900  text-center font-medium title-font mb-2">{titles[index]}</h2>
//             <p className="leading-relaxed">{descriptions[index]}</p>
//             <a href={urls[index]} className="mt-3 text-indigo-500 inline-flex items-center">Leer Mas
//               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
//                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//               </svg>
//             </a>
         
//           <div className="bg-pink-400">
//             <Image
//               alt="gallery"
//               className="opacity-25"
//               src={data.src}
//               width={data.width}
//               height={data.height}
//             />
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <section className="text-gray-600 body-font">
//       <h1 className='text-center pt-16 text-3xl sm:text-6xl '>Promos del Mes</h1>
//       <div className="px-5 bg-blue-500 py-16  mx-aut  sm:flex sm:flex-wrap justify-center -m-4">
//         {renderBlocks()}
//       </div>
//     </section>
//   );
// };

// export default Hero;
