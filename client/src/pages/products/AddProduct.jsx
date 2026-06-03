import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Field from "../../components/common/Field";
import UploadImages from "../../pages/products/UploadImages";

const initialForm = {
  name: "",
  type: "",
  stock: "",
  mrp: "",
  price: "",
  brand: "",
  returnPolicy: "",
  images: [],
};

const AddProduct = ({
  isOpen,
  onClose,
  onCreate,
  onUpdate,
  editData,
}) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name || "",
        type: editData.type || "",
        stock: editData.stock ?? "",
        mrp: editData.mrp ?? "",
        price: editData.price ?? "",
        brand: editData.brand || "",
        returnPolicy: editData.returnPolicy || "",
        images: editData.images || [],
      });
    } else {
      setForm(initialForm);
    }
  }, [editData]);

  
  const validate = () => {
    const err = {};

    if (!form.name.trim()) err.name = "Please enter product name";
    if (!form.type.trim()) err.type = "Please enter product type";
    if (form.stock === "") err.stock = "Please enter stock";
    if (form.mrp === "") err.mrp = "Please enter mrp";
    if (form.price === "") err.price = "Please enter price";
    if (!form.brand.trim()) err.brand = "Please enter brand";
    if (!form.returnPolicy.trim())
      err.returnPolicy = "Please enter return policy";
    if (!form.images.length) err.images = "Please upload images";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

 
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("type", form.type);
      formData.append("stock", form.stock);
      formData.append("mrp", form.mrp);
      formData.append("price", form.price);
      formData.append("brand", form.brand);
      formData.append("returnPolicy", form.returnPolicy);

      form.images.forEach((img) => {
        if (img?.file) {
          formData.append("images", img.file);
        }
      });

      if (editData?._id) {
        await onUpdate(formData, editData._id);
      } else {
        await onCreate(formData);
      }

     
      setForm(initialForm);
      setErrors({});
      onClose();
    } catch (error) {
      console.log("SUBMIT ERROR:", error);
    }
  };

 
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3">

      <div className="bg-white w-full max-w-[480px] max-h-[90vh] overflow-y-auto rounded-2xl">

     
        <div className="flex justify-between p-4 sticky top-0 bg-white">
          <h2 className="font-semibold">
            {editData ? "Edit Product" : "Add Product"}
          </h2>

          <button onClick={onClose}>
            <IoClose />
          </button>
        </div>

     
        <div className="p-4 space-y-4">

          <Field
            label="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <p className="text-red-500 text-xs">{errors.name}</p>

          <Field
            label="Product Type"
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          />
          <p className="text-red-500 text-xs">{errors.type}</p>

          <Field
            label="Quantity Stock"
            type="number"
            value={form.stock}
            onChange={(e) =>
              setForm({ ...form, stock: e.target.value })
            }
          />
          <p className="text-red-500 text-xs">{errors.stock}</p>

          <Field
            label="MRP"
            type="number"
            value={form.mrp}
            onChange={(e) =>
              setForm({ ...form, mrp: e.target.value })
            }
          />
          <p className="text-red-500 text-xs">{errors.mrp}</p>

          <Field
            label="Selling Price"
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />
          <p className="text-red-500 text-xs">{errors.price}</p>

          <Field
            label="Brand Name"
            value={form.brand}
            onChange={(e) =>
              setForm({ ...form, brand: e.target.value })
            }
          />
          <p className="text-red-500 text-xs">{errors.brand}</p>

          <UploadImages
            form={form}
            setForm={setForm}
            errors={errors}
          />

          <Field
            label="Exchange or return eligibility"
            value={form.returnPolicy}
            onChange={(e) =>
              setForm({ ...form, returnPolicy: e.target.value })
            }
          />
          <p className="text-red-500 text-xs">
            {errors.returnPolicy}
          </p>

         
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gradient-to-r from-[#000FB4] to-[#4050FF] text-white rounded-lg"
          >
            {editData ? "Update Product" : "Create Product"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default AddProduct;