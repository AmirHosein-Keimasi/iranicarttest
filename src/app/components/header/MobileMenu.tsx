"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col space-y-1.5"
        aria-label="منو"
      >
        <span
          className={`block h-0.5 w-6 bg-base-60 transition-all ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-4 bg-base-60 transition-all ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-5 bg-base-60 transition-all ${
            isOpen ? "-rotate-45 -translate-y-1.5 w-6" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 bg-base-0 z-40 p-4">
          <nav className="flex flex-col space-y-4">
            <NavLinks />
            <Link
              href="/login"
              className="bg-primary-80 text-base-0 px-4 py-2 rounded-md hover:bg-primary-100 transition-colors text-center"
            >
              ورود
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
