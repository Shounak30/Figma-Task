import React, { memo } from "react";
import { icons } from "../utils/constant";

const DashboardCards = ({ title, count, image, percent, stock }) => {
  return (
    <div className="flex  gap-7 border-2 lg:w-1/4 md:w-1/2 w-full items-center py-9 px-6 shadow-lg rounded-lg">
      <div className="bg-green-100 px-4 py-5 rounded-full">
        <img height={43} width={58} src={image} />
      </div>
      <div className="flex flex-col gap-2 justify-start">
        <p className="text-4xl font-bold">{count}</p>
        <p>{title}</p>
        <div className="flex items-center gap-3">
          <div
            className={`${
              stock ? "bg-green-100" : "bg-orange-100"
            } p-1 rounded-full`}
          >
            <img
              height={10}
              width={10}
              src={stock ? icons.upArrow : icons.downArrow}
            />
          </div>
          <p>{percent}% (30 days)</p>
        </div>
      </div>
    </div>
  );
};

export default memo(DashboardCards);
