import type ProductInterface from "../interfaces/products.interface";

export default function referenceAlreadyExists(reference: string, products: ProductInterface[], currentId?: number): boolean {
  return products.some(p => p.reference === reference && p.id !== currentId);
}