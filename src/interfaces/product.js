// Yeni ürün oluşturmak için kullanılan yardımcı fonksiyon.
export const createProduct = (id, name, category, stock, price) => {
    return {
        id,
        name,
        category,
        stock,
        price
    };
};