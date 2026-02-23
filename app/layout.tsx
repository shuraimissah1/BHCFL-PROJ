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
        </div>
        <Footer />
      </body>
    </html>
  );
}
