import React from 'react';
import tecnologyData from "@/components/About/tecnologyData";
import {Tecnology} from "@/types/tecnology";

const ListTecnology = ({ tecnology }:{tecnology:Tecnology}) => {
    const { id, name,description } = tecnology;
 return (
     <>
         <div className="mt-7.5 flex items-center gap-5">
             <div
                 className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                 <p className="text-metatitle2 font-semibold text-black dark:text-white">
                     {id}
                 </p>
             </div>
             <div className="w-3/4">
                 <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                     {name}
                 </h3>
                 <p>{description}.</p>
             </div>
         </div>
     </>
 );
};
export default ListTecnology;