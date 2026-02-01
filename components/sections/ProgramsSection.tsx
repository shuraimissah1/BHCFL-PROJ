export default function ProgramsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Academic Enrichment",
            "Community Meetups",
            "Field Trips & Events",
          ].map((program) => (
            <div
              key={program}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-medium mb-2">{program}</h3>
              <p className="text-sm text-gray-600">
                Designed to support learning, connection, and growth for
                homeschooling families.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
