"use client";
import { useContext } from "react";
import { useInventories } from "@/context/InventoryContext";
// import InventoryCard from "@/components/InventoryCard";
import OrdersTable from "@/partials/orders/OrdersTable"
import { useState } from "react";
import { useRouter } from "next/navigation";
function InventoriesPage() {
  const { inventories } = useInventories();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };
  const router = useRouter();
  return (
    <>
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
            Inventario de Sucursal 1
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        </div>
      </div>

      {/* Table */}
      <OrdersTable selectedItems={handleSelectedItems} />

      <div className="grid grid-cols-12 gap-6">
        {inventories.map((subsi) => (
          <></> // <InventoryCard className="col-span-4" key={subsi.id} subsidiary={subsi} />
        ))}
      </div>
    </>
  );
}

export default InventoriesPage;
