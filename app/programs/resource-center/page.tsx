import Image from "next/image";

export default function ResourceCenterPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-y-0 left-0 w-12 bg-[#E05A26]" />
        <div className="absolute inset-y-0 right-0 w-12 bg-[#E05A26]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome to the BHCFL Homeschool Resource Center
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-6">A Place Homeschoolers Call Home!</p>

          <div className="flex justify-center mb-6">
            <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src="/images/bhcfl, 1.webp"
                alt="BHCFL Homeschool Resource Center"
                width={640}
                height={360}
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-300 space-y-1">
            <p>Located at 1609 S. SR-15A, Suite 7, DeLand, Florida 32720</p>
            <p>Days Open: Monday–Thursday (By Appointment)</p>
            <p>Phone: (386) 837-6270 · Direct Line: (386) 873-2016</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">
          Explore the wide range of services, programs, and resources we provide for homeschool families. Every offering is
          designed to support your child’s growth, your family’s journey, and the homeschool community.
        </p>
      </section>

      {/* ABOUT + KEY ACHIEVEMENTS */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-[#C7431B] font-semibold italic">
            <p>
              The BHCFL Homeschool Resource Center is a 1,700 square foot hub dedicated to tutoring, family support, and
              academic success. Since its opening, the Resource Center has become a place homeschoolers call home.
            </p>
            <p>
              Families now have a consistent, peaceful, and structured environment for learning. Children walk into classrooms
              with culturally affirming imagery that lets them know they belong.
            </p>

            <div className="pt-4">
              <h3 className="font-bold text-lg mb-3">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Year round tutoring for kindergarten through 12th grade in reading, writing, math, and test preparation.</li>
                <li>We are a PEP Scholarship Direct Pay Provider, which allows more families to access tutoring, classes, and membership without out of pocket barriers.</li>
                <li>Resource Store with curriculum, manipulatives, science kits, and multicultural books at low or no cost.</li>
                <li>Science activities, art sessions, and parent workshops held in a dedicated classroom space.</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/bhcfl, 1.webp"
              alt="Resource Center front"
              width={520}
              height={420}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">What We Offer</h2>

        <div className="space-y-10">
          <article>
            <h3 className="text-2xl font-semibold mb-2">01 | Consultations</h3>
            <p className="mb-3">As a veteran homeschooling mom, Rasheeda Denning offers personalized consultations. 100% of fees support BHCFL and our Homeschool Resource Center.</p>
            <ul className="list-disc list-inside mb-3">
              <li>General homeschooling questions</li>
              <li>Setting up your homeschool program</li>
              <li>Starting a homeschool group, organization, or nonprofit</li>
            </ul>
            <p className="font-semibold">Schedule a Consultation:</p>
            <ul className="list-disc list-inside">
              <li>15 minutes — $45</li>
              <li>30 minutes — $75</li>
              <li>1 hour — $125</li>
            </ul>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-2">02 | Workshops</h3>
            <p>We offer a variety of interactive workshops to support parents and students. Check out our current schedule and sign up online.</p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-2">03 | Classes</h3>
            <p>Small, focused classes are offered at our Resource Center on select days of the week. Classes are designed to foster learning, creativity, and social engagement.</p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-2">04 | Testing Services</h3>
            <p className="mb-3">We provide a range of standardized assessments to track academic progress:</p>
            <ul className="list-disc list-inside mb-3">
              <li>Stanford 10 — untimed, Grades K5–12</li>
              <li>OLSAT (Otis-Lennon School Ability Test®) — can be combined with Stanford 10</li>
              <li>IOWA Assessments / CogAT (Cognitive Abilities Test®) — timed, Grades K5–12</li>
            </ul>
            <p className="mb-2">Special Accommodations: Available for children with diagnosed disabilities (as indicated on IEPs).</p>
            <p className="font-semibold mb-1">Results Timing:</p>
            <ul className="list-disc list-inside">
              <li>IOWA Assessments: 2–4 weeks</li>
              <li>Stanford 10: 6–8 weeks</li>
            </ul>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-2">05 | Resource Store</h3>
            <p className="mb-3">Visit the BHCFL Homeschool Resource Store to find carefully curated homeschool materials and resources for your family:</p>
            <ul className="list-disc list-inside mb-3">
              <li>Curriculum & Unit Studies – including BHCFL’s Empowering Families Cultural Unit Studies</li>
              <li>Homeschooled Tribe Gear – shirts, hats, and other items to celebrate your homeschool community</li>
              <li>Afrocentric Books for the Whole Family – children, teen, and adult literature that centers Black history, culture, and identity</li>
              <li>Learning games, educational supplies, and more</li>
            </ul>
            <p>We provide a wide selection to support your homeschooling journey and help your entire family connect, build, learn, and grow together.</p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-2">06 | Tutoring</h3>
            <p>Open Lab Tutoring is available Tuesdays & Thursdays, 10 a.m.–1:00 p.m. We provide tutoring in Math for grades K–8, offering personalized support to help your child build skills, confidence, and a strong academic foundation.</p>
          </article>
        </div>
      </section>

      {/* VISIT OUR STORE & GALLERY */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Visit our Resource Store!</h2>
          <h4 className="font-semibold mb-4">1609 S. SR-15A, Suite 7, DeLand, Florida 32720</h4>

          <div className="grid md:grid-cols-3 gap-4">
            <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/2628c003-9ce1-4d87-935b-b79ac1d40d68/BHCFL+HOMESCHOOL+Math+Class.png?format=1000w" alt="Math class" className="w-full h-auto rounded shadow" />
            <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/067fdfae-e70d-4d16-991b-c0fcf95a7901/1.png?format=1000w" alt="store 1" className="w-full h-auto rounded shadow" />
            <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/3c2bc3d3-873c-46eb-bc6f-60951221fc95/2.png?format=1000w" alt="store 2" className="w-full h-auto rounded shadow" />
          </div>
        </div>
      </section>

      {/* CONTACT + FOOTER INFO */}
      <section className="py-10 max-w-6xl mx-auto px-6">
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>Phone:</strong> (386) 837-6270 · (386) 873-2016</p>
          <p><strong>Email:</strong> <a href="mailto:blackhomeschoolerscfl@gmail.com" className="underline">blackhomeschoolerscfl@gmail.com</a></p>
          <p className="mt-4">Black Homeschoolers of Central Florida, Inc. EIN: 81-3448261</p>

          <div className="mt-4 text-xs text-gray-600">
            <p>
              A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE OBTAINED FROM THE DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE WITHIN THE STATE.
              REGISTRATION DOES NOT IMPLY ENDORSEMENT, APPROVAL, OR RECOMMENDATION BY THE STATE.
            </p>
            <p className="mt-2">1-800-HELP-FLA · <a href="http://www.floridaconsumerhelp.com" className="underline">www.FloridaConsumerHelp.com</a> · STATE REG#: CH49729</p>
          </div>
        </div>
      </section>
    </main>
  );
}
