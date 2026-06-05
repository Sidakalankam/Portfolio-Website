"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, profile } from "../lib/content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label={`${profile.name} Home`}>
          <span className="brand-mark">
            <Image
              src="/images/profile-photo.jpeg"
              alt=""
              width={34}
              height={34}
              priority
            />
          </span>
          <span>{profile.name}</span>
        </Link>
        <nav className="site-nav" aria-label="Main Navigation">
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
