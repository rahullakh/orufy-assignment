import { useEffect, useState, useCallback } from "react";

import EmptyProducts from "../../components/product/EmptyProducts";
import AddProduct from "../../pages/products/AddProduct";
import ProductList from "../../components/product/ProductList";
import productIcon from "../../assets/icons/icon.svg";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  publishProduct,
} from "../../services/productServices";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modalMode, setModalMode] = useState(null); 


  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      setProducts(res?.data ?? []);
    } catch (error) {
      console.log("FETCH ERROR:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  const openCreateModal = () => {
    setModalMode("create");
    setEditProduct(null);
  };

  const handleEditClick = (product) => {
    setModalMode("edit");
    setEditProduct(product);
  };

  const handleCreateProduct = async (formData) => {
    try {
      const res = await createProduct(formData);

      if (res?.data) {
        setProducts((prev) => [...prev, res.data]);
      }

      closeModal();
    } catch (error) {
      console.log("CREATE ERROR:", error);
    }
  };


  const handleUpdateProduct = async (formData, id) => {
    try {
      const res = await updateProduct(id, formData);

      if (res?.data) {
        setProducts((prev) =>
          prev.map((item) =>
            item._id === id ? res.data : item
          )
        );
      }

      closeModal();
    } catch (error) {
      console.log("EDIT ERROR:", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log("DELETE ERROR:", error);
    }
  };


  const handlePublish = async (id) => {
    try {
      const res = await publishProduct(id);

      if (res?.data) {
        setProducts((prev) =>
          prev.map((item) =>
            item._id === id ? res.data : item
          )
        );
      }
    } catch (error) {
      console.log("PUBLISH ERROR:", error);
    }
  };


  const closeModal = () => {
    setModalMode(null);
    setEditProduct(null);
  };

  return (
    <div className="min-h-screen py-4 px-4">

      {!loading && products.length === 0 ? (
        <div className="flex items-center justify-center min-h-[70vh]">
          <EmptyProducts
            icon={<img src={productIcon} className="w-10 h-10" alt="icon" />}
            title="Feels a little empty over here..."
            lines={[
              "You can create products without connecting a store.",
              "You can add products anytime.",
            ]}
            buttonText="Add your Products"
            onClick={openCreateModal}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Products
            </h2>

            <button
              onClick={openCreateModal}
              className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-[#000FB4] to-[#4050FF] text-white rounded-lg"
            >
              + Add Products
            </button>
          </div>

          {loading ? (
            <p className="text-gray-500 text-center">Loading products...</p>
          ) : (
            <ProductList
              products={products}
              onDelete={handleDelete}
              onEdit={handleEditClick}
              onPublish={handlePublish}
            />
          )}
        </>
      )}

    
      {modalMode && (
        <AddProduct
          isOpen={true}
          onClose={closeModal}
          editData={modalMode === "edit" ? editProduct : null}
          onCreate={handleCreateProduct}
          onUpdate={handleUpdateProduct}
        />
      )}

    </div>
  );
};

export default Products;