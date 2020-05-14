import { Alert } from "react-native";
const Realm = require("realm");

const Product = {
  name: "Product",
  properties: {
    name: "string",
    description: "string",
    date: "int",
  },
};

const AddProductDB = (product) => {
  Realm.open({ schema: [Product] })
    .then((realm) => {
      try {
        realm.write(() => {
          realm.create("Product", {
            name: product.name,
            description: product.description,
            date: Date.now(),
          });
        });
      } catch (e) {
        console.log("Error adding new product", e);
      }
    })
    .catch((error) => {
      console.log("error opening REALM", error);
    });
};

const DeleteProductDB = (id) => {
  Realm.open({ schema: [Product] })
    .then((realm) => {
      realm.write(() => {
        let deletedProduct = realm.objects("Product").filtered("date =" + id);
        if (deletedProduct.length > 0) {
          realm.delete(deletedProduct);
          let prodcuts = realm.objects("Product");
        } else {
          alert("Product can't be found");
        }
      });
    })
    .catch((error) => {
      console.log("error opening REALM", error);
    });
};

const ProductsCountDB = () =>
  new Promise((resolve, reject) => {
    Realm.open({ schema: [Product] })
      .then((realm) => {
        let prodcuts = realm.objects("Product");
        resolve(prodcuts.length);
      })
      .catch((error) => {
        reject(error);
        console.log("error opening REALM", error);
      });
  });

const AllProductsDB = () =>
  new Promise((resolve, reject) => {
    Realm.open({ schema: [Product] })
      .then((realm) => {
        let prodcuts = realm.objects("Product");
        let sortedProducts = prodcuts.filtered("TRUEPREDICATE SORT(date DESC)");
        resolve(sortedProducts);
      })
      .catch((error) => {
        reject(error);
        console.log("error opening REALM", error);
      });
  });

export { AddProductDB, DeleteProductDB, ProductsCountDB, AllProductsDB };
