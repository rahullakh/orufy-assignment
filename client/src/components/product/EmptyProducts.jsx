import Button from "../common/Button";
const EmptyProducts = ({ icon, title, lines = [], buttonText, onClick }) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4 text-center">
      <div className="max-w-lg w-full">

        
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
            {icon}
          </div>
        </div>

      
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
          {title}
        </h2>

    
        {lines.map((line, i) => (
          <p key={i} className="text-sm sm:text-base text-gray-500 mb-2">
            {line}
          </p>
        ))}

       
        {buttonText && (
          <Button
            onClick={onClick}
            className="mt-6 w-full sm:w-auto bg-gradient-to-r from-[#000FB4] to-[#4050FF] text-white px-6 py-3 rounded-xl font-medium"
          >
            {buttonText}
          </Button>
        )}
       
      </div>
    </div>
  );
};

export default EmptyProducts;