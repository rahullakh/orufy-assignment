import { IoClose } from "react-icons/io5";
import Field from "../../components/common/Field";

const AddProduct = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[472px] h-full  overflow-y-auto">

  
        <div className="flex items-center justify-between  p-4 sticky top-0 bg-white">
          <h2 className="text-lg text-gray-700 font-semibold">Add Product</h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <IoClose size={22} />
          </button>
        </div>

    
        <div className="p-4 space-y-4">

          <Field label="Product Name" />
          <Field label="Product Type" />
          <Field label="Quantity Stock" type="number" />
          <Field label="MRP" type="number" />
          <Field label="Selling Price" type="number" />
          <Field label="Brand Name" />

      
          <div>
            <label className="block mb-2 text-sm font-medium">
              Upload Product Images
            </label>

            <div className="border-2 border-dashed rounded-xl p-5 text-center">
              <p className="text-gray-500 text-sm mb-3">
                Enter Description
              </p>

              <input type="file" id="productImage" className="hidden" />

              <label
                htmlFor="productImage"
                className="inline-block px-4 py-2 bg-gray-100 rounded-lg cursor-pointer text-sm"
              >
                Browse
              </label>
            </div>
          </div>

          <Field label="Exchange or Return Eligibility" />

         
          <div className="p-4 text-end">
  <button className="px-6 cursor-pointer py-3 rounded-lg text-white bg-gradient-to-r from-[#000FB4] to-[#4050FF]">
    Create
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default AddProduct;


