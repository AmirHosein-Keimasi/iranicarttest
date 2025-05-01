import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import LogoComponent from "@/app/logoComponent";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-base-0 md:px-16">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <LogoComponent />
          </div>

          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <NavLinks />
          </nav>

          <div className="hidden md:block">
            <Link
              href="/auth/signin"
              className="bg-primary-100 text-base-0 px-4 py-2 rounded-md hover:bg-primary-80 transition-colors"
            >
              ورود/ثبت‌نام
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
