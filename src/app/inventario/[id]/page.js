"use client";
import { useContext } from "react";
import { useInventory } from "@/context/InventoryContext";
import InventoryCard from "@/components/InventoryCard";

export default function InventoryDetailPage({ params }) {
  const { inventory } = useInventory();
  
  return (
    <div>
      detalles de {params.id}
    </div>
  );
}
