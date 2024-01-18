import React from "react";
import { useRouter } from "next/navigation";
import { useSubsidiaries } from "@/context/SubsidiaryContext";
import toast from "react-hot-toast";

function SubsidiaryCard({ subsidiary }) {
  const router = useRouter();
  const { deleteSubsidiary } = useSubsidiaries();

  return subsidiary ? (
    <div
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
      
    >
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl my-2 underline">{subsidiary.name}</h1>

        <span className="mr-2 font-bold">
          RUC:
          <h2 className="text-lg font-semibold text-slate-800  inline mx-2">
            {subsidiary.ruc}
          </h2>
        </span>

        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Últ. Donación: 20/02/24
        </div>
        <span className="mr-2 font-bold">Valor Actual Inventario:</span>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">13,500</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
            -14%
          </div>
        </div>
        <span className="mr-2 font-bold">Valor Aprovechable:</span>
        <div className="flex items-start mb-4">
          <div className="text-3xl font-bold text-slate-800 mr-2">4,500</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
            -14%
          </div>
        </div>
        <button
          className="btn bg-red-500 hover:bg-red-600 text-white"
          onClick={(e) => {
            e.stopPropagation();
            deleteSubsidiary(subsidiary.id);

            toast.success("Registro eliminado exitosamente");
          }}
        >
          Borrar
        </button>

        <button
          className="btn bg-indigo-500 hover:bg-indigo-600 text-white mx-4"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/sucursales/${subsidiary.id}/edit`);
          }}
        >
          Editar
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default SubsidiaryCard;
