/** @format */

import React from "react";

const ProductStore = [
  {
    id: "1",
    title: "Coffee",
    price: 200,
    img: "https://images.unsplash.com/photo-1522992319-0365e5f11656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60/100px180",
  },
  {
    id: "2",
    title: "Tea",
    price: 100,
    img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60/100px180",
  },
  {
    id: "3",
    title: "Kullhad",
    price: 70,
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60/100px180",
  },
  {
    id: "4",
    title: "Cappi",
    price: 160,
    img: "https://images.unsplash.com/photo-1504382103100-db7e92322d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60/100px180",
  },
  {
    id: "5",
    title: "Choclate",
    price: 190,
    img: "https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60/100px180",
  },
  {
    id: "6",
    title: "Hot-Choclate",
    price: 250,
    img: "https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60/100px180",
  },
];

export function getProductData(id) {
  let productData = ProductStore.find((product) => product.id === id);
  if (productData == undefined) {
    console.log("product does not exist for id", id);
    return undefined;
  }
  return productData;
}

export default ProductStore;
//This is dummy 