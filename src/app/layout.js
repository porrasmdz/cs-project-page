"use client";
import { SubsidiaryProvider } from "../context/SubsidiaryContext.jsx";
import { InventoryProvider } from "../context/InventoryContext.jsx";
import "./globals.css";
import { usePathname } from "next/navigation.js";
import { Toaster } from "./Toaster.jsx";
import Header from "@/partials/Header.jsx";
import Sidebar from "@/partials/Sidebar.jsx";
import { useEffect } from "react";
import { useState } from "react";
// export const metadata = {
//   title: "Plataforma CyS",
//   description: "Proyecto para el reciclaje de alimentos en el Ecuador.",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [pathname]); // triggered on route change

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen ">
          <Sidebar />
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                
              <InventoryProvider>
                <SubsidiaryProvider>
                  {children}
                  <Toaster />
                </SubsidiaryProvider>
                </InventoryProvider>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
