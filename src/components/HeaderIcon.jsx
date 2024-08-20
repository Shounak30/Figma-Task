import React, { memo } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const HeaderIcon = ({ count, icon, bgColor, iconColor, dotColor }) => {
  return (
    <button
      type="button"
      className={`relative inline-flex items-center p-2
       text-sm font-medium text-center text-white ${bgColor} rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300`}
    >
      <img src={icon} width={24.5} height={24.5} color={iconColor} />
      <div
        className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white ${dotColor} border-2 border-white rounded-full -top-2 -end-2 `}
      >
        {count}
      </div>
    </button>
  );
};

export default memo(HeaderIcon);
