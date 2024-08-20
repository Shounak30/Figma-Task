import React, { memo } from "react";
import { icons, images } from "../utils/constant";
import HeaderIcon from "./HeaderIcon";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between px-7">
        <div className="w-[70%] px-7">
          <SearchBar />
        </div>
        <div className="flex items-center gap-5 m-2">
          <HeaderIcon
            count={8}
            bgColor={"bg-blue-200"}
            icon={icons.bellIcon}
            iconColor={"#428af5"}
            dotColor={"bg-blue-400"}
          />
          <HeaderIcon
            count={10}
            bgColor={"bg-green-200"}
            icon={icons.messageIcon}
            iconColor={"#03911d"}
            dotColor={"bg-green-400"}
          />
          <HeaderIcon
            count={10}
            bgColor={"bg-purple-200"}
            icon={icons.trashIcon}
            iconColor={"#8442f5"}
            dotColor={"bg-purple-400"}
          />
          <HeaderIcon
            count={10}
            bgColor={"bg-red-200"}
            icon={icons.settingsIcon}
            iconColor={"#f55d42"}
            dotColor={"bg-red-400"}
          />
        </div>
        <div className="flex gap-3 border-l-2 px-2 m-2 items-center">
          <p>Hello, Rasa</p>
          <img
            class="w-12 h-12 rounded-full"
            src={images.profileImage}
            height={250}
            width={250}
            alt="Rounded avatar"
          />
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
