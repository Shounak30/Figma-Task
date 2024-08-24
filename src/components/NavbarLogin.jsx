import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";

const NavbarLogin = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const loginButton = () => {
    navigate("/loginform");
  };

  const logoutButton = () => {
    logout();
    navigate("/loginform");
  };

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="flex justify-end p-6">
      <button
        className="border-slate-900 bg-slate-600 px-5 text-white py-3 hover:bg-slate-400 rounded-md font-bold"
        onClick={isAuthenticated ? logoutButton : loginButton}
      >
        {isAuthenticated ? "Logout" : "login"}
      </button>
    </div>
  );
};

export default NavbarLogin;
