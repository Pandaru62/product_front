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

export function addProduct(product : Omit<ProductInterface, "id">): ProductInterface[] {
    console.log("🚀 ~ addProduct ~ product:", product)
    const currentProducts = getProducts();
    const productWithId : ProductInterface = {...product, id: currentProducts.length + 1}
    const updatedList = [...currentProducts, productWithId]
    localStorage.setItem('acc_products', JSON.stringify(updatedList));
    return updatedList;
}

export function editProduct(id: number, product : Omit<ProductInterface, "id">): ProductInterface[] {
    console.log("🚀 ~ editProduct ~ id:", id)
    console.log("🚀 ~ editProduct ~ product:", product)
    const updatedProducts = getProducts().map(p => p.id === id ? {...product, id: id} : p);
    localStorage.setItem('acc_products', JSON.stringify(updatedProducts));
    return updatedProducts
    
}