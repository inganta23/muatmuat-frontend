"use client";

import { useParams } from "next/navigation";
import useProductsStore from "@/hooks/useProductsStore";
import { useEffect, useState } from "react";
import Form from "@/components/shared/Form";
import { isNumeric } from "@/helper";

const page = () => {
  const { id } = useParams();

  const products = useProductsStore((state) => state.products);
  const setProducts = useProductsStore((state) => state.setProducts);

  const [selectedProduct, setSelectedProduct] = useState({});

  const handleProductChange = (e) => {
    if (
      (e.target.name === "price" || e.target.name === "stock") &&
      e.target.value !== "" &&
      !isNumeric(e.target.value)
    )
      return;
    setSelectedProduct({
      ...selectedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductReset = () => {
    if (products?.length > 0 && Number(id)) {
      const tempProduct = products?.filter(
        (product) => product.id === Number(id)
      );

      setSelectedProduct(tempProduct.length === 1 ? tempProduct[0] : {});
    }
  };

  const handleProductSubmit = () => {
    if (Number(id)) {
      const tempProducts = products?.filter(
        (product) => product.id !== Number(id)
      );

      setProducts([selectedProduct, ...tempProducts]);

      alert("Product successfully edited");
    }
  };

  useEffect(() => {
    handleProductReset();
  }, [products, id]);

  return (
    <div className="px-4 mt-10 flex flex-col items-center gap-6">
      <h1 className="text-black text-xl">Detail Product</h1>
      <Form
        selectedProduct={selectedProduct}
        handleProductChange={(e) => handleProductChange(e)}
        handleProductReset={handleProductReset}
        handleProductSubmit={handleProductSubmit}
      />
    </div>
  );
};

export default page;
