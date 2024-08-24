import { Fragment, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CalenderView from "./components/CalenderView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div className="App">
        <Sidebar />
        <div className="flex w-auto ml-64 py-1 ">
          <Navbar />
        </div>
        <div className="flex w-auto ml-64 mt-8">
          <Dashboard />
          <CalenderView />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
