import Image from "next/image";

const leaders = [
  {
    name: "Rasheeda Denning",
    role: "Founder, CEO & President",
    education: [
      "B.A. Communications",
      "Worcester State University",
      "Post Commander – American Legion Orange Baker Post 187",
      "Stetson University Partners Advisory Board Member",
      "U.S. Army Veteran",
    ],
    bio: `Rasheeda Denning is a trailblazer in the world of homeschooling, known for her innovative spirit,
bold leadership, and unwavering dedication to education and community empowerment. As a wife,
mother of eight, and grandmother of two, Rasheeda leads with lived experience and a deep commitment
to building strong, culturally grounded families.

A U.S. Army veteran, Rasheeda served as a Paratrooper and Combat Medical Specialist during the
Persian Gulf War. She currently holds the distinction of being the first female Post Commander of
American Legion Orange Baker Post 187 in DeLand, Florida — a historic leadership milestone rooted
in service and advocacy.

Beyond the battlefield, Rasheeda is an accomplished creative force. A former artist, producer,
writer, arranger, singer, and executive, she began her music career at an early age and was crowned
Miss Tennessee in Hal Jackson’s International Talented Teens Pageant at just 13. In 1997, she
independently released her first R&B single, and by 2003, she had produced eight albums. Her albums
*Heart of a Woman* and *Share My World* were listed for consideration at the 46th and 47th Annual
Grammy Awards.

Rasheeda’s media presence includes appearances on the Montel Williams Show, World Monitor Special
Broadcast, and the CBS/Boston Children’s Hospital Telethon, as well as a role in the 1989 film
*My Mother Wears Combat Boots* alongside Barbara Eden. In recognition of her lifelong service and
impact, she is the recipient of the Presidential Lifetime Achievement Service Award.

Through Black Homeschoolers of Central Florida, Inc., Rasheeda channels her leadership, creativity,
and advocacy into building a thriving village where Black families are supported, celebrated,
and empowered to educate with confidence and purpose.`,
  },
  {
    name: "Brian Denning, Sr.",
    role: "Vice President & Warehouse Logistics / Inventory Management Coordinator",
    education: [
      "B.A. Business Administration – Management",
      "Florida Institute of Technology",
      "Penn Tank Lines – Terminal Manager",
      "US Foods – Transportation Manager",
      "U.S. Army Veteran",
    ],
    bio: `Brian Denning Sr. is an accomplished logistics professional with over two decades of experience
in supply chain management, operations, and transportation logistics. He holds a Bachelor of Arts
in Business Administration Management from the Florida Institute of Technology and brings a
disciplined, systems-driven approach to organizational leadership.

Brian’s career in logistics began with his service in the U.S. Army, where he served as a
Non-Commissioned Officer (NCO) in key roles including Supply Sergeant, Transportation Specialist,
and Fueler. His military background instilled a strong foundation in operational efficiency,
accountability, and teamwork, shaping a leadership style rooted in integrity, structure, and
continuous improvement.

Following his military service, Brian joined Penn Tank Lines, where he steadily advanced through
multiple roles, beginning as a driver and dispatcher and ultimately rising to Terminal Manager.
In this role, he demonstrated exceptional operational leadership, overseeing daily terminal
operations, optimizing transportation routes, managing personnel, and ensuring strict compliance
with safety and regulatory standards.

Currently, Brian serves as the Warehouse Logistics and Inventory Management Coordinator for Black
Homeschoolers of Central Florida. In this role, he oversees warehouse operations, manages inventory
and resource distribution, and ensures that educational materials and program resources are
efficiently allocated to support homeschooling families across the community.

Brian is deeply committed to the mission of Black Homeschoolers of Central Florida. Together with
his wife, Rasheeda Denning, he works tirelessly behind the scenes to help build a strong,
well-supported, and sustainable organization that empowers families to thrive throughout their
homeschooling journeys.`,
  },
  {
    name: "Toi Bynes",
    role: "Sr. Operations Manager & Enrollment Coordinator",
    education: [
      "B.S. Business / Human Resources",
      "Master of Arts in Teaching",
      "Master of Nonprofit Management",
      "Certified Yoga Instructor",
    ],
    bio: `Toi Bynes is a well-respected and longstanding member of the Black Homeschoolers of Central
Florida, Inc. team, having served the organization with dedication and heart since 2015. As a
member of the Executive Team, she plays a vital role in shaping the vision, direction, and programs
that support and uplift homeschooling families throughout the community.

Toi’s connection to BHCFL is deeply personal. For her and her family, the organization represents
far more than education—it represents belonging, representation, and the celebration of shared
history and culture. Through her leadership and involvement, Toi has helped foster a strong sense
of community where families build meaningful relationships, share experiences, and grow together.

Reflecting on her journey, Toi shares that being part of this Village has brought lifelong
connections, countless adventures, and daily encouragement that continues to support her family’s
homeschooling journey. She is deeply grateful for the love, support, and sense of unity found
within BHCFL and looks forward to many more years of connecting, building, learning, and growing
together with the BHCFL family.`,
  },
  {
    name: "Nora LeBert",
    role: "Director of Education",
    education: ["B.S. Behavioral Science"],
    bio: `Nora Lebert is a dedicated advocate and educator with a strong background in the human
services field. For eight years, she worked with a nonprofit organization serving families in
crisis and at-risk youth throughout Central Florida, where she developed a deep commitment to
community support, access to opportunity, and holistic education.

Since 2015, Nora has been actively involved with Black Homeschoolers of Central Florida (BHCFL),
where she is home educating two of her school-aged children. Alongside her role as a mother and
educator, she is also a co-owner of an electrical contracting business she operates with her
husband, balancing entrepreneurship with community leadership.

Nora’s dedication to BHCFL is reflected in her hands-on contributions as an instructor, where she
has taught a wide range of classes including public speaking, science, cooking, and financial
literacy through Junior Achievement. She strongly believes in the power of education, inclusion,
and cultivating a supportive village to help raise confident, capable children. Nora’s personal
and professional work is centered on creating environments where families feel supported and the
next generation is empowered to thrive.`,
  },
];

export default function LeadershipTeamPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="py-24 bg-brand-dark text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Meet Our Leadership Team
        </h1>
        <p className="max-w-3xl mx-auto text-white/80 text-lg">
          Where passion, service, and dedication come together to uplift and empower
          Black homeschooling families.
        </p>
      </section>

      {/* TEAM GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-14 md:grid-cols-2">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="
                  border border-gray-200 rounded-2xl
                  p-8 shadow-sm hover:shadow-md transition
                "
              >
                {/* Header */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/images/placeholder-profile.png"
                      alt={`${leader.name} profile placeholder`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {leader.name}
                    </h2>
                    <p className="text-brand-orange font-medium">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Education */}
                <ul className="mb-4 list-disc list-inside text-gray-700 text-sm">
                  {leader.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* Bio */}
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
