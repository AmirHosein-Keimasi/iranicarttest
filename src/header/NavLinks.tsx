// app/header/NavLinks.tsx
import Link from 'next/link';

const navItems = [
  { name: "پشتیبانی", href: "/support" },
  { name: "قیمت لحظه‌ای", href: "/prices" },
  { name: "معامله", href: "/trade" },
  { name: "درباره ما", href: "/about" },
];

export default function NavLinks() {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}