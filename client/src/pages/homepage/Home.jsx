import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="border-b border-gray-200">

      <div className="flex gap-8 px-2">

 
        <NavLink
          to="published"
          className={({ isActive }) =>
            `relative py-4 text-sm font-medium transition ${
              isActive ? "text-blue-600" : "text-gray-400 hover:text-gray-600"
            }`
          }
        >
          Published

          <span
            className={({ isActive }) => ""}
          />
        </NavLink>

        <NavLink
          to="unpublished"
          className={({ isActive }) =>
            `relative py-4 text-sm font-medium transition ${
              isActive ? "text-blue-600" : "text-gray-400 hover:text-gray-600"
            }`
          }
        >
          Unpublished
        </NavLink>

      </div>
    </div>
  );
};

export default Home;