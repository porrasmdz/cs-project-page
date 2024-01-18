"use client";
// import InventoryCard from "@/components/InventoryCard";
import DonationsTable from "@/partials/donations/DonationsTable"
import { useState } from "react";
import { useRouter } from "next/navigation";
function DonationsPage() {

  const router = useRouter();
  return (
    <>
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
            Donaciones de Sucursal 1
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        </div>
      </div>

      {/* Table */}
      <DonationsTable/>

      {/* <div className="grid grid-cols-12 gap-6">
        {Donations.map((subsi) => (
          <></> // <InventoryCard className="col-span-4" key={subsi.id} subsidiary={subsi} />
        ))}
      </div> */}
    </>
  );
}

export default DonationsPage;
