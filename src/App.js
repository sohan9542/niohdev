import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <BrowserRouter>
      <Topbar/>
        <div className=" flex relative">
          <div className=" hidden lg:block fixed top-0 left-0 z-20">
            <Sidebar />
          </div>
        <div className=" ml_20">
        <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
