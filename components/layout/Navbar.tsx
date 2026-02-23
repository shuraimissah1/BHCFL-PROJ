"use client";
import { Facebook, Instagram, ShoppingCart, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type DropdownItem = {
  href: string;
  label: string;
};

type NavItem =
  | { href: string; label: string; dropdown?: never }
  | { label: string; dropdown: DropdownItem[]; href?: never };

const DONATE_URL =
  "https://buy.stripe.com/4gweWJef73LI2tO9AA?locale=en&__embed_source=buy_btn_1SX3WgLJF2NMRJ6M88Y56jMA";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    dropdown: [
      { href: "/about/mission", label: "Our Mission" },
      { href: "/about/leadership", label: "Leadership Team" },
      { href: "/about/impact", label: "Community Impact Report" },
      { href: "/about/awards", label: "Awards & Recognition" },
    ],
  },
  {
    label: "Membership",
    dropdown: [
      { href: "/membership/join", label: "Join BHCFL" },
      { href: "/membership/start-homeschooling", label: "Start Homeschooling" },
      { href: "/membership/helpful", label: "Helpful Sites" },
      { href: "/membership/scholarships", label: "Scholarships" },
    ],
  },
  {
    label: "Programs",
    dropdown: [
      { href: "/programs/resource-center", label: "Our Resource Center" },
      { href: "/programs/classes", label: "Classes and Clubs" },
      { href: "/programs/communityExpo", label: "Community EXPO Event" },
    ],
  },
  { href: "/events", label: "Events" },
  { href: DONATE_URL, label: "Donate" },
  { href: "/contact", label: "Contact" },
  { href: "/culturally-relevant", label: "Culturally Relevant" },
  { href: "/shop", label: "SHOP" },
] as const satisfies readonly NavItem[];

const SOCIAL_LINKS = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Facebook, label: "Facebook" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-stone-300/70 bg-[#f2efea]/95 shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur">
      <nav className="mx-auto w-full max-w-[2048px] px-4 sm:px-8 xl:px-[72px]">
        <div className="hidden xl:block">
          <div className="flex h-[220px] flex-col justify-center gap-5 2xl:h-[278px]">
            <div className="flex justify-center">
              <Link
                href="/"
                aria-label="Black Homeschoolers of Central Florida - Home"
                className="transition-opacity hover:opacity-90"
              >
                <Image
                  src="/images/logo.png"
                  alt="Black Homeschoolers of Central Florida"
                  width={374}
                  height={194}
                  priority
                  className="h-auto w-[170px] 2xl:w-[205px]"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between gap-8 text-[15px] leading-none text-[#333333]">
              <ul className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-3 2xl:gap-x-7">
                {NAV_LINKS.map((item) =>
                  "dropdown" in item ? (
                    <li key={item.label} className="group relative">
                      <button
                        type="button"
                        className="pb-1 transition-opacity hover:opacity-70"
                      >
                        {item.label}
                      </button>
                      <div className="invisible absolute left-0 top-full z-10 mt-3 min-w-[220px] translate-y-1 rounded border border-stone-200 bg-white py-2 opacity-0 shadow-md transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <ul>
                          {item.dropdown.map((d) => (
                            <li key={d.href}>
                              <Link
                                href={d.href}
                                className="block px-4 py-2 text-[15px] text-[#333333] transition-colors hover:bg-stone-100"
                              >
                                {d.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li key={item.label}>
                      {item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="pb-1 transition-opacity hover:opacity-70"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`pb-1 transition-opacity hover:opacity-70 ${
                            pathname === item.href ? "border-b border-[#333333]" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  )
                )}
              </ul>
              <div className="flex shrink-0 items-center gap-4 2xl:gap-8">
                <Link href="/login" className="pb-1 transition-opacity hover:opacity-70">
                  Login
                </Link>
                <div className="flex items-center gap-4 2xl:gap-7">
                  {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="inline-flex transition-opacity hover:opacity-70"
                    >
                      <Icon className="h-[13px] w-[13px]" strokeWidth={1.9} />
                    </a>
                  ))}
                </div>
                <Link
                  href="/shop/cart"
                  aria-label="Shopping cart"
                  className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
                >
                  <ShoppingCart className="h-[14px] w-[14px]" strokeWidth={1.9} />
                  <span className="text-[15px]">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[72px] items-center justify-between xl:hidden">
          <Link
            href="/"
            aria-label="Black Homeschoolers of Central Florida - Home"
            className="transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/logo.png"
              alt="Black Homeschoolers of Central Florida"
              width={374}
              height={194}
              className="h-auto w-[124px]"
            />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="rounded p-2 text-gray-800"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-stone-200 bg-[#f2efea] px-4 py-4 xl:hidden">
          <ul className="space-y-3 text-[14px] text-gray-800">
            {NAV_LINKS.map((item) =>
              "dropdown" in item ? (
                <li key={item.label}>
                  <span className="font-medium">{item.label}</span>
                  <ul className="mt-2 space-y-2 pl-4 text-sm">
                    {item.dropdown.map((d) => (
                      <li key={d.href}>
                        <Link href={d.href} onClick={() => setOpen(false)}>
                          {d.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            )}
            <li className="border-t border-stone-300 pt-3">
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="/shop/cart"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" /> Cart (0)
              </Link>
            </li>
            <li className="flex items-center gap-4 pt-1">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-700"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
