"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardCard01 from "@/partials/dashboard/DashboardCard01";
import DashboardCard02 from "@/partials/dashboard/DashboardCard02";
import DashboardCard03 from "@/partials/dashboard/DashboardCard03";
import DashboardCard04 from "@/partials/dashboard/DashboardCard04";
import DashboardCard05 from "@/partials/dashboard/DashboardCard05";
function StatsPage() {;

  return (
    <>
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
            Estadísticas de Sucursal 1
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
          <DashboardCard01 />
          <DashboardCard02 />
          <DashboardCard03 />
          <DashboardCard04 />
          <DashboardCard05 />
      </div>

      
    </>
  );
}

export default StatsPage;
