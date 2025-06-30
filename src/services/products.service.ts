import products from '../data/products.json';
import type Product from '../interfaces/products.interface';

export default function getProducts(): Product[] {
console.log(products)
  const saved = localStorage.getItem('acc_products');

  if (saved) {
    return JSON.parse(saved);
  }

  localStorage.setItem('acc_products', JSON.stringify(products));
  return products;
}
