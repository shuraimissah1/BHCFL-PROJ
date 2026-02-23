"use client";

import { useEffect, useMemo, useState } from "react";

const GALLERY_REEL_IMAGES = [
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/48cb196e-09e2-4bc5-943f-1319432e4981/_d_38daae_8_i7eUd018svcle4nb9i36f5t_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/30c3e95a-0196-48fb-a396-cdd34feac658/_d_38fjc9_1_fb4Ud018svc13gw3ijm1zk6d_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/80c0a929-45e8-4980-b80a-db689884f551/_d_38dadb_f_a7dUd018svc1lkxn9m738sxi_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/8907226e-6911-4c2b-aabe-a16bbabcd087/_d_38fj43_4_0bgUd018svc1unlw1b09o1wf_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/2214769c-343c-4fe2-a5fc-936dc489e9c0/_d_38da4a_c_f7eUd018svcvoocy18l2jr0_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/66eb62ef-b891-4258-b6fa-f3712b3e134f/BHCFL+Admin-Yearbook-72025540505.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c51508b0-1ace-447b-9ff0-d3e334362a26/_d_38fj75_1_g9jUd018svc1k58o5rvw84rd_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c417ae37-273f-49c8-89c3-5336d090bd7d/BHCFL+Admin-Yearbook-72025599130.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/e743cfa9-39b0-4086-81cb-9922142b4e08/_d_38da9c_0_j7eUd018svc1ejon1g4vk8sl_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/8d4aa0b2-61c8-407d-b638-efb8e46e44ea/_d_38dac7_9_i7hUd018svc1xhnzg7t3u0fc_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/3201cc1c-9bae-4b35-91f0-e73e0826c117/_d_38fj5f_6_ba4Ud018svc17792a3v14xoe_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/21531a5c-e2b3-4b66-a97c-366684b700ca/_d_38fj9j_b_19jUd018svc104d6rxjn1rvd_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/0ba7be83-6a11-467d-be91-475ecc7ef01b/_d_38fj90_0_ia8Ud018svc1sjxf3r96qhi_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c9629afe-ac0a-4219-b573-dfdff60cfda2/_d_38fjjf_6_b9jUd018svcpkv34b52yigy_thucbt.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/a21fb298-0f63-4786-9158-43b0ee2d0706/BHCFL+Admin-Yearbook-72025563950.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/6567f38b-9d3b-4c2a-90e6-0823c6be274e/BHCFL+Admin-Yearbook-72025575169.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/e1388d31-7fa8-4e04-bf61-9a364cee135f/BHCFL+Admin-Yearbook-72025773386.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/6ccc721e-e375-4880-9f5b-501c8e3793a6/BHCFL+Admin-Yearbook-72025773387.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/8d104c53-a9de-42a3-8dcd-cca761cfcce1/BHCFL+Admin-Yearbook-72025773388.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/28871ded-3a6a-422b-a63c-bfdaa5274d97/BHCFL+Admin-Yearbook-72895411707.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c8cac95a-a25b-4aab-931b-a64e725c9efc/BHCFL+Admin-Yearbook-72895462579.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/49eeefc8-1ae8-4889-8e69-3351d081d770/BHCFL+Admin-Yearbook-72895935779.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/52d1e435-5b06-4ded-9a3f-2b9dc95ee802/BHCFL+Admin-Yearbook-72895935780.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/41a5b846-f6a8-4d62-96dd-2da290101d39/BHCFL+Admin-Yearbook-72896092991.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c502d192-fb87-432a-879f-ab59be22059f/BHCFL+Admin-Yearbook-72896197421.png",
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/5b7fd2d2-68ca-4134-bd68-ca2ac45d7c13/BHCFL+Admin-Yearbook-72896449636.png",
] as const;

export default function HomeGalleryReel() {
  const totalSlides = GALLERY_REEL_IMAGES.length;
  const loopStartIndex = totalSlides;
  const [activeIndex, setActiveIndex] = useState(loopStartIndex);
  const [isAnimating, setIsAnimating] = useState(true);

  const loopedSlides = useMemo(
    () => [...GALLERY_REEL_IMAGES, ...GALLERY_REEL_IMAGES, ...GALLERY_REEL_IMAGES],
    []
  );

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

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
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
    <section className="bg-[#e6e6e6] py-10 sm:py-12">
      <div className="mx-auto w-full max-w-[1700px] px-2 sm:px-6">
        <div className="relative mx-auto h-[75vh] min-h-[420px] max-h-[950px] overflow-hidden [--slide-width:clamp(280px,60vh,760px)]">
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
                  alt={`BHCFL gallery slide ${index + 1}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 z-20 flex h-[66px] w-[50px] -translate-y-1/2 items-center justify-center bg-white/80 text-[38px] leading-none text-black transition hover:bg-white"
            aria-label="Show previous slide"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 top-1/2 z-20 flex h-[66px] w-[50px] -translate-y-1/2 items-center justify-center bg-white/80 text-[38px] leading-none text-black transition hover:bg-white"
            aria-label="Show next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
