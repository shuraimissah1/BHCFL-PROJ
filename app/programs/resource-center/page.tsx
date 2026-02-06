import Image from "next/image";

export default function ResourceCenterPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-black text-white py-24">
        <div className="absolute inset-y-0 left-0 w-12 bg-[#E05A26]" />
        <div className="absolute inset-y-0 right-0 w-12 bg-[#E05A26]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the BHCFL Homeschool Resource Center
          </h1>
          <p className="text-xl font-semibold mb-8">
            A Place Homeschoolers Call Home!
          </p>

          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src="/images/resource-center-building.jpg"
                alt="BHCFL Homeschool Resource Center"
                width={520}
                height={420}
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-300 space-y-2">
            <p>Located at 1609 S State Rd. 15A, Suite 7, Deland, Florida 32720</p>
            <p>Days Open: Monday–Thursday</p>
            <p>
              By Appointment: (386) 837-6270 · Direct Line: (386) 873-2016
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">
          Explore the wide range of services, programs, and resources we provide
          for homeschool families. Every offering is designed to support your
          child’s growth, your family’s journey, and the homeschool community.
        </p>
      </section>

      {/* ABOUT RESOURCE CENTER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#C7431B] font-semibold italic">
            <p>
              The BHCFL Homeschool Resource Center is a 1,700 square foot hub
              dedicated to tutoring, family support, and academic success.
            </p>
            <p>
              Since its opening, the Resource Center has become a place
              homeschoolers call home. Families now have a consistent,
              peaceful, and structured environment for learning.
            </p>
            <p>
              Children walk into classrooms with culturally affirming imagery
              that lets them know they belong.
            </p>

            <div className="pt-6">
              <h3 className="font-bold text-lg mb-4">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Year-round tutoring for K–12 in reading, writing, math, and
                  test preparation
                </li>
                <li>
                  PEP Scholarship Direct Pay Provider, removing out-of-pocket
                  barriers
                </li>
                <li>
                  Resource Store with curriculum, manipulatives, science kits,
                  and multicultural books
                </li>
                <li>
                  Science activities, art sessions, and parent workshops in a
                  dedicated classroom space
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/resource-center-front.jpg"
              alt="Resource Center"
              width={420}
              height={520}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 bg-black text-white relative">
        <div className="absolute inset-y-0 left-0 w-10 bg-[#E05A26]" />
        <div className="absolute inset-y-0 right-0 w-10 bg-[#E05A26]" />

        <div className="relative max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">What We Offer</h2>

          <div className="space-y-16">
            {/* ITEM */}
            {[
              {
                number: "01",
                title: "Consultations",
                content: (
                  <>
                    <p className="mb-4">
                      As a veteran homeschooling mom, Rasheeda Denning offers
                      personalized consultations. 100% of fees support BHCFL
                      and our Homeschool Resource Center.
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>General homeschooling questions</li>
                      <li>Setting up your homeschool program</li>
                      <li>
                        Starting a homeschool group, organization, or nonprofit
                      </li>
                    </ul>
                    <p className="font-semibold">Schedule a Consultation:</p>
                    <ul className="list-disc list-inside">
                      <li>15 minutes — $45</li>
                      <li>30 minutes — $75</li>
                      <li>1 hour — $125</li>
                    </ul>
                  </>
                ),
              },
              {
                number: "02",
                title: "Workshops",
                content: (
                  <p>
                    We offer a variety of interactive workshops to support
                    parents and students. Check out our current schedule and
                    sign up online.
                  </p>
                ),
              },
              {
                number: "03",
                title: "Classes",
                content: (
                  <p>
                    Small, focused classes are offered at our Resource Center
                    on select days of the week to foster learning, creativity,
                    and social engagement.
                  </p>
                ),
              },
              {
                number: "04",
                title: "Testing Services",
                content: (
                  <>
                    <p className="mb-4">
                      We provide standardized assessments to track academic
                      progress:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Stanford 10 — untimed, Grades K5–12</li>
                      <li>
                        OLSAT — can be combined with Stanford 10
                      </li>
                      <li>
                        IOWA / CogAT — timed, Grades K5–12
                      </li>
                    </ul>
                    <p className="mb-2">
                      Special accommodations available for students with
                      diagnosed disabilities.
                    </p>
                    <p className="font-semibold">Results Timing:</p>
                    <ul className="list-disc list-inside">
                      <li>IOWA: 2–4 weeks</li>
                      <li>Stanford 10: 6–8 weeks</li>
                    </ul>
                  </>
                ),
              },
              {
                number: "05",
                title: "Resource Store",
                content: (
                  <>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Curriculum & Cultural Unit Studies</li>
                      <li>Homeschool Tribe Gear</li>
                      <li>Afrocentric books for the whole family</li>
                      <li>Learning games and educational supplies</li>
                    </ul>
                    <p>
                      Supporting your homeschool journey while helping families
                      connect, build, learn, and grow together.
                    </p>
                  </>
                ),
              },
              {
                number: "06",
                title: "Tutoring",
                content: (
                  <p>
                    Open Lab Tutoring is available Tuesdays & Thursdays,
                    10 a.m.–1 p.m. Math tutoring for grades K–8 with personalized
                    academic support.
                  </p>
                ),
              },
            ].map((item) => (
              <div key={item.number}>
                <h3 className="text-2xl font-bold mb-4">
                  {item.number} | {item.title}
                </h3>
                <div className="text-gray-300 leading-relaxed">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
