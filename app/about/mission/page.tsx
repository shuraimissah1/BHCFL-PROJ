import Link from "next/link";
import {
  MissionPhotoCarousel,
  VisionPhotoGrid,
} from "@/components/sections/MissionVisionMedia";

const DONATE_URL =
  "https://buy.stripe.com/4gweWJef73LI2tO9AA?locale=en&__embed_source=buy_btn_1SX3WgLJF2NMRJ6M88Y56jMA";
const COMMUNITY_PARTNERS_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/11baae40-2931-4f7a-a88c-939db717d288/download%2B%2812%29.png";
const TAGLINE = "CONNECTING, BUILDING, LEARNING AND GROWING TOGETHER";

const MISSION_TEXT =
  "Black Homeschoolers of Central Florida, Inc. exists solely to inform, educate, and help homeschooling families, namely those of color, in the Greater Central Florida area and the State of Florida. Black Homeschoolers of Central Florida, Inc. executes that mission by providing classes, guest speakers in career fields, field trips, hosting an annual graduation and awards ceremony, a resource store, homeschool resource center and learning center, informative communications, support, motivation, family to family connections, and connections to other support groups at the local and state level. Black Homeschoolers of Central Florida empowers our children and inspires parents to harness the power within to educate their children. This organization is not affiliated with any one religion and is open to people of all faiths. Black Homeschoolers of Central Florida is a 501(c)(3) Non-Profit Organization.";

const VISION_TEXT =
  "To create a vibrant, empowered, and inclusive homeschooling community where Black families and students thrive academically, culturally, and socially, fostering a legacy of excellence, self-sufficiency, and a deep connection to our heritage.";

const VALUES = [
  {
    title: "Academic Excellence",
    desc: "We provide high-quality educational resources, tutoring, and classes designed to help students reach their highest academic potential.",
  },
  {
    title: "Cultural Empowerment",
    desc: "We offer programming rooted in African and African American history and culture to build identity, pride, and confidence.",
  },
  {
    title: "Community Building",
    desc: "We cultivate a strong, supportive, and inclusive village where families connect, share resources, and learn together.",
  },
  {
    title: "Leadership Development",
    desc: "Through clubs, public speaking, and service opportunities, we prepare students to lead with confidence and purpose.",
  },
  {
    title: "Parent Support & Education",
    desc: "We provide guidance, training, and resources to help homeschooling parents thrive in their role as their children's primary educators.",
  },
  {
    title: "Extracurricular Enrichment",
    desc: "We provide access to arts, sports, music, sewing, gardening, martial arts, photography, coding, and hands-on enrichment programs.",
  },
  {
    title: "Advocacy & Representation",
    desc: "We advocate for the rights, needs, and visibility of Black homeschooling families at local and state levels.",
  },
  {
    title: "Sustainability & Growth",
    desc: "We strengthen partnerships, secure resources, and build organizational capacity to ensure long-term impact and expansion.",
  },
] as const;

function LeftPanel({ title }: { title: string }) {
  return (
    <div className="w-full max-w-[560px]">
      <div className="bg-[#b7220a] px-8 py-10 sm:px-10 sm:py-12">
        <h2 className="whitespace-pre-line text-6xl font-light leading-[0.95] text-[#efefef] sm:text-7xl">
          {title}
        </h2>
      </div>
      <div className="h-9 bg-[#d2cfcb]" />
      <div className="bg-[#b7220a] px-7 py-5">
        <p className="text-base font-semibold uppercase tracking-[-0.01em] text-[#f4f4f4] sm:text-lg">
          {TAGLINE}
        </p>
      </div>
    </div>
  );
}

function DonateButton() {
  return (
    <Link
      href={DONATE_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit items-center justify-center rounded-xl bg-[#0a0c12] px-10 py-5 text-base font-black uppercase tracking-tight text-white transition hover:bg-black sm:px-14 sm:py-6 sm:text-2xl"
    >
      Donate to BHCFL
    </Link>
  );
}

export default function MissionPage() {
  return (
    <main className="min-h-screen border-t-2 border-[#b7220a] bg-[#d9d9d9] text-[#222222]">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-20 px-6 py-14 sm:gap-24 sm:py-20">
        <section className="grid items-start gap-10 lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-16">
          <LeftPanel title={"Our\nMission"} />
          <div className="space-y-10">
            <p className="max-w-[760px] text-xl leading-[1.55] sm:text-2xl">
              {MISSION_TEXT}
            </p>
            <DonateButton />
          </div>
        </section>
      </div>

      <MissionPhotoCarousel />

      <div className="mx-auto flex max-w-[1360px] flex-col gap-20 px-6 py-14 sm:gap-24 sm:py-20">
        <section className="grid items-start gap-10 lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-16">
          <LeftPanel title={"Our\nVision"} />
          <div className="space-y-10">
            <p className="max-w-[760px] text-xl leading-[1.55] sm:text-2xl">
              {VISION_TEXT}
            </p>
            <DonateButton />
          </div>
        </section>
      </div>

      <VisionPhotoGrid />

      <div className="mx-auto flex max-w-[1360px] flex-col gap-20 px-6 py-14 sm:gap-24 sm:py-20">
        <section className="grid items-start gap-10 lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-16">
          <LeftPanel title="What We Do" />
          <div className="space-y-10">
            <p className="max-w-[760px] text-xl leading-[1.6] text-[#d24835] sm:text-2xl">
              At Black Homeschoolers of Central Florida, Inc., our work is
              organized into eight key areas that support, uplift, and empower
              the families we serve. These pillars guide our programs, services,
              and long-term commitment to our homeschool community.
            </p>

            <div className="space-y-9">
              {VALUES.map((value, index) => (
                <article key={value.title}>
                  <h3 className="text-3xl font-normal tracking-tight text-[#1b1b1b] sm:text-5xl">
                    {index + 1}. {value.title}
                  </h3>
                  <p className="mt-4 max-w-[760px] text-lg leading-[1.55] text-[#434343] sm:text-2xl">
                    {value.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="border-y-[4px] border-[#b7220a] bg-[#d9d9d9] py-10 sm:py-14">
        <div
          className="mx-auto max-w-[1400px] px-6 text-center"
          style={{ fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-[#151515] sm:text-5xl">
            Our Community Partners
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#303030] sm:text-2xl">
            We LOVE our Community Partners!
          </p>
          <p className="mt-3 text-base leading-relaxed text-[#303030] sm:text-2xl">
            Thank You
          </p>
          <p className="mt-1 text-base leading-relaxed text-[#303030] sm:text-2xl">
            For Your Generous Contributions!
          </p>

          <div className="mx-auto mt-8 w-full max-w-[1280px]">
            <img
              src={COMMUNITY_PARTNERS_IMAGE}
              alt="BHCFL community partners"
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
