import { Product } from './Models/Product';

export const getProducts = (doCallback: (products: Product[]) => void) => {
    fetch('/api/products/get')
        .then(response => response.json())
        .then(data => {
            doCallback(data);
        });
};

export const deleteProduct = (name: String, doCallback: (products: Product[]) => void) => {
    fetch(`/api/products/delete/${name}`, {
        method: 'DELETE'
    }).then(response => response.json())
      .then(data => {
        doCallback(data);
    });
};

export const addProduct = (product: Product, doCallback: (products: Product[]) => void) => {
    fetch('/api/products/add', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          doCallback(data);
    });
};