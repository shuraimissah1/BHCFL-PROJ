import "./global.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpiralImageCarousel from "@/components/sections/SpiralImageCarousel";

const SPIRAL_TEXT = "CONNECTING, BUILDING, LEARNING AND GROWING TOGETHER! ";
const SPIRAL_TRACK = SPIRAL_TEXT.repeat(8);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-[72px] xl:pt-[220px] 2xl:pt-[278px]">
          <section className="hidden xl:block border-y-[3px] border-[#232323] bg-[#f7a030] shadow-[inset_0_10px_20px_rgba(255,255,255,0.4)]">
            <div className="h-[190px] 2xl:h-[230px] overflow-hidden">
              <svg
                className="h-full w-full"
                viewBox="0 0 3000 820"
                preserveAspectRatio="none"
                role="img"
                aria-label="Connecting, building, learning and growing together"
              >
                <defs>
                  <path
                    id="spiral-marquee-path"
                    d="M -1400 410 Q -500 40 400 410 T 2200 410 T 4000 410 T 5800 410"
                  />
                </defs>
                <text
                  fill="#1f2937"
                  fontSize="104"
                  fontWeight="500"
                  letterSpacing="1.5"
                  fontFamily="Avenir Next, Helvetica Neue, Arial, sans-serif"
                >
                  <textPath href="#spiral-marquee-path" startOffset="0%">
                    {SPIRAL_TRACK}
                    <animate
                      attributeName="startOffset"
                      from="0%"
                      to="-100%"
                      dur="18s"
                      repeatCount="indefinite"
                    />
                  </textPath>
                </text>
              </svg>
            </div>
          </section>
          <SpiralImageCarousel />
          <main className="relative z-0">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
