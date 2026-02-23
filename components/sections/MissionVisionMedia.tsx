"use client";

import { useEffect, useMemo, useState } from "react";
import type { TransitionEvent } from "react";

const MISSION_CAROUSEL_IMAGES = [
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/75f0b66a-af37-4e31-9419-22d7ffb3dd06/458634814_10162001385596913_5768901712520713904_n.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/fe5e58ac-9cbb-4970-8d5b-8763974c88ff/458947329_10162001387226913_8071350165964600814_n.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/11b6a408-5e76-4f9e-94df-4954118ea6a5/459306066_10162011117801913_3995805539939890239_n.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/1f9072d7-4da8-4e77-89c7-e81effa485cc/459321789_10162013744936913_2468595181297671336_n.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/94440893-ae45-4327-add3-32636e8d2638/459532536_10162013685931913_8138039486444604276_n.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/66b5e673-3629-4f60-9c9d-a3cc4bac0e72/459639320_10162011116781913_6581189145246367960_n.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/5e6d3c86-1cca-4b87-9f13-3ccf9446562c/BHCFL-All%2Bphotos-61872262909.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/00dfb3a9-5583-4952-98dc-0760f39086b6/BHCFL-All%2Bphotos-61872262916.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/9242c52c-470d-43f7-9180-e980a5b35b02/BHCFL-All%2Bphotos-62002370684.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c9d8a226-f17f-4c96-b340-07f02d612e53/BHCFL-All%2Bphotos-62439501831.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/40a3707c-f72c-4720-9e68-317acc52cfdf/BHCFL-All%2Bphotos-62439821852.jpg",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/f0e0ba02-bf93-40e6-bd23-6e155d117be0/BHCFL-Annual%2BMeet%2Band%2BGreet%2B2024-25-62331171686.jpg",
] as const;

const VISION_TOP_ROW = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/8c563e95-4e49-4108-b4af-d1da0adf32c8/458551312_10161988707816913_4869514569845105155_n.jpg",
    span: "md:col-span-5",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/82aed7bf-3ab9-4e72-a9de-acbe56f7393f/458670496_10161988713611913_6204726030474469132_n.jpg",
    span: "md:col-span-3",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/5bce7e85-d062-42b9-8e26-12fb0c422d74/458918037_10161988707606913_3769322724855763004_n.jpg",
    span: "md:col-span-3",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/5a100781-41ce-44eb-91c0-30becdfa775b/459139611_10162001369251913_1330208576647448226_n.jpg",
    span: "md:col-span-3",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/37da0cd9-fb08-4f6f-910a-b70b63bc8f53/459783360_10162019336806913_8641514128170603799_n.jpg",
    span: "md:col-span-3",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/91760899-7f57-4287-94f7-c8f0f309c645/BHCFL-Annual%2BMeet%2Band%2BGreet%2B2024-25-62334489182.jpg",
    span: "md:col-span-7",
  },
] as const;

const VISION_BOTTOM_ROW = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/80bd3656-d544-46c3-a46a-2a725459204f/BHCFL-Annual%2BMeet%2Band%2BGreet%2B2024-25-62334636429.jpg",
    span: "md:col-span-3",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c2782729-6651-4e9f-876d-666bd6178523/BHCFL-Annual%2BMeet%2Band%2BGreet%2B2024-25-62336364485.jpg",
    span: "md:col-span-6",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/ead9e440-326c-4c3f-9ea1-bc47c81c3fa6/BHCFL-Annual%2BMeet%2Band%2BGreet%2B2024-25-62341121112.jpg",
    span: "md:col-span-4",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/ee321bca-2be0-43f1-aa9d-716ce0721d97/BHCFL-Annual%2BMeet%2Band%2BGreet%2B2024-25-62341121114.jpg",
    span: "md:col-span-5",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/e3c378df-02d8-4b73-a74f-2d6a91255243/BHCFL-BHCFL%2BMondays%2B2024-25-62735874478.jpg",
    span: "md:col-span-3",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/d4a2532f-a2b3-4a05-a902-9b85511e0e5b/BHCFL-BHCFL%2BMondays%2B2024-25-62735874482.jpg",
    span: "md:col-span-3",
  },
] as const;

