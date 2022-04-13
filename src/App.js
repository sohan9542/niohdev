import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import Dashboard from "./pages/Dashboard";
import Diplodocus from "./pages/Diplodocus";
import Home from "./pages/Home";
import egg from "./assets/images/egg.png";
import egg2 from "./assets/images/egg2.png";
import Tregs from "./pages/Tregs";
import DinoCamp from "./pages/DinoCamp";
import { useState } from "react";
function App() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="App bg-black min-h-screen text-white ">
      <BrowserRouter>
        <Topbar setOpenSidebar={setOpenSidebar}/>
        <div className=" flex relative">
          <div
            className={
              openSidebar
                ? " hidden lg:block absolute lg:fixed top-0 left-0 z-50"
                : " lg:block fixed top-0 left-0 z-50 grid grid-cols-2"
            }
          >
            <Sidebar setOpenSidebar={setOpenSidebar}/>
            <div
            onClick={()=>setOpenSidebar(true)}
              className=" w-full h-full block lg:hidden"
              style={{ background: "rgba(0,0,0,0.5)" }}
            ></div>
          </div>
          <div className=" ml_20 w-full m-3 lg:m-0">
            <Routes>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route
                path="diplodocus"
                element={
                  <Diplodocus
                    color={true}
                    name="Diplodocus egg"
                    img={<img src={egg} alt="" />}
                  />
                }
              />
              <Route
                path="t-regs"
                element={
                  <Tregs
                    color={false}
                    name="Diplodocus egg"
                    img={<img src={egg2} alt="" />}
                  />
                }
              />
              <Route path="dino-camp" element={<DinoCamp />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
