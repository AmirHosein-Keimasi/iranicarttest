// app/header/Header.tsx
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import LogoComponent from "@/app/logoComponent";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* بخش لوگو و متن - چسبیده به هم */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <LogoComponent />
          </div>

          {/* منوی دسکتاپ - SSR */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <NavLinks />
          </nav>

          {/* دکمه ورود - SSR */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              ورود
            </Link>
          </div>

          {/* دکمه همبرگر - کلاینت ساید */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
