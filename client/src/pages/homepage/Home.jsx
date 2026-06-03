import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-8 px-4">

        <NavLink
          to="published"
          className={({ isActive }) =>
            `relative py-4 text-sm font-medium transition group ${
              isActive ? "text-blue-600" : "text-gray-400 hover:text-blue-600"
            }`
          }
        >
          Published

         
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>

        <NavLink
          to="unpublished"
          className={({ isActive }) =>
            `relative py-4 text-sm font-medium transition group ${
              isActive ? "text-blue-600" : "text-gray-400 hover:text-blue-600"
            }`
          }
        >
          Unpublished

          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>

      </div>
    </div>
  );
};

export default Home;