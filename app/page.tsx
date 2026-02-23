import VillageWelcomeSection from "@/components/sections/VillageWelcomeSection";
import HomeGalleryReel from "@/components/sections/HomeGalleryReel";
import JoinSupportPanelsSection from "@/components/sections/JoinSupportPanelsSection";

const NEWS_BUTTON_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/8f8e5820-6345-49dd-83ea-d26c5c24f183/image+%285%29.png";
const NEWS_HEADING_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/e47c4f1e-4ca7-41c1-9730-aa8f8635ea23/Find+Us+In+The+News%21.png";
const RIGHT_VIDEO_BG =
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/32308771-c38e-4dcd-b7fa-919cf1e0886f/download+%2811%29.png";

const NEWS_ITEMS = [
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/934949d6-8970-4050-821f-9df5c657f6c3/UB3HKCLLL5BTVO5TJCMOAUORGM.png",
    alt: "ClickOrlando logo",
    href: "https://www.clickorlando.com/getting-results/2024/11/01/this-nonprofit-provides-much-needed-support-for-central-florida-families-who-homeschool/#commentDiv",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/1141cf43-f809-4eb8-9eda-0bfe51c6f8ef/images+%285%29.jpeg",
    alt: "WESH 2 logo",
    href: "https://www.wesh.com/article/homeschool-florida/44713495",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/60f6823a-3b31-4289-86f4-cdbed107e048/GRASSROOTS-GRANTS-announcement.png",
    alt: "Grassroots grants announcement",
    href: "https://cffound.org/grassroots-grant-impact-story-black-homeschoolers-of-central-florida/",
  },
] as const;

