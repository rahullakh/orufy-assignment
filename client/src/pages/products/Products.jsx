import { useState } from "react";
import productIcon from "../../assets/icons/icon.svg";
import Button from "../../components/common/Button";
import AddProduct from "./AddProduct";

const Products = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6">
        <div className="w-full max-w-lg text-center">
          
     
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100">
              <img
                src={productIcon}
                alt="Product Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
          </div>

       
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Feels a little empty over here...
          </h2>

       
          <p className="text-sm sm:text-base text-gray-500 mb-2">
            You can create products without connecting a store.
          </p>

          <p className="text-sm sm:text-base text-gray-500 mb-8">
            You can add products to a store anytime.
          </p>

         
          <Button
            onClick={() => setShowModal(true)}
            className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-[#000FB4] to-[#4050FF] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            Add your Products
          </Button>
        </div>
      </div>

    
      <AddProduct
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Products;