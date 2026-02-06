import Link from "next/link";

export default function StartHomeschoolingPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      
      {/* HERO */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Start Homeschooling in Florida
          </h1>
          <p className="text-lg text-gray-700">
            A step-by-step guide to getting legal, staying compliant, and building
            a successful homeschool experience for your family.
          </p>
        </div>
      </section>

      {/* GET LEGAL */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold">Get Legal</h2>
          <p>
            Homeschooling is fully legal in Florida. Families must choose one of
            three lawful pathways to educate their child at home.
          </p>
        </div>
      </section>

      {/* THREE PATHWAYS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <h2 className="text-3xl font-bold">
            Three Ways to Homeschool in Florida (2024–2025)
          </h2>

          {/* Option 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              1. Register with Your County School Board (Home Education Program)
            </h3>
            <p className="mb-4">
              This is the traditional home education pathway under Florida Statute
              1002.41.
            </p>

            <h4 className="font-semibold">Notice of Intent</h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Submit a Notice of Intent within 30 days of beginning homeschooling
              </li>
              <li>May be submitted by email, fax, mail, or in person</li>
              <li>
                The county will send a confirmation letter once approved
              </li>
            </ul>

            <h4 className="font-semibold mt-6">Annual Evaluation (Required)</h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Florida-certified teacher evaluation</li>
              <li>Nationally norm-referenced test</li>
              <li>State assessment</li>
              <li>Psychologist evaluation</li>
              <li>Portfolio review</li>
            </ul>
          </div>

          {/* Option 2 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              2. Register with a Private Umbrella School
            </h3>
            <p className="mb-4">
              Umbrella schools are private schools that allow families to educate
              at home while the school handles enrollment and reporting.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>No Notice of Intent to the county</li>
              <li>No annual evaluation required</li>
              <li>Policies vary by umbrella school</li>
              <li>Available to families statewide</li>
              <li>
                Dual enrollment students must still register with the county
              </li>
            </ul>
          </div>

          {/* Option 3 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              3. Apply as a PEP Student (Personalized Education Program Scholarship)
            </h3>
            <p>
              PEP allows families to homeschool using education savings account
              funds through Step Up For Students.
            </p>

            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Provides yearly education funds</li>
              <li>Families remain private homeschoolers</li>
              <li>Funds may be used for curriculum, tutoring, and programs</li>
              <li>No county Notice of Intent required</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold">Portfolio Requirements</h2>
          <p>
            Families registered with the county Home Education Program must
            maintain a portfolio.
          </p>

          <h4 className="font-semibold">The portfolio should include:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Courses taken</li>
            <li>Curriculum used</li>
            <li>Books read or listened to</li>
            <li>Outside classes or programs</li>
            <li>Field trip log (date, time, location)</li>
            <li>Optional photos, videos, achievements</li>
          </ul>
        </div>
      </section>

      {/* HIGH SCHOOL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold">High School Transcripts</h2>
          <p>
            Any student taking high-school level coursework should maintain a
            transcript.
          </p>
          <p>
            Our BHCFL Homeschool Resource Center offers High School Transcript &
            Diploma workshops.
          </p>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold">Curriculum Options</h2>
          <p>
            Curriculum can be free or paid. Curriculum is simply the material
            you use to teach a course.
          </p>

          <h4 className="font-semibold">Free Curriculum Options</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Khan Academy:</strong> Free courses from elementary through
              high school, including SAT prep
            </li>
            <li>
              <strong>Florida Virtual School (FLVS Flex):</strong> Free courses for
              Florida students taught by certified teachers
            </li>
          </ul>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Support</h2>
          <p className="text-white/90">
            By enrolling in Black Homeschoolers of Central Florida, Inc., you gain
            community, guidance, and trusted resources to help you succeed.
          </p>
        </div>
      </section>

    </main>
  );
}
