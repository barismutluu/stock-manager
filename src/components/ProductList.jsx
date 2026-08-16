function ProductList({ products, onEditProduct, onDeleteProduct }) {
    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">
                Ürünler
            </h2>

            {products.length === 0 ? (
                <p className="text-gray-500">
                    Henüz ürün bulunmuyor.
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Ürün</th>
                            <th className="border p-2">Kategori</th>
                            <th className="border p-2">Stok</th>
                            <th className="border p-2">Fiyat</th>
                            <th className="border p-2">İşlemler</th>
                        </tr>
                        </thead>

                        <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="border p-2">
                                    {product.name}
                                </td>

                                <td className="border p-2">
                                    {product.category}
                                </td>

                                <td className="border p-2">
                                    {product.stock}
                                </td>

                                <td className="border p-2">
                                    {product.price} TL
                                </td>

                                <td className="border p-2">
                                    <button
                                        className="mr-2 rounded bg-yellow-500 px-3 py-1 text-white"
                                        onClick={() =>
                                            onEditProduct(product)
                                        }
                                    >
                                        Düzenle
                                    </button>

                                    <button
                                        className="rounded bg-red-500 px-3 py-1 text-white"
                                        onClick={() =>
                                            onDeleteProduct(product.id)
                                        }
                                    >
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ProductList;