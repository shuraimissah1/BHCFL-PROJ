"use client";

import { useEffect, useState } from "react";

const CAROUSEL_IMAGES = [
  {
    src: "/images/girl-building-with-lego.jpg",
    alt: "Girl building with LEGO",
  },
  {
    src: "/images/kids-science-lab-activity.jpg",
    alt: "Kids science lab activity",
  },
  {
    src: "/images/homeschool-group-at-fountain.webp",
    alt: "Homeschool group at fountain",
  },
] as const;

export default function SpiralImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
  };

  return (
    <section className="relative hidden w-full overflow-hidden bg-black xl:block">
      <div className="relative h-[86vh] 2xl:h-[90vh]">
        {CAROUSEL_IMAGES.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/70 bg-black/30 text-white transition hover:bg-black/55"
          aria-label="Show previous image"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/70 bg-black/30 text-white transition hover:bg-black/55"
          aria-label="Show next image"
        >
          ›
        </button>
      </div>
    </section>
  );
}
