const VALUES = [
  {
    title: "Academic Excellence",
    desc: "Provide high quality educational resources, tutoring and classes designed to help students reach their highest academic potential.",
  },
  {
    title: "Cultural Empowerment",
    desc: "Integrate African and African American history, culture and values into educational programming to foster identity, pride and confidence in students.",
  },
  {
    title: "Community Building",
    desc: "Create a strong, supportive and inclusive village where homeschooling families can connect, share resources and grow together.",
  },
  {
    title: "Leadership Development",
    desc: "Equip youth with leadership skills through clubs, public speaking opportunities and community service initiatives that prepare them for future success.",
  },
  {
    title: "Parent Support and Education",
    desc: "Offer workshops, training and resources to empower homeschooling parents as effective educators and advocates for their children.",
  },
  {
    title: "Extracurricular Enrichment",
    desc: "Provide access to arts, sports, music, sewing, gardening, martial arts, photography and coding programs that cultivate creativity, discipline and talent.",
  },
  {
    title: "Advocacy and Representation",
    desc: "Advocate for the rights, needs and visibility of Black homeschooling families at local and state levels.",
  },
  {
    title: "Sustainability and Growth",
    desc: "Develop partnerships, secure funding and build organizational capacity to ensure long term impact and expansion.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#B12A0E] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mt-4 text-lg text-white/90">
            Connecting, building, learning and growing together.
          </p>
          <p className="mt-6 max-w-4xl leading-relaxed text-white/90">
            Black Homeschoolers of Central Florida, Inc. is a 501(c)(3)
            educational nonprofit organization. Since 2009, BHCFL has served
            families in the Greater Central Florida area and the State of
            Florida with culturally grounded homeschooling support, programs and
            resources.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <article className="rounded-xl bg-[#f8f8f8] p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Black Homeschoolers of Central Florida, Inc exists solely to
            inform, educate and help homeschooling families, namely those of
            color, in the Greater Central Florida area and in the State of
            Florida.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            We execute that mission by providing classes, guest speakers in
            career fields, field trips, hosting an annual graduation and awards
            ceremony, a resource store, homeschool resource and learning
            center, informative communication and support, motivation, family
            to family connection and access to local and statewide support
            groups.
          </p>
        </article>

        <article className="rounded-xl bg-[#f8f8f8] p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Our vision is to build a culture and community where homeschooled
            youth can have self determination and empowerment through
            educational opportunities, while introducing and embracing African
            and African American culture.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            We empower our children and inspire parents to harness the power
            within to educate their children. This organization is not
            affiliated with any religion and is open to all faiths.
          </p>
        </article>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-3 max-w-3xl text-gray-700">
            Our work is organized into eight focus areas that support, uplift
            and empower homeschooling families.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {VALUES.map((value, index) => (
              <article
                key={value.title}
                className="rounded-xl border-l-4 border-[#B12A0E] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {index + 1}. {value.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-700">
                  {value.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
