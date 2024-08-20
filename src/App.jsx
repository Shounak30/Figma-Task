import { Fragment, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Sidebar />
      <div className="flex w-auto ml-64 py-1 ">
        <Navbar />
      </div>
      <div className="flex w-auto ml-64 mt-8">
        <Dashboard />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
