export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Connecting, building, learning and growing together</h1>
          <p className="text-lg text-gray-700 mb-6">Black HomeSchoolers of Central Florida is a supportive village offering classes, events, and resources for homeschooling families.</p>
          <div className="flex gap-4">
            <a href="/blank-2" className="inline-block bg-brand text-white px-5 py-3 rounded-md font-medium">Join BHCFL</a>
            <a href="/blank-5" className="inline-block border border-gray-200 px-5 py-3 rounded-md text-gray-700">Support Our Mission</a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1509099836639-18ba7f9e0c85?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Community" className="w-full h-80 object-cover" />
        </div>
      </div>
    </section>
  );
}
