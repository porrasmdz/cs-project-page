"use client";
import { useState } from "react";
import Link from "next/link";
import SearchModal from "@/components/ModalSearch";
import Notifications from "@/components/DropdownNotifications";
import Help from "@/components/DropdownHelp";
import UserMenu from "@/components/DropdownProfile";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16 -mb-px">
          {/* Header: Left side */}
          
     
          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
