import Link from "next/link";

export default function VillageWelcomeSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <img
        src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/1764681274874-AFCLO517JZVXZNFFWV3Q/unsplash-image-vYGR3b_naPA.jpg"
        alt="Globe background"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_28%,rgba(0,0,0,0.54)_52%,rgba(0,0,0,0.35)_72%,rgba(0,0,0,0.2)_100%)]" />

      <div aria-hidden className="relative z-20 hidden xl:block">
        <div className="h-[84px] bg-[#e45d25]" />
        <svg
          className="h-[88px] w-full"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,140 1080,140 1440,0 L1440,0 L0,0 Z"
            fill="#e45d25"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[860px] w-full max-w-[1600px] px-6 pb-16 pt-8 sm:px-10 xl:px-[72px] xl:pt-[96px]">
        <div className="w-full max-w-[590px]">
          <p className="text-[14px] font-medium uppercase leading-tight tracking-[0.02em] text-white/95 sm:text-[18px] lg:text-[22px]">
            BLACK HOMESCHOOLERS OF CENTRAL FLORIDA, INC.
          </p>

          <p className="mt-6 text-[30px] font-medium uppercase tracking-[0.02em] text-white/95 sm:text-[40px] lg:text-[52px]">
            WELCOMES YOU
          </p>
          <p className="mt-3 text-[18px] font-medium uppercase tracking-[0.02em] text-white sm:text-[24px] lg:text-[30px]">
            Recognized. Respected. Trusted.
          </p>

          <div className="mt-10 space-y-6 text-[18px] leading-[1.6] text-white/92">
            <p>
              <strong>Black Homeschoolers of Central Florida, Inc.</strong> is a
              village,{" "}
              <strong>
                <em>a place that homeschoolers call home.</em>
              </strong>{" "}
              We provide a safe, supportive, and learning environment for our
              homeschooling families, which is especially important for families
              of color that may not get the support they need in other places.
            </p>
            <p>
              We provide classes, resources and information, options, and events
              curtailed to meet the needs of our families. At BHCFL, families
              find a welcoming village environment that provides support and
              guidance, and equips the parents with the skills &amp; confidence
              they need to be successful on their homeschooling journey. Our
              youth flourish in an environment where their culture and history
              is celebrated and explored. This village encourages education,
              self love, and growth. Not only does Black Homeschoolers of
              Central Florida help build friendships, but in our village,
              friends become family.
            </p>
          </div>

          <Link
            href="https://buy.stripe.com/4gweWJef73LI2tO9AA"
            className="mt-12 inline-flex min-h-[58px] min-w-[220px] items-center justify-center rounded-md bg-white px-8 py-3 text-[20px] font-semibold text-black transition hover:bg-white/90"
            target="_blank"
            rel="noreferrer"
          >
            Donate to BHCFL
          </Link>
        </div>
      </div>
    </section>
  );
}
