import { Product } from './Models/Product';

export const getProducts = (doCallback: (products: Product[]) => void) => {
    fetch('/api/products/get').then(response => {
            return response.json();
        }).then(data => {
            doCallback(data);
        });
};