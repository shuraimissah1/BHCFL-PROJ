import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-brand-orange text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Black Homeschool Families Across Central Florida
            </h1>
            <p className="mt-6 text-lg text-white/90">
              A supportive community offering enrichment programs, field trips,
              and resources for homeschooling families.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/get-involved"
                className="bg-white text-brand-orange px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
              >
                Join Our Community
              </Link>
              <Link
                href="/programs"
                className="border border-white px-6 py-3 rounded-md hover:bg-white/10"
              >
                View Our Resource Center
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Black Homeschoolers of Central Florida"
              width={320}
              height={320}
              priority
            />
          </div>
        </div>
      </section>

     
        {/* MISSION */}
        <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/my_kente.jpg')" }}
        >
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-black">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
            </h2>

            <p className="text-lg md:text-xl text-gray-900">
            We support Black homeschooling families by creating culturally
            affirming educational experiences, fostering community, and
            empowering students to thrive academically and socially.
            </p>
        </div>
        </section>



  {/* OFFERINGS – SOLID */}
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
      What We Offer
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "Educational Programs",
          desc: "Hands-on learning, workshops, and academic enrichment.",
        },
        {
          title: "Field Trips & Events",
          desc: "Cultural experiences and social gatherings for families.",
        },
        {
          title: "Family Support",
          desc: "Guidance, resources, and a welcoming community.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="
            bg-white rounded-2xl p-8
            border border-gray-200
            shadow-sm transition
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <div className="h-1 w-12 bg-brand-orange rounded-full mb-6" />

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            {item.title}
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join a Community That Supports Your Journey
        </h2>
        <p className="text-white/80 mb-8">
          Whether you're new or experienced, we walk alongside you.
        </p>
        <Link
          href="/get-involved"
          className="inline-block bg-brand-orange px-8 py-4 rounded-md font-semibold hover:bg-orange-600"
        >
          Get Involved
        </Link>
      </section>
      <section
  className="h-40 bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url('/images/my_kente.jpg')" }}
/>

    </main>
  );
}
