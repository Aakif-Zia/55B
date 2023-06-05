import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
