const Button = ({ children, onClick }) => {
  return (
    <button
      type = "button" 
      onClick={onClick}
      className="
        w-full
        bg-[#071074]
        text-white
        py-3
        rounded-xl
        font-medium
        hover:bg-blue-700
        transition
        cursor-pointer
      "
    >
      {children}
    </button>
  );
};

export default Button;