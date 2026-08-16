import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function StockManager() {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("products");

        return savedProducts ? JSON.parse(savedProducts) : [];
    });

    const [editingProduct, setEditingProduct] = useState(null);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const updateProduct = (updatedProduct) => {
        setProducts(
            products.map((product) =>
                product.id === updatedProduct.id
                    ? updatedProduct
                    : product
            )
        );

        setEditingProduct(null);
    };

    const deleteProduct = (productId) => {
        setProducts(
            products.filter((product) => product.id !== productId)
        );
    };

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-5xl">

                <h1 className="mb-8 text-3xl font-bold text-gray-800">
                    Stock Manager
                </h1>

                <div className="mb-6 rounded-lg bg-white p-6 shadow">
                    <ProductForm
                        onAddProduct={addProduct}
                        onUpdateProduct={updateProduct}
                        editingProduct={editingProduct}
                    />
                </div>

                <div className="rounded-lg bg-white p-6 shadow">
                    <ProductList
                        products={products}
                        onEditProduct={setEditingProduct}
                        onDeleteProduct={deleteProduct}
                    />
                </div>

                <p className="mt-4 text-gray-600">
                    Toplam ürün: {products.length}
                </p>

            </div>
        </div>
    );
}

export default StockManager;