"use client"
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/all';
import Testimonios from '@/components/Testimonios';

export default function Fonts() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "top ",
        end: "bottom top",
        onUpdate: (e) => {
          console.log("Direction:", e.direction);
          direction = e.direction * -1;
        },
      },
      x: '-200px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className="">
      <div className="absolute top-[calc(100vh-350px)] pt-10 sm:pt-16 sm:pb-40">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative  text-14xl font-semibold pr-16 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  "
          >
  Clientes Agradecidos
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 text-14xl font-semibold pr-16 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
          >
         
          </p>
        </div>
      </div>
    </main>
  );
}
