import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";

const ProductCard = ({ product, onEdit, onDelete, onPublish }) => {
  console.log(product);

 
  const imageSrc =
    product.image && product.image !== ""
      ? product.image
      : product.images && product.images.length > 0
      ? product.images[0]
      : null;

  return (
    <div className="border rounded-xl shadow-sm bg-white p-4 flex flex-col h-full">

    
      <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img
            src={
              imageSrc.startsWith("http")
                ? imageSrc
                : `http://localhost:5000/uploads/${imageSrc}`
            }
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        )}
      </div>

  
      <h2 className="font-semibold text-lg mb-2 text-gray-800 break-words">
        {product.name}
      </h2>

  
      <div className="text-sm text-gray-600 space-y-1 flex-1">

        <p className="flex justify-between">
          <span className="font-medium">Type:</span>
          <span className="font-semibold">{product.type}</span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Stock:</span>
          <span className="font-semibold">{product.stock}</span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">MRP:</span>
          <span className="font-semibold">₹{product.mrp}</span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Price:</span>
          <span className="font-semibold">₹{product.price}</span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Brand:</span>
          <span className="font-semibold">{product.brand}</span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Images:</span>
          <span className="font-semibold">
            {product.images?.length || (product.image ? 1 : 0)}
          </span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Exchange:</span>
          <span className="font-semibold">
            {product.returnPolicy || "No"}
          </span>
        </p>

      </div>

      <div className="flex justify-between gap-2 mt-4">

       <button
  onClick={() => onPublish(product._id)}
  className={`flex items-center gap-1 font-semibold px-4 py-2 text-sm text-white rounded-lg transition-all ${
    product.isPublished
      ? "bg-gradient-to-r from-[#52D407] to-[#37C100]"
      : "bg-gradient-to-r from-[#000FB4] to-[#4050FF]"
  }`}
>
  <FaUpload />
  {product.isPublished ? "Unpublish" : "Publish"}
</button>

        <button
          onClick={() => onEdit?.(product)}
          className="flex items-center gap-1 font-semibold px-4 py-2 text-sm bg-[#ffff] border border-[#344054] text-gray-800 rounded-lg hover:opacity-90 transition"
        >
          <FaEdit /> Edit
        </button>

        <button
          onClick={() => onDelete?.(product._id)}
          className="flex items-center font-semibold gap-1 px-3 py-2 text-sm border border-[#cccdd1]  text-gray-400 rounded-lg hover:opacity-90 transition"
        >
          <FaTrash /> 
        </button>

      </div>

    </div>
  );
};

export default ProductCard;