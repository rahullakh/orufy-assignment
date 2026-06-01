

import { useState } from "react";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import productIcon from "../../../assets/icons/Vector.svg";
const Navbar = ({route}) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

    const getTitle = () => {
    if (route.includes("products")) return "Products";
    return "Dashboard";
  };
   const getIcon = () => {
    if (route.includes("products")) return productIcon;
    return null;
  };

  return (
    <div className="h-14 w-full flex items-center justify-between  border border-[#D1D5DB] px-4 bg-white dark:bg-gray-900 border-b">

<div className="flex items-center gap-2">
          {getIcon() && (
        <img src={getIcon()} className="w-5 h-5 mr-2" />
      )}

      <h1 className="text-lg font-bold">
        {getTitle()}
      </h1>
     </div>
      <div className="flex items-center gap-2">

        <input
          type="file"
          id="profileUpload"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />

        <label
          htmlFor="profileUpload"
          className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >

   
          {profileImage ? (
            <img
              src={profileImage}
              alt="profile"
              className="w-8 h-8 rounded-full object-cover border"
            />
          ) : (
            <FaUserCircle className="w-8 h-8 text-gray-500" />
          )}

          <FaChevronDown className="text-gray-500 text-xs mt-1" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;