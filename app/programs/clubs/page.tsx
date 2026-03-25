"use client";
import Image from "next/image";

const clubs = [
  {
    title: "Science Club",
    image: "/images/science.webp",
    description:
      "An exciting way for students to explore and engage with the world of science.",
  },
  {
    title: "Art Club",
    image: "/images/art.webp",
    description:
      "Provides an outlet for creative expression, development of artistic skills, and gaining connections.",
  },
  {
    title: "Gaming Club",
    image: "/images/gaming.webp",
    description:
      "Primarily focused on video games, club members get to try out new games brought by members and engage in multiplayer-friendly competition.",
  },
  {
    title: "Gardening & Canning Club",
    image: "/images/gardening.webp",
    description:
      "Offers a preservation canning series. Learn how to preserve your garden produce and ensure your family is well-fed with safe, delicious food for years to come.",
  },
  {
    title: "Math Club",
    image: "/images/math.webp",
    description:
      "A fun way to develop students’ mathematical curiosity, exploration, and discovery through math games and manipulatives.",
  },
  {
    title: "Book Club",
    image: "/images/book.webp",
    description:
      "Read and talk about books based on a topic or an agreed-upon reading list.",
  },
];

export default function ClubsPage() {
  return (
    <main className="pt-28 bg-[#F4EFE9]">
      {/* HERO */}
      <section className="bg-[#F2DF3A] py-20">
        <div className="overflow-hidden bg-yellow-400 py-6">
  <div className="whitespace-nowrap animate-marquee text-black text-4xl md:text-5xl font-bold">
    BHCFL CLUBS    •    BHCFL CLUBS • BHCFL CLUBS • BHCFL CLUBS •
  </div>
</div>

      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Join a Club</h2>
        <p className="text-gray-700 mb-4">
          A great place to meetup and bond with peers with the same interests at
          our BHCFL Learning Center.
        </p>
        <p className="font-medium mb-2">Join a club for just $65 / month</p>
        <p className="text-sm text-gray-600">
          BHCFL Clubs are also covered via PEP Scholarship.
        </p>

        <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition">
          Start Now By Clicking The Payment Button
        </button>
      </section>

      {/* CLUB GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {clubs.map((club) => (
            <div
              key={club.title}
              className="bg-[#F4EFE9] text-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-md mb-6">
                <Image
                  src={club.image}
                  alt={club.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 relative inline-block">
                {club.title}
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#B62A0A]" />
              </h3>

              <p className="text-gray-700 px-4 mb-6">
                {club.description}
              </p>

              <button className="bg-[#B62A0A] text-white px-10 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CLASSES BROWSER (moved) */}
      {/* Note: the classes browser was moved to the top-level /classes route. */}
    </main>
  );
}
