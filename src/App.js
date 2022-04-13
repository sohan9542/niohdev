import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import Dashboard from "./pages/Dashboard";
import Diplodocus from "./pages/Diplodocus";
import Home from "./pages/Home";
import egg from "./assets/images/egg.png"
import egg2 from "./assets/images/egg2.png"
import Tregs from "./pages/Tregs";
function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <BrowserRouter>
        <Topbar />
        <div className=" flex relative">
          <div className=" hidden lg:block fixed top-0 left-0 z-20">
            <Sidebar />
          </div>
          <div className=" ml_20 w-full">
            <Routes>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="diplodocus" element={<Diplodocus color={true} name="Diplodocus egg" img={ <img src={egg} alt="" />} />} />
              <Route path="t-regs" element={<Tregs color={false} name="Diplodocus egg" img={ <img src={egg2} alt="" />} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
