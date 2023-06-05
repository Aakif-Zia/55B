import { useEffect, useState } from "react";
import Carousel1 from "../assets/carousel-1.jpg";
import Carousel2 from "../assets/carousel-2.jpg";
import Carousel3 from "../assets/carousel-3.jpg";

const images = [
  { link: Carousel1, text: "YOUR HOME AWAY FROM HOME" },
  { link: Carousel2, text: "WELL-APPOINTED LUXURY ROOMS" },
  { link: Carousel3, text: "ULTRA MORDERN AMENITIES" },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % images.length;
    const id = setTimeout(() => setCurrent(next), 4000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full h-fit z-0">
        {images.map((img, index) => {
          return (
            <div
              key={index}
              className={
                index == current ? "ease-in duration-700 z-10" : "hidden"
              }
            >
              <img className="object-cover" src={img.link} />
              <div className="absolute inset-0 flex justify-center items-center bg-rose-100 bg-opacity-25">
                <span className="text-xl md:text-2xl xl:text-4xl font-extrabold text-slate-800">
                  {img.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
