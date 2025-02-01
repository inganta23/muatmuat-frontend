"use client";

import Card from "@/components/shared/Card";
import { useEffect, useState } from "react";
import useProductsStore from "@/hooks/useProductsStore";
import Form from "@/components/shared/Form";
import Search from "@/components/shared/Search";
import Sort from "@/components/shared/Sort";
import ConfirmationDialog from "@/components/shared/ConfirmationDialog";
import { isNumeric } from "@/helper";

export default function Home() {
  const products = useProductsStore((state) => state.products);
  const setProducts = useProductsStore((state) => state.setProducts);

  const [isAddProduct, setIsAddProduct] = useState(false);
  const [product, setProduct] = useState({});
  const [shownProducts, setShownProducts] = useState([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDeleteId, setProductToDeleteId] = useState(0);

  const handleProductChange = (e) => {
    if (
      (e.target.name === "price" || e.target.name === "stock") &&
      e.target.value !== "" &&
      !isNumeric(e.target.value)
    )
      return;
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleProductReset = () => {
    setProduct({});
  };

  const handleProductSubmit = () => {
    const currId = Number(products[products.length - 1]?.id);
    setProducts([...products, { id: currId + 1, ...product }]);
    alert("Product successfully added");
  };

  const handleDeleteProduct = () => {
    const excludeProduct = products?.filter(
      (product) => Number(product.id) !== Number(productToDeleteId)
    );
    setProducts([...excludeProduct]);
    setProductToDeleteId(0);
    setIsDeleteDialogOpen(false);
  };

  const handleSearch = (search) => {
    const filteredProducts = products?.filter(
      (product) =>
        product?.name?.toLowerCase().startsWith(search.toLowerCase()) === true
    );
    setShownProducts(filteredProducts);
  };

  useEffect(() => {
    setShownProducts(products);
  }, [products]);

  const handleSort = (sort) => {
    let sortedProducts = JSON.parse(JSON.stringify(shownProducts));
    let tempKey;
    for (const key in sort) {
      tempKey = key;
      if (sort[key] === "asc") {
        sortedProducts = sortedProducts?.sort((a, b) => {
          return Number(a[key]) - Number(b[key]);
        });
      } else {
        sortedProducts = sortedProducts?.sort((a, b) => {
          return Number(b[key]) - Number(a[key]);
        });
      }
    }
    setShownProducts(sortedProducts);
  };

  return (
    <div className="px-4 mt-6 w-full">
      <div className="my-6">
        <Search onSearch={(search) => handleSearch(search)} />
      </div>
      <Sort handleSort={(sort) => handleSort(sort)} />
      <div className="w-fit mx-auto">
        <button
          className={`py-2 px-4 opacity-90 hover:opacity-100 rounded-md text-white ${
            isAddProduct ? "bg-red-800" : "bg-green-800"
          }`}
          onClick={() => {
            setIsAddProduct(!isAddProduct);
          }}
        >
          {isAddProduct ? "Close Form" : "Add Product"}
        </button>
      </div>
      {isAddProduct ? (
        <div className="mx-auto w-fit my-6">
          <Form
            selectedProduct={product}
            handleProductChange={(e) => handleProductChange(e)}
            handleProductReset={handleProductReset}
            handleProductSubmit={handleProductSubmit}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-wrap gap-4 items-center justify-center mt-6">
        {shownProducts?.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            stock={product.stock}
            price={product.price}
            id={product.id}
            handleDelete={() => {
              setIsDeleteDialogOpen(true);
              setProductToDeleteId(product.id);
            }}
          />
        ))}
      </div>
      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={closeDeleteDialog}
        onConfirm={handleDeleteProduct}
        title="Delete Product"
        message={`Are you sure you want to delete this item? This action cannot be undone.`}
      />
    </div>
  );
}
