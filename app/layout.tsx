import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { profile } from "../lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.title,
  icons: {
    icon: "/images/profile-photo.jpeg",
    shortcut: "/images/profile-photo.jpeg",
    apple: "/images/profile-photo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
