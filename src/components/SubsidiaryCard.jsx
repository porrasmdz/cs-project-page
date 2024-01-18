import React from "react";
import { useRouter } from "next/navigation";
import { useSubsidiaries } from "@/context/SubsidiaryContext";
import toast from "react-hot-toast";

function SubsidiaryCard({ subsidiary }) {
  const router = useRouter();
  const { deleteSubsidiary } = useSubsidiaries();

  return subsidiary ? (
    <div
      className="card shadow-lg px-8 py-4 bg-slate-100 rounded-lg col-span-4"
      onClick={() => router.push(`/sucursales/${subsidiary.id}`)}
    >
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl my-2 underline">{subsidiary.name}</h1>
        <p className="mb-2">
          <span className="mr-2 font-bold">RUC:</span>

          <span>{subsidiary.ruc}</span>
        </p>
        <p className="text-gray-700 text-base my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
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
