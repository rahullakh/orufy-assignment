import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaHome, FaExchangeAlt, FaBars, FaSearch } from "react-icons/fa";
import productIcon from "../../../assets/icons/Vector.svg";
const routes = [
  { path: "/home", name: "Home", icon: <FaHome /> },
  { path: "products", name: "Products", icon: <FaExchangeAlt /> },
];

const MOBILE_BREAKPOINT = 768;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(isCurrentlyMobile);

      if (isCurrentlyMobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inpAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      padding: 0,
      transition: { duration: 0.2 },
    },
    show: {
      width: "140px",
      opacity: 1,
      padding: "5px 10px",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      animate={{ width: isOpen ? "250px" : "70px" }}
      className="h-screen border-r flex flex-col bg-[#1D222B] text-[] border border-[#D1D5DB]"
    >
     <div className="flex items-center p-3 text-white">


  <AnimatePresence>
    {isOpen && (
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        className="text-xl font-bold whitespace-nowrap"
      >
        Productr
      </motion.h1>
    )}
  </AnimatePresence>


  <img
    src={productIcon}
    alt="Product Icon"
    className="w-6 h-6 object-contain ml-2"
  />


  <div className="ml-auto cursor-pointer">
    <FaBars size={18} onClick={toggle} />
  </div>

     </div>

      <div
        className={`flex items-center bg-[#2F343D] mx-2 font-semibold my-3  py-1 pl-2 rounded-md shadow  transition-all ${
          !isOpen ? "justify-center" : ""
        }`}
      >
        <FaSearch className="text-gray-500  dark:text-gray-300" />

        <AnimatePresence>
          {isOpen && (
            <motion.input
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inpAnimation}
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent text-sm  text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
            />
          )}
        </AnimatePresence>
      </div>
      <div className="border border-b-[#6B768380] ">
      </div>

      <div className="flex flex-col px-2 ">
        {routes.map((route) => (
          <NavLink
            key={route.name}
            to={route.path}
            className={({ isActive }) =>
              `flex items-center p-2 my-1 rounded-md transition-all duration-200
        ${isActive ? " text-white" : "text-gray-500  hover:text-white "}
        ${!isOpen ? "justify-center" : ""}`
            }
          >
            <div className="text-lg">{route.icon}</div>

            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="ml-3 whitespace-nowrap"
                >
                  {route.name}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;