export default function Home() {
  return (
    <main className="bg-black text-white">
      <VillageWelcomeSection />

      <section className="relative overflow-hidden bg-[#e6e6e6] text-[#1a1a1a]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[24px] bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />

        <div className="mx-auto grid max-w-[1800px] grid-cols-1 lg:grid-cols-[46%_54%]">
          <div className="bg-[#e6e6e6] px-7 pb-10 pt-16 sm:px-12 lg:px-20 lg:pt-24">
            <h2 className="text-center text-[26px] font-medium tracking-[0.01em] text-[#b33313] sm:text-[32px] lg:text-[36px]">
              It Takes A Village!
            </h2>

            <div className="mt-10 space-y-6 text-[16px] leading-[1.7] text-[#2b2b2b] sm:text-[18px] lg:text-[20px]">
              <p>
                <strong>
                  Since its founding in 2009, Black Homeschoolers of Central
                  Florida, Inc. has made tremendous community impact!
                </strong>
              </p>
              <p>
                Black Homeschoolers of Central Florida, Inc. has been serving
                the Greater Central Florida homeschool community since 2009,
                providing support, classes, field trips and learning
                opportunities, along with hosting events for homeschooled youth
                grades Pre-K-12th.
              </p>
              <p>
                Our organization offers in-person and virtual classes and have
                established Youth and Parent Clubs including a Science National
                Honor Society Club. We also have internship opportunities in
                partnership with Stetson University's Bonner Program.
              </p>
              <p>
                Not only does Black Homeschoolers of Central Florida, Inc.
                provide for the youth, but also their families. There are
                programs like the BHCFL Parent Book Club, Parent Workshops,
                BHCFL Family Retreat Week, and out-of-state and out-of-country
                trips for families to connect, bond, learn and grow together.
              </p>
              <p>
                Our programs of focus are the{" "}
                <strong className="text-[#b33313]">
                  BHCFL African Cultural Arts Program
                </strong>
                , <strong>BHCFL Outdoor Recreational Program</strong>,{" "}
                <strong className="text-[#245d1f]">
                  BHCFL Community Garden and Food Cooperative
                </strong>
                , <strong className="text-[#b33313]">The Resource Store</strong>
                , <strong>The Graduation/Awards Ceremony</strong>, our{" "}
                <strong className="text-[#245d1f]">Fencing and Golf Program</strong>,{" "}
                <strong className="text-[#b33313]">Community Service</strong>,
                and the <strong>Guests/Classes/Field Trips Program</strong>{" "}
                which includes our Tutoring &amp; College Preparatory Program,
                Work Readiness, and our Parent Workshops &amp; Coaching.
              </p>
              <p>
                Our <strong>BHCFL Homeschool Resource Center</strong> serves as
                the heart of our village,{" "}
                <strong>“A Place Homeschoolers Call Home.”</strong> Here,
                families can access tutoring, hybrid classes, educational
                consultations, workshops, and testing services in a peaceful,
                nurturing environment. The center provides a space for
                collaboration, connection, and support, helping to remove
                barriers that often hinder underrepresented homeschooling
                families.
              </p>
              <p>
                Just steps away, the <strong>BHCFL Learning Center</strong>,{" "}
                <strong>“Explore. Create. Thrive.”</strong>, invites students
                to engage in hands-on learning experiences in art, music,
                sewing, podcasting, cooking, dance, and self-defense.
                With dedicated studios and creative spaces, the Learning Center
                inspires exploration, imagination, and innovation. It’s where
                our youth can develop their talents, embrace their culture, and
                express themselves freely.
              </p>
              <p>
                <strong>
                  These efforts reflect the commitment BHCFL makes to
                  homeschooled youth and their families, supporters, and the
                  communities we serve to close the opportunity gap for those
                  who need us most.
                </strong>
              </p>
              <p>
                <strong className="text-[#b33313]">
                  The core of our work lies in the continuous passion and
                  dedication we bring to the range of projects we take part in.
                </strong>{" "}
                <strong>
                  Please join us by supporting our efforts to make a meaningful
                  difference in the lives of others.
                </strong>
              </p>
            </div>

            <div className="mt-10 overflow-hidden border-2 border-black">
              <iframe
                src="https://www.youtube.com/embed/6aLbLEL3ihA"
                title="BHCFL Community EXPO Promo"
                className="aspect-video w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <div
              className="relative bg-cover bg-center px-6 pb-14 pt-10 sm:px-10 lg:min-h-[1200px]"
              style={{
                backgroundImage:
                  "url('https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/1764682018176-4ODV8D5EWYBIVXMBWYT3/unsplash-image-l3S8VEL5dT4.jpg')",
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/fa6fc9d9-7c09-4a9f-a959-200f572523df/cff-nonprofit-reviewbadge-color.png"
                  alt="Central Florida Foundation badge"
                  className="mx-auto h-auto w-full max-w-[340px] object-contain"
                  loading="lazy"
                />
                <img
                  src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/a7db0eca-443a-4ee0-bba0-cdaa6f6d0f45/download+%2810%29.png"
                  alt="GreatNonprofits widget"
                  className="mx-auto h-auto w-full max-w-[240px] object-contain"
                  loading="lazy"
                />
                <img
                  src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/636cb521-72d4-4f32-b9e4-878f3555fd4c/IMG_3916.jpeg"
                  alt="GreatNonprofits top-rated badge"
                  className="mx-auto h-auto w-full max-w-[260px] object-contain"
                  loading="lazy"
                />
              </div>

              <div className="relative mx-auto mt-12 w-full max-w-[860px] border-[6px] border-black bg-[#f49a25] p-6 sm:p-8">
                <img
                  src={NEWS_HEADING_IMAGE}
                  alt="Find Us In The News!"
                  className="mx-auto h-auto w-full max-w-[380px] object-contain"
                  loading="lazy"
                />

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {NEWS_ITEMS.map((item) => (
                    <div key={item.href} className="flex flex-col items-center gap-3">
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <img
                          src={NEWS_BUTTON_IMAGE}
                          alt="Click link below"
                          className="h-auto w-[210px] object-contain"
                          loading="lazy"
                        />
                      </a>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="h-[150px] w-[220px] object-contain sm:h-[180px]"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden px-6 pb-16 pt-8 sm:px-10 lg:min-h-[1320px]"
              style={{ backgroundColor: "#050505" }}
            >
              <img
                src={RIGHT_VIDEO_BG}
                alt="Sunset background"
                className="absolute inset-0 h-full w-full object-cover object-[49%_25%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25" />

              <div className="relative ml-auto flex w-full max-w-[760px] flex-col gap-6 lg:gap-8">
                <div className="overflow-hidden border border-white/20">
                  <iframe
                    src="https://www.youtube.com/embed/3PCjhn4hyFA"
                    title="BHCFL video feature one"
                    className="aspect-video w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden border border-white/20">
                  <iframe
                    src="https://www.youtube.com/embed/1Pe2Rrk8a7g"
                    title="BHCFL video feature two"
                    className="aspect-video w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden border border-white/20">
                  <iframe
                    src="https://www.youtube.com/embed/a1ASX2nz5Fk?start=29"
                    title="BHCFL additional video"
                    className="aspect-video w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg
          aria-hidden
          className="pointer-events-none absolute -bottom-1 left-0 h-[70px] w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C330,96 1110,96 1440,20"
            fill="none"
            stroke="#e56a1f"
            strokeWidth="6"
          />
        </svg>
      </section>

      <HomeGalleryReel />
      <JoinSupportPanelsSection />

      <section className="relative h-[220px] bg-black">
        <img
          src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/a42df4ef-6d5e-467a-bd33-947853218d2a/Vinyl-Spin-1-imgg-gi3-jlqzahcb.png"
          alt="Vinyl spin background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/15" />
      </section>
    </main>
  );
}
