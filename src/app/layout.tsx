import Navbar from "@/components/Navbar";
import "./globals.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-white">
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
