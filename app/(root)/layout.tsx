import Navbar from "@/components/Navbar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans" suppressHydrationWarning>
      <Navbar />
      {children}
    </main>
  );
}
