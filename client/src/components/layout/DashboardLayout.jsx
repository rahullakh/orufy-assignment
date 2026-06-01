import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/ui/navbar/Navbar";
import Sidebar from "../ui/sidebar/Sidebar";


const DashboardLayout = () => {
  
  const location = useLocation();
  return (
    <div className="flex h-screen overflow-hidden bg-[#FFFFFF]">
      
      <Sidebar />

      <div className="flex flex-col flex-1">
        
        <Navbar route={location.pathname} />

        
       <main className="">
      <Outlet />
    </main>

      </div>
    </div>
  );
};

export default DashboardLayout;