import React from "react";
import Item from "./Item";

const Row = ({ title, items }) => 
{
  return (
    <div className="my-8" style={{ paddingLeft: "50px" }}>
      <h2 className="text-white text-2xl font-bold " style={{ paddingLeft: "11px" }}>{title}</h2>
      <div className="flex flex-nowrap overflow-x-auto">
        {items.map((item) => (
          <div key={item.id} className="mr-16">
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;