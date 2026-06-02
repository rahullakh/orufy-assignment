import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Field from "../../components/common/Field";
import UploadImages from "./UploadImages";

const AddProduct = ({ isOpen, onClose, onCreate }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: "",
    type: "",
    stock: "",
    mrp: "",
    price: "",
    brand: "",
    returnPolicy: "",
    images: [],
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Please enter product name";
    if (!form.type) err.type = "Please enter product type";
    if (!form.stock) err.stock = "Please enter stock";
    if (!form.mrp) err.mrp = "Please enter mrp";
    if (!form.price) err.price = "Please enter price";
    if (!form.brand) err.brand = "Please enter brand";
    if (!form.returnPolicy) err.returnPolicy = "Please enter return policy";
    if (form.images.length === 0) err.images = "Please upload images";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

 const handleSubmit = () => {
  if (!validate()) return;

  const formData = new FormData();

  formData.append("name", form.name);
  formData.append("type", form.type);
  formData.append("stock", form.stock);
  formData.append("mrp", form.mrp);
  formData.append("price", form.price);
  formData.append("brand", form.brand);
  formData.append("returnPolicy", form.returnPolicy);

  form.images.forEach((img) => {
    formData.append("images", img.file);
  });

  onCreate(formData);

  setForm({
    name: "",
    type: "",
    stock: "",
    mrp: "",
    price: "",
    brand: "",
    returnPolicy: "",
    images: [],
  });
};

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3">

      <div className="bg-white w-full max-w-[480px] max-h-[90vh] overflow-y-auto rounded-2xl">

        <div className="flex justify-between p-4 sticky top-0 bg-white">
          <h2 className="font-semibold">Add Product</h2>
          <button onClick={onClose}>
            <IoClose />
          </button>
        </div>

        <div className="p-4 space-y-4">

          <Field label="Product Name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <p className="text-red-500 text-xs">{errors.name}</p>

          <Field label="Product Type" value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })} />
          <p className="text-red-500 text-xs">{errors.type}</p>

          <Field label="Quantity Stock" type="number" value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })} />

          <Field label="MRP" type="number" value={form.mrp}
            onChange={(e) => setForm({ ...form, mrp: e.target.value })} />

          <Field label="Selling Price" type="number" value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })} />

          <Field label="Brand Name" value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })} />

     
          <UploadImages
            form={form}
            setForm={setForm}
            errors={errors}
          />

          <Field label="Exchange or return eligibility" value={form.returnPolicy}
            onChange={(e) => setForm({ ...form, returnPolicy: e.target.value })} />

          <p className="text-red-500 text-xs">{errors.returnPolicy}</p>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gradient-to-r from-[#000FB4] to-[#4050FF] text-white rounded-lg"
          >
            Create
          </button>

        </div>
      </div>
    </div>
  );
};

export default AddProduct;