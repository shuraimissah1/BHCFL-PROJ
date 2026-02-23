const HANDS_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/02de8126-93eb-4689-8a40-8b0d512c81cb/download+%288%29.png";
const CENTER_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/bc66a2c3-fb63-4ef9-b3f1-8dcd71bcd9fd/download+%289%29.png";
const READING_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/32308771-c38e-4dcd-b7fa-919cf1e0886f/download+%2811%29.png";
const DONATE_URL =
  "https://buy.stripe.com/4gweWJef73LI2tO9AA?locale=en&__embed_source=buy_btn_1SX3WgLJF2NMRJ6M88Y56jMA";

export default function JoinSupportPanelsSection() {
  return (
    <section className="bg-[#e6e6e6]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[360px] sm:h-[460px] lg:h-[620px]">
          <img
            src={HANDS_IMAGE}
            alt="People stacking hands together outdoors"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10" />
          <a
            href="https://www.bhcflstrong.org/general-1-1"
            className="absolute bottom-8 left-1/2 inline-flex min-h-[112px] min-w-[300px] -translate-x-1/2 items-center justify-center rounded-2xl border border-white/80 bg-[#0a0c11] px-10 text-[22px] font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition hover:bg-black"
          >
            Join BHCFL
          </a>
        </div>

        <div className="relative h-[360px] sm:h-[460px] lg:h-[620px]">
          <img
            src={CENTER_IMAGE}
            alt="BHCFL Homeschool Resource Center building"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10" />
          <a
            href="https://www.bhcflstrong.org/general-1-5"
            className="absolute bottom-8 left-1/2 inline-flex min-h-[112px] min-w-[300px] -translate-x-1/2 items-center justify-center rounded-2xl border border-white/80 bg-[#0a0c11] px-10 text-[22px] font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition hover:bg-black"
          >
            Visit Our Centers
          </a>
        </div>
      </div>

      <div className="relative h-[124px] overflow-hidden bg-[#e45d25]">
        <img
          src="/images/my_kente.jpg"
          alt="Pattern strip"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#e45d25]/70" />
        <svg
          aria-hidden
          className="absolute -bottom-1 left-0 h-[130px] w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,185 1080,185 1440,40 L1440,220 L0,220 Z" fill="#e45d25" />
          <path
            d="M0,40 C360,185 1080,185 1440,40"
            fill="none"
            stroke="#b63412"
            strokeWidth="6"
          />
        </svg>
      </div>

      <div className="relative isolate overflow-hidden">
        <img
          src={READING_IMAGE}
          alt="Smiling child reading a book in a library"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto flex min-h-[700px] w-full max-w-[1800px] items-end justify-center px-6 pb-10 pt-12 sm:min-h-[760px] sm:pb-12 lg:min-h-[840px]">
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[112px] min-w-[370px] items-center justify-center rounded-2xl border border-black/55 bg-[#f2f2f2] px-10 text-[22px] font-semibold text-black shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition hover:bg-white"
          >
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  );
}
