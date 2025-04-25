import Link from "next/link";

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
          className="text-base-100 hover:text-primary-60 m-3.5 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
