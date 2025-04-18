"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { ReactNode } from "react";
import MainContainer from "@/components/MainContainer";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-white">
      <Navbar className="z-50" />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
