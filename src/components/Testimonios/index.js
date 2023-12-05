import React from 'react'
import Fonts from "@/components/Fonts";

const testimonialTexts = [
  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
];

const testimonialImages = [
  "https://dummyimage.com/302x302",
  "https://dummyimage.com/300x300",
  "https://dummyimage.com/305x305",
  "https://dummyimage.com/302x302",
  "https://dummyimage.com/300x300",
  "https://dummyimage.com/305x305"
];

const testimonialNames = ["HOLDEN CAULFIELD", "ALPER KAMU", "HENRY LETHAM"];

const testimonialRoles = [
  "Senior Product Designer",
  "UI Developer",
  "CTO",
  "Senior Product Designer",
  "UI Developer",
  "CTO"
];

const TestimonialCard = ({ imgSrc, text, name, role }) => (
  <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 border-2 border-black m-3">
    <div className="h-full text-center flex flex-col justify-center items-center">
      <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={imgSrc} />
      <p className="leading-relaxed">{text}</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  </div>
);

const Index = () => (
  <div className=" px-5 py-24 mx-auto">
    <h1 className='text-center sm:text-7xl text-4xl mb-5'>Clientes Satisfechos</h1>
    <div className="flex flex-wrap justify-center -m-4">
      {testimonialTexts.map((text, index) => (
        <TestimonialCard
          key={index}
          imgSrc={testimonialImages[index]}
          text={text}
          name={testimonialNames[index]}
          role={testimonialRoles[index]}
        />
      ))}
    </div>
  </div>
);

export default Index;

