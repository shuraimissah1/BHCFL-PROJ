"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg text-gray-900">
            Black Homeschoolers of Central Florida
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <li>
              <Link href="/" className="hover:text-brand-orange">
                Home
              </Link>
            </li>

            {/* ABOUT US DROPDOWN */}
            <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-brand-orange">
                About Us
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </span>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-3 w-64 rounded-xl bg-white shadow-lg border
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-200 ease-out">
                <ul className="py-3">
                <DropdownItem href="/about/mission" label="Our Mission" />
                <DropdownItem href="/about/leadership" label="Leadership Team" />
                <DropdownItem href="/about/impact" label="Community Impact Report" />
                <DropdownItem href="/about/awards" label="Awards & Recognition" />
                </ul>
            </div>
            </li>

           <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-brand-orange">
                Membership
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </span>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-3 w-64 rounded-xl bg-white shadow-lg border
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-200 ease-out">
                <ul className="py-3">
                <DropdownItem href="/about/mission" label="Join BHCFL" />
                <DropdownItem href="/about/leadership" label="Start Homeschooling" />
                <DropdownItem href="/about/impact" label="Helpful Sites" />
                <DropdownItem href="/about/awards" label="Scholarships" />
                </ul>
            </div>
            </li>

            {/* PROGRAMS DROPDOWN */}
            <li className="relative group">
              <span className="flex items-center gap-1 cursor-pointer hover:text-brand-orange">
                Programs
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </span>


              {/* Dropdown */}
              <div className="
                    absolute left-0 top-full mt-3 w-72 rounded-xl bg-white shadow-lg border
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-200 ease-out">
                <ul className="py-3">
                  <DropdownItem
                    href="/programs/resource-center"
                    label="ICFL Homeschool Resource Center"
                  />
                  <DropdownItem href="/programs/clubs" label="Clubs" />
                  <DropdownItem href="/programs/classes" label="Classes" />
                  <DropdownItem
                    href="/programs/community-expo"
                    label="Community EXPO Event"
                  />
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/get-involved"
                className="bg-brand-orange text-white px-4 py-2 rounded-md hover:bg-orange-600"
              >
                Get Involved
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 border-t">
            <ul className="space-y-4 text-gray-700">
              <li><Link href="/">Home</Link></li>
              <li className="font-semibold">Programs</li>
              <ul className="ml-4 space-y-2 text-sm">
                <li><Link href="/programs/resource-center">ICFL Homeschool Resource Center</Link></li>
                <li><Link href="/programs/clubs">Clubs</Link></li>
                <li><Link href="/programs/classes">Classes</Link></li>
                <li><Link href="/programs/community-expo">Community EXPO Event</Link></li>
              </ul>
              <li className="font-semibold">About Us</li>
              <ul className="ml-4 space-y-2 text-sm">
                <li><Link href="/about/mission">Our Mission</Link></li>
                <li><Link href="/about/leadership">Leadership Team</Link></li>
                <li><Link href="/about/impact">Community Impact Report</Link></li>
                <li><Link href="/about/awards">Awards & Recognition</Link></li>
                </ul>

              <li><Link href="/get-involved">Get Involved</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

/* Helper component */
function DropdownItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange"
      >
        {label}
      </Link>
    </li>
  );
}