export function MissionPhotoCarousel() {
  const totalSlides = MISSION_CAROUSEL_IMAGES.length;
  const loopStartIndex = totalSlides;
  const [activeIndex, setActiveIndex] = useState(loopStartIndex);
  const [isAnimating, setIsAnimating] = useState(true);

  const loopedSlides = useMemo(
    () => [...MISSION_CAROUSEL_IMAGES, ...MISSION_CAROUSEL_IMAGES, ...MISSION_CAROUSEL_IMAGES],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setActiveIndex((current) => current + 1);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      const frameId = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(frameId);
    }

    return undefined;
  }, [isAnimating]);

  const goToPrevious = () => {
    setIsAnimating(true);
    setActiveIndex((current) => current - 1);
  };

  const goToNext = () => {
    setIsAnimating(true);
    setActiveIndex((current) => current + 1);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (activeIndex >= totalSlides * 2) {
      setIsAnimating(false);
      setActiveIndex((current) => current - totalSlides);
      return;
    }

    if (activeIndex < totalSlides) {
      setIsAnimating(false);
      setActiveIndex((current) => current + totalSlides);
    }
  };

  return (
    <section className="border-y-[4px] border-[#b12a0e] bg-[#d9d9d9] py-2 sm:py-3">
      <div className="mx-auto w-full max-w-[1800px] px-1 sm:px-2">
        <div className="relative mx-auto h-[55vw] min-h-[280px] max-h-[720px] overflow-hidden [--slide-width:clamp(260px,88vw,980px)] md:[--slide-width:clamp(420px,54vw,980px)]">
          <div
            className={`flex h-full ${
              isAnimating ? "transition-transform duration-500 ease-out" : ""
            }`}
            style={{
              transform: `translateX(calc(50% - (var(--slide-width) / 2) - ${activeIndex} * var(--slide-width)))`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedSlides.map((imageSrc, index) => (
              <div key={`${imageSrc}-${index}`} className="h-full w-[var(--slide-width)] shrink-0">
                <img
                  src={imageSrc}
                  alt={`Mission gallery slide ${index + 1}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 z-20 flex h-[62px] w-[46px] -translate-y-1/2 items-center justify-center bg-white/80 text-[34px] leading-none text-black transition hover:bg-white"
            aria-label="Show previous mission photo"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 top-1/2 z-20 flex h-[62px] w-[46px] -translate-y-1/2 items-center justify-center bg-white/80 text-[34px] leading-none text-black transition hover:bg-white"
            aria-label="Show next mission photo"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export function VisionPhotoGrid() {
  return (
    <section className="relative overflow-hidden border-t-[4px] border-[#b12a0e] bg-[#d9d9d9] pb-20 pt-5 sm:pb-28">
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4">
        <div className="space-y-3 md:space-y-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-[repeat(24,minmax(0,1fr))] md:gap-4">
            {VISION_TOP_ROW.map((image, index) => (
              <div key={image.src} className={`${image.span}`}>
                <img
                  src={image.src}
                  alt={`Vision community photo ${index + 1}`}
                  loading="lazy"
                  className="h-[180px] w-full object-cover object-center sm:h-[220px] md:h-[300px]"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-[repeat(24,minmax(0,1fr))] md:gap-4">
            {VISION_BOTTOM_ROW.map((image, index) => (
              <div key={image.src} className={`${image.span}`}>
                <img
                  src={image.src}
                  alt={`Vision learning photo ${index + 1}`}
                  loading="lazy"
                  className="h-[180px] w-full object-cover object-center sm:h-[220px] md:h-[265px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-0 h-[140px] w-full sm:h-[180px]"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path d="M0,105 C350,10 720,215 1080,145 C1230,116 1330,75 1440,105" fill="none" stroke="#b12a0e" strokeWidth="10" />
      </svg>
    </section>
  );
}
