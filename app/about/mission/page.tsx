export default function MissionPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#B12A0E]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Mission
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Connecting, building, learning, and growing together.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-xl p-8 shadow-lg">
            <p className="text-gray-800 leading-relaxed">
              Black Homeschoolers of Central Florida, Inc. exists solely to
              inform, educate, and help homeschooling families, namely those of
              color, in the greater Central Florida area and the State of
              Florida.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              We execute that mission by providing classes, guest speakers in
              career fields, field trips, hosting an annual
              graduation and awards ceremony, a resource store, homeschool
              resource and learning center, informative communications, support,
              motivation, family-to-family connections, and access to local and
              statewide support groups.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              We empower our children and inspire parents to harness the power
              within to educate their children. This organization is not
              affiliated with any religion and is open to people of all
              backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#B12A0E] text-white rounded-xl p-10 shadow-md">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <div className="h-1 w-20 bg-white/70 mb-6" />
          <p className="text-white/90 leading-relaxed text-lg">
            To create a vibrant, empowered, and inclusive homeschooling
            community where Black families and students thrive academically,
            culturally, and socially—fostering a legacy of excellence,
            self-sufficiency, and a deep connection to our heritage.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Our vision shapes every decision we make, from the programs we
            design to the partnerships we cultivate. We believe homeschooling
            can be a powerful tool for academic growth, cultural pride, and
            lifelong confidence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By centering community, identity, and excellence, we aim to create
            environments where families feel supported and students feel seen.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-[#B12A0E] text-white rounded-xl p-10 shadow-md">
              <h2 className="text-4xl font-bold mb-4">What We Do</h2>
              <div className="h-1 w-20 bg-white/70 mb-6" />
              <p className="text-white/90 leading-relaxed">
                Our work is organized into eight key areas that support, uplift,
                and empower the families we serve. These pillars guide our
                programs, services, and long-term commitment to our homeschool
                community.
              </p>
            </div>

            <div className="space-y-10">
              {[
                {
                  title: "Academic Excellence",
                  desc: "High-quality educational resources, tutoring, and classes designed to help students reach their highest academic potential.",
                },
                {
                  title: "Cultural Empowerment",
                  desc: "Programming rooted in African and African American history and culture to build identity, pride, and confidence.",
                },
                {
                  title: "Community Building",
                  desc: "A strong, supportive, and inclusive village where families connect, share resources, and learn together.",
                },
                {
                  title: "Leadership Development",
                  desc: "Clubs, public speaking, and service opportunities that prepare students to lead with confidence and purpose.",
                },
                {
                  title: "Parent Support & Education",
                  desc: "Guidance, training, and resources to help homeschooling parents thrive as their children’s primary educators.",
                },
                {
                  title: "Extracurricular Enrichment",
                  desc: "Arts, science, sports, music, sewing, gardening, martial arts, photography, coding, and more.",
                },
                {
                  title: "Advocacy & Representation",
                  desc: "Advocating for the rights and visibility of Black homeschooling families.",
                },
                {
                  title: "Sustainability & Growth",
                  desc: "Building systems, partnerships, and leadership capacity to ensure long-term impact.",
                },
              ].map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#B12A0E]"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {i + 1}. {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PARTNERS */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Community Partners
        </h2>
        <p className="text-gray-700 text-lg">
          We love our community partners.
        </p>
        <p className="text-gray-700 mt-2">
          Thank you for your generous contributions and continued support.
        </p>
      </section>
    </main>
  );
}
