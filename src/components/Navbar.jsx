import React, { memo, useContext, useState } from "react";
import { icons, images } from "../utils/constant";
import HeaderIcon from "./HeaderIcon";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const logoutButton = () => {
    logout();
    navigate("/loginform");
  };
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
            className="w-12 h-12 rounded-full"
            src={images.profileImage}
            height={250}
            width={250}
            alt="Rounded avatar"
          />
        </div>
        <div>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={handleToggle}
              >
                Options
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md ${
                !toggle ? `hidden` : undefined
              } bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                {/* <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                 tabIndex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                 tabIndex="-1"
                  id="menu-item-2"
                >
                  License
                </a> */}
                <form method="POST" action="/loginform" role="none">
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                    onClick={logoutButton}
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
