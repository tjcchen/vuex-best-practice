const products = [
  { "id": 1, "title": "IPhone 12", "price": 6999, "inventory": 3 },
  { "id": 2, "title": "Huawei P30", "price": 2555, "inventory": 1 },
  { "id": 3, "title": "OPPO R17", "price": 1999, "inventory": 5 }
];

export default {
  getProducts: (callback) => {
    setTimeout(() => callback(products), 0);
  },
  buyProducts: (products, callback, errorCallback) => {
    setTimeout(() => {
      Math.random() > 0.5 ? callback() : errorCallback();
    }, 100);
  }
};