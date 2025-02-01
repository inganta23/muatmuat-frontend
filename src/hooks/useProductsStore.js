import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [
    {
      id: 1,
      name: "Soft Drink",
      stock: 4,
      price: 21,
    },
    {
      id: 2,
      name: "Fried rice",
      stock: 5,
      price: 12,
    },
    {
      id: 3,
      name: "Chicken",
      stock: 1,
      price: 45,
    },
    {
      id: 4,
      name: "Salted Beef",
      stock: 9,
      price: 30,
    },
    {
      id: 5,
      name: "Egg",
      stock: 3,
      price: 15,
    },
  ],
  setProducts: (newProducts) => set({ products: newProducts }),
}));

export default useProductsStore;
