"use client";
import { useContext } from "react";
import { useSubsidiaries } from "@/context/SubsidiaryContext";
import SubsidiaryCard from "@/components/SubsidiaryCard";

export default function SubsidiaryDetailPage({ params }) {
  const { subsidiaries } = useSubsidiaries();
  
  return (
    <div>
      detalles de {params.id}
    </div>
  );
}
