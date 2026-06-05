"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, profile } from "../lib/content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label={`${profile.name} home`}>
          <span className="brand-mark">SA</span>
          <span>{profile.name}</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={isActive ? "active" : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
