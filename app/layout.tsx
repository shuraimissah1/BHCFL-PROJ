import "./global.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
          <main className="relative z-0">{children}</main>

          <section className="relative h-[360px] overflow-hidden bg-black sm:h-[440px]">
            <img
              src="/images/spinning-vinyl-record.webp"
              alt="Spinning vinyl record background"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20" />
          </section>
        </div>
        <Footer />
      </body>
    </html>
  );
}
