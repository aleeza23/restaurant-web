import React from "react";

const MyMenu = ({desciption , img , title , price}) => {
  return <>


    
      <div className="p-2 lg:w-1/2  w-full">
        <div className="h-full flex items-center py-2 lg:py-3 rounded-lg">
          <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4" src={img} />
          
          <div className="flex-grow">
          <strong className="float-right font-black lg:text-2xl text-orange-400">${price}</strong>
            <h2 className="text-gray-900 title-font hero-text text-lg lg:text-2xl font-black mb-3">{title}</h2>
            
            <hr />
            <p className="text-gray-500 mt-2 italic">{desciption}</p>
          </div>
        </div>
      </div>          
   
  
  </>;
};

export default MyMenu;
