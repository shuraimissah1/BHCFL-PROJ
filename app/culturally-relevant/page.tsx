const HERO_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/1760058100463-6KADM62RPX536ENHBWXD/unsplash-image-VJVsEnR_vNE.jpg";

const INTRO_HEADING =
  "Black Homeschoolers of Central Florida: Empowering Families with Personalized Education!";

const INTRO_PARAGRAPHS = [
  "At Black Homeschoolers of Central Florida, Inc., we recognize that every child's educational journey is unique. Families deserve an approach that reflects their values, celebrates cultural identity, and adapts to their individual needs. Our distinct strength lies in how we empower families to take the lead in crafting personalized learning experiences-supported by a vibrant community that shares their vision for academic excellence and cultural pride.",
  "We are excited to introduce a new Unit Study Series developed by Black Homeschoolers of Central Florida, Inc. This innovative series will offer both take-home and digital resources, equipping families with culturally relevant materials that align with core academic standards. With a flexible, student-centered approach, the series allows families to tailor learning to their child's interests, strengths, and learning style-fostering deeper engagement and a love for learning.",
] as const;

const DISTINCT_ITEMS = [
  {
    title: "Culturally Relevant Education",
    description:
      "We place culture and identity at the heart of learning. Our unit studies and educational resources celebrate Black history, contributions, and lived experiences-ensuring children see themselves reflected in what they learn. This focus fosters pride, belonging, and confidence-qualities often missing from traditional educational settings.",
  },
  {
    title: "Flexibility and Choice",
    description:
      "Families have the freedom to select from diverse educational methods, such as road schooling, experiential learning, or customized academic programs. This flexibility allows learning to adapt to each family's lifestyle while still delivering strong academic outcomes.",
  },
  {
    title: "Community-Driven Support",
    description:
      "More than a program-we are a movement. Our thriving community offers families connection, collaboration, and resource-sharing. Through workshops, field trips, clubs, and events, we cultivate a strong support network that reinforces success and well-being.",
  },
  {
    title: "Accessible Opportunities",
    description:
      "We are a PEP Scholarship-approved provider, helping to remove financial barriers that often prevent access to quality education. Programs like the PEP Scholarship make our services attainable for more families, ensuring equity and inclusion remain at the forefront.",
  },
] as const;

export default function CulturallyRelevantPage() {
  return (
    <main
      className="border-t-[3px] border-[#b7220a] bg-[#d9d9d9] px-6 pb-16 pt-8 sm:px-10 lg:px-12"
      style={{ fontFamily: "Manrope, Avenir Next, Helvetica Neue, Arial, sans-serif" }}
    >
      <div className="mx-auto max-w-[1800px]">
        <section className="grid items-start gap-6 xl:grid-cols-[49%_51%]">
          <div className="overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="A family learning together around a table"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="space-y-5 text-[#232323]">
            <h1 className="text-[clamp(1.7rem,2.1vw,3.15rem)] font-semibold leading-tight tracking-[-0.01em]">
              {INTRO_HEADING}
            </h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[clamp(0.98rem,1.02vw,1.45rem)] leading-[1.55] text-[#2d2d2d]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 max-w-[980px] text-[#222222]">
          <h2 className="text-[clamp(1.9rem,2.4vw,3.2rem)] font-medium tracking-tight">
            What Makes Our Approach Distinct?
          </h2>

          <div className="mt-8 space-y-8">
            {DISTINCT_ITEMS.map((item) => (
              <article key={item.title}>
                <h3 className="text-[clamp(1.22rem,1.55vw,2.05rem)] font-semibold">
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-[clamp(0.98rem,1.02vw,1.35rem)] leading-[1.6] text-[#333333]"
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
