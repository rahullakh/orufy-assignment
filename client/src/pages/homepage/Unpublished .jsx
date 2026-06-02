import { useEffect, useState } from "react";
import ProductList from "../../components/product/ProductList";
import EmptyProducts from "../../components/product/EmptyProducts";
import emptyIcon from "../../assets/icons/icon.svg";

import {
  getProducts,
  publishProduct,
  deleteProduct,
  updateProduct,
} from "../../services/productServices";

const Unpublished = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await getProducts();

      const unpublishedProducts = res.data.filter(
        (product) => !product.isPublished
      );

      setProducts(unpublishedProducts);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  
  const handlePublish = async (id) => {
    try {
      await publishProduct(id);

     
      setProducts((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.log("PUBLISH ERROR:", error);
    }
  };

 
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);

      setProducts((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.log("DELETE ERROR:", error);
    }
  };

  
  const handleEdit = async (product) => {
    try {
      const res = await updateProduct(
        product._id,
        product
      );

      setProducts((prev) =>
        prev.map((item) =>
          item._id === product._id ? res.data : item
        )
      );
    } catch (error) {
      console.log("EDIT ERROR:", error);
    }
  };

 
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">

      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">
          Unpublished Products
        </h2>
      </div>

      
      {products.length === 0 ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          <EmptyProducts
            icon={
              <img
                src={emptyIcon}
                alt="No Products"
                className="w-12 h-12"
              />
            }
            title="No Unpublished Products"
            lines={[
              "Your unpublished products will appear here",
              "Create a product to get started",
            ]}
          />
        </div>
      ) : (
        <ProductList
          products={products}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onPublish={handlePublish}
        />
      )}
    </div>
  );
};

export default Unpublished;