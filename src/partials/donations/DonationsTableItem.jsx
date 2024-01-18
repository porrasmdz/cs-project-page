import React, { useState } from 'react';
import Image from 'next/image';
function DonationsTableItem(props) {

  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const statusColor = (status) => {
    switch (status) {
      case 'Recibido':
        return 'bg-emerald-100 text-emerald-500';
      case 'Sin Confirmar':
        return 'bg-amber-100 text-amber-600';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

  
  return (
    <tbody className="text-sm">
      {/* Row */}
      <tr className="">
       
        <td className="px-4 whitespace-nowrap py-8">
          <div className="flex items-center text-slate-800">
            <div className="w-12 h-12 p-2 ml-8 shrink-0 flex items-center justify-center bg-slate-100 rounded-full m-4">
              <Image className="ml-1" src={props.image} width="20" height="20" alt={props.order} />
            </div>
            <div className="font-medium text-sky-500">{props.order}</div>
          </div>
        </td>
        <td className="px-2  py-3 whitespace-nowrap">
          <div>{props.date}</div>
        </td>
        <td className="px-2  py-3 whitespace-nowrap">
          <div className="font-medium text-slate-800">{props.customer}</div>
        </td>
        
        <td className="px-2  py-3 whitespace-nowrap">
          <div className="font-medium text-slate-800">{props.items}</div>
        </td>
        <td className="px-2  py-3 whitespace-nowrap">
          <div className={`inline-flex font-medium rounded-full text-center px-4 py-1 ${statusColor(props.status)}`}>{props.status}</div>
        </td>
        
        <td className="px-2  py-3 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">{props.total}</div>
        </td>
       
   
      </tr>
      {/*
      Example of content revealing when clicking the button on the right side:
      Note that you must set a "colSpan" attribute on the <td> element,
      and it should match the number of columns in your table
      */}
   
    </tbody>
  );
}

export default DonationsTableItem;
