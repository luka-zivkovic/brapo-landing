import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "brapo - Optimized Digital Solutions",
  description: "We create optimized landing pages, mobile apps, and automation solutions to connect businesses with their customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-amber-50 via-white to-teal-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-teal-950`}
      >
        {/* Background gradient elements */}
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-amber-300/20 to-teal-300/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-teal-200/20 to-amber-200/20 blur-[100px] rounded-full"></div>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
