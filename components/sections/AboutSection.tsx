export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700">
            We are a community of families committed to providing enriching
            homeschooling experiences for children of all ages. Our mission
            is to create spaces where students thrive academically, socially,
            and culturally.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">What We Believe</h2>
          <p className="text-gray-700">
            Education is strongest when families are supported. Through
            collaboration, shared resources, and inclusive programming, we
            help families navigate their homeschooling journeys with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
