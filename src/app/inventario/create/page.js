"use client";
import React, { useState } from "react";
import { createInventory, useInventories } from "@/context/InventoryContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function InventoryCreatePage({ params }) {
  
  const { createInventory, updateInventory, inventories } =
    useInventories();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateInventory(params.id, data);
      toast.success("Registro actualizado exitosamente")
    } else {
      createInventory(data.name, data.ruc);
      toast.success("Registro creado exitosamente")
    }
    router.push("/inventario");
  });

  useEffect(() => {
    if (params.id) {
      const inventoryFound = inventories.find(
        (subsi) => subsi.id == params.id
      );
      if (inventoryFound) {
        setValue('name', inventoryFound.name)
        setValue('ruc', inventoryFound.ruc)
    }
    }
  }, []);
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="flex flex-wrap  m-4">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            name="name"
            type="text"
            placeholder="Escriba su nombre"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600">Este campo es requerido</span>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="ruc"
          >
            RUC
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="ruc"
            name="ruc"
            type="text"
            placeholder="Escriba su RUC"
            {...register("ruc", { required: true })}
          />
          {errors.ruc && (
            <span className="text-red-600">Este campo es requerido</span>
          )}
        </div>
        <button className="btn btn-blue m-3 my-4">Guardar</button>
      </div>
    </form>
  );
}

export default InventoryCreatePage;
