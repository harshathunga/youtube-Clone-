import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import Backdrop from "./components/Backdrop";
import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [sidebar, setsidebar] = useState(true);
  const toggle = () => {
    setsidebar((prevState) => !prevState);
  };
  return (
    <div className="App">

      {/* <Link to= "/search/">hello</Link> */}
      <Header open={toggle} />
      <Backdrop sidess={sidebar} closesidebar={toggle} />

      <Router>
        <Routes>
          <Route path="" element={<Sidebar side={sidebar} />} />
          <Route path="/search/:searchterm" element={<Search side={sidebar}P/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
