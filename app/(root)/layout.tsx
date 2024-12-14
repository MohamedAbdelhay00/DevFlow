import Navbar from "@/components/navigation/navbar/Navbar";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default AuthLayout;
