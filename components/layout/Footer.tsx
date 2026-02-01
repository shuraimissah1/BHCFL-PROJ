export default function Footer() {
  return (
    <footer className="bg-[#C9A227] text-gray-900 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Organization Info */}
        <div>
          <h4 className="text-lg font-semibold">
            Black Homeschoolers of Central Florida, Inc.
          </h4>
          <p className="mt-2">
            Supporting families through community, education, and empowerment.
          </p>
          <p className="mt-3">
            <span className="font-medium">EIN:</span> 81-3448261
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-medium text-base">Contact</h5>

          <p className="mt-3">
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:blackhomeschoolerscfl@gmail.com"
              className="underline hover:text-black"
            >
              blackhomeschoolerscfl@gmail.com
            </a>
          </p>

          <p className="mt-1">
            <span className="font-medium">Phone:</span>{" "}
            (386) 837-6270 · (386) 873-2016
          </p>

          <p className="mt-3">
            <span className="font-medium">Physical Address:</span><br />
            1609 S. SR-15A, Suite 7<br />
            DeLand, Florida 32720
          </p>

          <p className="mt-2">
            <span className="font-medium">Mailing Address:</span><br />
            1067 West Seagate Drive<br />
            Deltona, Florida 32725-2276
          </p>
        </div>

        {/* Social */}
        <div>
          <h5 className="font-medium text-base">Connect</h5>
          <div className="flex flex-col gap-2 mt-3">
            <a href="https://www.facebook.com/BHCFLStrong" className="hover:text-black">
              Facebook
            </a>
            <a href="https://twitter.com/BHCFLStrong" className="hover:text-black">
              Twitter
            </a>
            <a href="https://www.instagram.com/BHCFL/" className="hover:text-black">
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:col-span-3 text-center text-xs text-gray-800 pt-6">
          © {new Date().getFullYear()} Black Homeschoolers of Central Florida, Inc.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
