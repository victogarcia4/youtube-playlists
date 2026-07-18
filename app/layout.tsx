import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vic's Playlist App",
  description:
    "A minimal YouTube playlist player for long trips, film scores, and classical music.",
  openGraph: {
    title: "Vic's Playlist App",
    description:
      "A minimal YouTube playlist player for long trips, film scores, and classical music.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
