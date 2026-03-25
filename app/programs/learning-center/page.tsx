import Image from "next/image";

export default function LearningCenterPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-y-0 left-0 w-12 bg-[#E05A26]" />
        <div className="absolute inset-y-0 right-0 w-12 bg-[#E05A26]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">BHCFL Learning Center</h1>
          <p className="text-lg md:text-xl font-semibold mb-6">Explore. Create. Thrive.</p>

          <div className="flex justify-center mb-6">
            <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
              <img
                src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/5166afbf-9099-4f27-89e7-85f2d487f30b/506764096_745712534782028_3748232524413737046_n.jpg?format=2500w"
                alt="BHCFL Learning Center"
                className="object-cover w-full h-[360px]"
              />
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-300 space-y-1">
            <p>1609 S. SR-15A, Suite 7, DeLand, Florida 32720</p>
            <p>Phone: (386) 837-6270 · (386) 873-2016</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">
          The BHCFL Learning Center is a 1,700 square foot space focused on creativity, life skills, and hands-on
          exploration. The Learning Center is where students explore who they are, what they love, and what they can create.
        </p>
      </section>

      {/* FEATURED SPACES */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-[#C7431B] font-semibold italic">
            <p>
              Our Learning Center hosts a variety of spaces designed to spark curiosity, develop skills, and provide
              culturally affirming experiences for students and families.
            </p>

            <div className="pt-4">
              <h3 className="font-bold text-lg mb-3">Featured Spaces</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>The Sound Lab: Podcasting & Music Studio</li>
                <li>Culinary Creations Kitchen</li>
                <li>Arts in Motion Studio</li>
                <li>The Hub: Student Lounge</li>
                <li>Stitch & Create Sewing Studio</li>
                <li>Parent Lounge</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/9a1ebb45-1098-4cad-bab4-cee9700ccc6e/616826979_908772785142668_5493818501841625426_n.jpg?format=1000w"
              alt="Learning Center interior"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* GALLERY / HIGHLIGHTS */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Explore. Create. Thrive!</h2>

        <p className="mb-6">Check out upcoming programs and a gallery of recent Learning Center activities.</p>

        <div className="mb-6">
          <a
            href="/shop/camps"
            className="inline-block rounded bg-[#E05A26] px-4 py-2 text-white font-semibold hover:opacity-90"
          >
            View Upcoming Summer Camps
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/0d4ea9d3-7946-4947-b0d9-4c8291fefd34/BHCFL+BASIC+CAR+MAINTENANCE+CAMP.png?format=1000w" alt="camp flyer" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/9a1ebb45-1098-4cad-bab4-cee9700ccc6e/616826979_908772785142668_5493818501841625426_n.jpg?format=1000w" alt="gallery 1" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/af299f0f-2d7b-4802-a8e0-b5f9e3461c20/616731225_908772718476008_6605024721029298751_n.jpg?format=1000w" alt="gallery 2" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/613048b4-24ea-49fe-a885-bc625a469bc4/615432515_908773051809308_1871692744276503368_n.jpg?format=1000w" alt="gallery 3" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c3e12959-3004-4584-827c-9295b6dd6dae/615354093_908772975142649_1177526216125459003_n.jpg?format=1000w" alt="gallery 4" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/4d1c62dc-473a-4a49-8432-5cb1eef231ad/615157313_908772825142664_3785315595502687050_n.jpg?format=1000w" alt="gallery 5" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/cf22f3b3-da6e-4dcb-90dd-f394f7b901cf/615145311_908772741809339_4163734843828326471_n.jpg?format=1000w" alt="gallery 6" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/41995401-6331-4b52-afbd-5f6ccbb2497a/615141521_908773008475979_7148991391273536565_n.jpg?format=1000w" alt="gallery 7" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/a21fb298-0f63-4786-9158-43b0ee2d0706/BHCFL+Admin-Yearbook-72025563950.png?format=1000w" alt="yearbook 1" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c502d192-fb87-4326-9158-43b0ee2d0706/BHCFL+Admin-Yearbook-72896197421.png?format=1000w" alt="yearbook 2" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c8cac95a-a25b-4aab-931b-a64e725c9efc/BHCFL+Admin-Yearbook-72895462579.png?format=1000w" alt="yearbook 3" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/49eeefc8-1ae8-4889-8e69-3351d081d770/BHCFL+Admin-Yearbook-72895935779.png?format=1000w" alt="yearbook 4" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/28871ded-3a6a-422b-a63c-bfdaa5274d97/BHCFL+Admin-Yearbook-72895411707.png?format=1000w" alt="yearbook 5" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/41a5b846-f6a8-4d62-96dd-2da290101d39/BHCFL+Admin-Yearbook-72896092991.png?format=1000w" alt="yearbook 6" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/66eb62ef-b891-4258-b6fa-f3712b3e134f/BHCFL+Admin-Yearbook-72025540505.png?format=1000w" alt="yearbook 7" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/c51508b0-1ace-447b-9ff0-d3e334362a26/_d_38fj75_1_g9jUd018svc1k58o5rvw84rd_thucbt.png?format=1000w" alt="graphic 1" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/6567f38b-9d3b-4c2b-a90e-0823c6be274e/BHCFL+Admin-Yearbook-72025575169.png?format=1000w" alt="yearbook 8" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/52d1e435-5b06-4ded-9a3f-2b9dc95ee802/BHCFL+Admin-Yearbook-72895935780.png?format=1000w" alt="yearbook 9" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/30c3e95a-0196-48fb-a396-cdd34feac658/_d_38fjc9_1_fb4Ud018svc13gw3ijm1zk6d_thucbt.png?format=1000w" alt="graphic 2" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/48cb196e-09e2-4bc5-943f-1319432e4981/_d_38daae_8_i7eUd018svcle4nb9i36f5t_thucbt.png?format=1000w" alt="graphic 3" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/2214769c-343c-4fe2-a5fc-936dc489e9c0/_d_38da4a_c_f7eUd018svcvoocy18l2jr0_thucbt.png?format=1000w" alt="graphic 4" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/0ba7be83-6a11-467d-be91-475ecc7ef01b/_d_38fj90_0_ia8Ud018svc1sjxf3r96qhi_thucbt.png?format=1000w" alt="graphic 5" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/21531a5c-e2b3-4b66-a97c-366684b700ca/_d_38fj9j_b_19jUd018svc104d6rxjn1rvd_thucbt.png?format=1000w" alt="graphic 6" className="w-full h-auto rounded shadow" />
          <img src="https://images.squarespace-cdn.com/content/v1/680df32fdac3025d588dd659/8907226e-6911-4c2b-aabe-a16bbabcd087/_d_38fj43_4_0bgUd018svc1unlw1b09o1wf_thucbt.png?format=1000w" alt="graphic 7" className="w-full h-auto rounded shadow" />
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
