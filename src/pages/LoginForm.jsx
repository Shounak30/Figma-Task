import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";
import { AuthContext } from "../store/AuthProvider";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login clicked!!");
    login();
    navigate("/home");
  };

  return (
    <Fragment>
      {/* <NavbarLogin /> */}
      <div className="bg-gray-700 relative">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[50%]">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Forget password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
