import Link from "next/link";

export default function JoinBHCFLPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* PAGE HEADER */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          ⭐ Join the BHCFL Village
        </h1>
        <p className="text-lg text-gray-700">
          Connecting, Building, Learning, and Growing Together
        </p>
      </section>

      {/* MEMBERSHIP REQUIRED BANNER */}
      <section className="bg-green-900 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-100 text-center py-6 rounded-md text-lg font-medium">
            Membership is required to participate in BHCFL programs, classes,
            and field trips
          </div>
        </div>
      </section>

      {/* BEFORE YOU APPLY */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Before You Apply
          </h2>

          <p className="font-medium mb-4">
            Please make sure the following apply to your family:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>
              You understand that BHCFL is a membership-based organization,
              not a drop-in program
            </li>
            <li>
              Your family is prepared for active participation and engagement
            </li>
            <li>
              You can meet the financial commitments (registration fee,
              annual dues, background check)
            </li>
            <li>
              You acknowledge that membership closes April 30 for the
              upcoming school year
            </li>
            <li>
              All participating adults are willing to complete a background
              check
            </li>
            <li>
              You support our commitment to culture, community, and safe
              learning spaces
            </li>
            <li>
              You have reviewed our Membership Overview and agree to our
              expectations
            </li>
            <li>
              You understand that the full Participation Policy is provided
              after acceptance
            </li>
          </ul>

          <div className="text-center mt-10">
            <Link
              href="#apply"
              className="inline-block bg-black text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-800"
            >
              Apply For Membership
            </Link>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-4 border-black bg-[#F6C15A] p-8">
            <h3 className="text-xl font-bold mb-4">Important Notice:</h3>
            <p className="leading-relaxed">
              While we are committed to providing a positive experience for
              all children, please be aware that our staff is not equipped to
              offer specialized services for individuals with specific
              special needs or behavioral challenges. If your child requires
              such services, we recommend seeking additional support or
              accommodations to ensure their needs are fully met. Thank you
              for your understanding.
            </p>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <div>
            <p className="font-semibold mb-2">
              In order to participate in ANY of the classes/field trips/programs
              offered by Black Homeschoolers of Central Florida, Inc., you MUST
              first register to be a member of our homeschool group. There is a
              NON-REFUNDABLE registration fee of $200.00 per family.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Registration Fee $200:
            </h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>
                This is a one-time non-refundable payment collected at the time
                of registration or initial signup. This covers administrative
                costs associated with processing your application and
                registering you in our program.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Annual Membership Dues $600 due by May 31st:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>
                This is a recurring payment (typically yearly) that grants full
                access to all membership benefits for the entire year.
              </li>
              <li>
                It covers a wide range of services, resources, programs, and
                activities offered by the organization, but it does not cover
                any fees related with classes, field trips, and events.
              </li>
              <li className="font-medium">
                For your convenience, this payment can be made Direct Pay using
                currently available funds through the Step Up For Students PEP
                Scholarship or FES/UA.
              </li>
              <li>
                If documentation is needed for reimbursement, it is available
                upon request.
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="#apply"
              className="inline-block bg-black text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-800"
            >
              Apply For Membership
            </Link>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What Membership Requires
          </h2>

          <div className="h-2 w-48 bg-brand-orange mb-6" />

          <p className="font-medium mb-4">
            BHCFL is an active, engagement-based homeschool community.
            All members must be willing and able to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>
              Participate regularly in BHCFL programs, classes, and community
              events
            </li>
            <li>
              Communicate consistently with BHCFL leadership and group
              announcements
            </li>
            <li>
              Uphold a positive, respectful, and cooperative environment for
              all families
            </li>
            <li>
              Support the cultural mission and values of our organization
            </li>
            <li>
              Complete required onboarding steps, including interview and
              background checks
            </li>
            <li>
              Meet financial obligations by established deadlines
            </li>
          </ul>

          <p className="mt-4 text-gray-700">
            Full participation expectations and guidelines are provided after
            acceptance into the program.
          </p>
        </div>
      </section>

      {/* STEPS TO MEMBERSHIP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block bg-[#F6C15A] px-6 py-3 font-bold border-4 border-black mb-6">
            Steps to Membership — FOR THE UPCOMING SCHOOL YEAR
          </div>

          <ol className="list-decimal pl-6 space-y-4 text-gray-800">
            <li>
              Read an overview of our Participation Policy. If you agree,
              proceed to Step Number 2.
            </li>
            <li>
              Fill out the BHCFL Membership Interest Form. All new families MUST
              have this submitted before the April 30th deadline in order to
              enroll for the 2026–27 school year.
            </li>
            <li>
              Before submitting the interest form, please note that there is a
              one-time, non-refundable registration processing fee of $200. The
              fee is required to process your application and register you.
            </li>
            <li>
              A member from our team will contact you via email with instructions
              on scheduling your screening interview once you’ve paid your
              registration fee.
            </li>
            <li>
              Once you’ve completed your screening and have been approved to
              move to the next step, you will be required to have a background
              check for each participating adult.
            </li>
            <li>
              Make sure that you are financially ready to pay for your
              background check ($25) before beginning the process.
            </li>
            <li>
              Once approved and we have received a clear background check,
              your $600 annual dues will need to be paid by May 31st.
            </li>
          </ol>

          <p className="mt-8 font-medium">
            We look forward to having you join our village!
          </p>
        </div>
      </section>
    </main>
  );
}
