"use client";

import { usePathname } from "next/navigation";

interface MainContainerProps {
  children: React.ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  const pathname = usePathname();
  // Assume the landing page is "/" and should have no offset
  const paddingTop = pathname === "/" ? "pt-0" : "pt-[80px]";

  return <main className={`relative ${paddingTop}`}>{children}</main>;
}
