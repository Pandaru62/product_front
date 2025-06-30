import products from '../data/products.json';
import type ProductInterface  from '../interfaces/products.interface';

export default function getProducts(): ProductInterface[] {
  const saved = localStorage.getItem('acc_products');

  if (saved) {
    return JSON.parse(saved);
  }

  localStorage.setItem('acc_products', JSON.stringify(products));
  return products;
}

export function addProduct(product : Omit<ProductInterface, "id">): ProductInterface {
    console.log("🚀 ~ addProduct ~ product:", product)
    const currentProducts = getProducts();
    const productWithId : ProductInterface = {...product, id: currentProducts.length + 1}
    localStorage.setItem('acc_products', JSON.stringify([...currentProducts, productWithId]));
    return productWithId;
}

export function editProduct(id: number, product : Omit<ProductInterface, "id">): ProductInterface[] {
    console.log("🚀 ~ editProduct ~ id:", id)
    console.log("🚀 ~ editProduct ~ product:", product)
    const currentProducts = getProducts().filter((product) => product.id !== id)
    const updatedProducts = [...currentProducts, {...product, id: id}].sort((a, b) => a.id - b.id)
    localStorage.setItem('acc_products', JSON.stringify(updatedProducts));
    return updatedProducts
    
}