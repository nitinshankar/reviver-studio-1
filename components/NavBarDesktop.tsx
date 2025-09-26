"use client";
import Link from "next/link";
import List from "./List";
import HoverReveal from "./HoverReveal";
import NavItem from "./NavItem";
import OpenTimings from "./OpenTimings";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavBarDesktop() {
  return (
    <>
      <OpenTimings />

      <HoverReveal
        className="max-lg:hidden"
        beforeHover="DELHI,INDIA"
        afterHover={
          <Link href="mailto:hello@reviverstudio.com">
            hello@reviverstudio.com
          </Link>
        }
      />

      <div className="col-span-5 flex items-center justify-end gap-[0.28935vw]">
        <List>
          {navItems.map((eachNavItem) => (
            <NavItem key={eachNavItem.href} {...eachNavItem} />
          ))}
        </List>
      </div>
    </>
  );
}
