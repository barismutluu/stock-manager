import { useState } from "react";
import { createProduct } from "../interfaces/product";

function ProductForm({ onAddProduct, onUpdateProduct, editingProduct }) {
    const [name, setName] = useState(
        editingProduct ? editingProduct.name : ""
    );
    const [category, setCategory] = useState(
        editingProduct ? editingProduct.category : ""
    );
    const [stock, setStock] = useState(
        editingProduct ? editingProduct.stock : ""
    );
    const [price, setPrice] = useState(
        editingProduct ? editingProduct.price : ""
    );

    function handleSubmit(event) {
        event.preventDefault();

        if (editingProduct) {
            const product = {
                id: editingProduct.id,
                name: name,
                category: category,
                stock: Number(stock),
                price: Number(price)
            };

            onUpdateProduct(product);
        } else {
            const product = createProduct(
                Date.now(),
                name,
                category,
                Number(stock),
                Number(price)
            );

            onAddProduct(product);
        }

        setName("");
        setCategory("");
        setStock("");
        setPrice("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg border bg-white p-5"
        >
            <h2 className="mb-4 text-xl font-semibold">
                {editingProduct ? "Ürün Güncelle" : "Ürün Ekle"}
            </h2>

            <div className="grid gap-3 md:grid-cols-2">
                <div>
                    <label className="mb-1 block">
                        Ürün Adı
                    </label>

                    <input
                        className="w-full rounded border p-2"
                        type="text"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                    />
                </div>

                <div>
                    <label className="mb-1 block">
                        Kategori
                    </label>

                    <input
                        className="w-full rounded border p-2"
                        type="text"
                        value={category}
                        onChange={(event) =>
                            setCategory(event.target.value)
                        }
                    />
                </div>

                <div>
                    <label className="mb-1 block">
                        Stok
                    </label>

                    <input
                        className="w-full rounded border p-2"
                        type="number"
                        value={stock}
                        onChange={(event) =>
                            setStock(event.target.value)
                        }
                    />
                </div>

                <div>
                    <label className="mb-1 block">
                        Fiyat
                    </label>

                    <input
                        className="w-full rounded border p-2"
                        type="number"
                        value={price}
                        onChange={(event) =>
                            setPrice(event.target.value)
                        }
                    />
                </div>
            </div>

            <button
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
                type="submit"
            >
                {editingProduct ? "Güncelle" : "Ürün Ekle"}
            </button>
        </form>
    );
}

export default ProductForm;