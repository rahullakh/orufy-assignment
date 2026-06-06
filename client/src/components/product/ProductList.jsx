import ProductCard from "./ProductCard";

const ProductList = ({ products, onEdit, onDelete, onPublish }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
            onPublish={onPublish}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
