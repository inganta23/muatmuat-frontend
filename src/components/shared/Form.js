import React from "react";

const Form = ({
  selectedProduct,
  handleProductChange,
  handleProductReset,
  handleProductSubmit,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-6 w-fit">
      <div className="flex sm:w-[450px] flex-wrap justify-between gap-y-5">
        <div className="flex flex-col w-fit">
          <label className="text-black">Name</label>
          <input
            type="text"
            name="name"
            value={selectedProduct?.name || ""}
            placeholder="Enter product's name"
            onChange={handleProductChange}
            className="text-black border-2 p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col w-fit">
          <label className="text-black">Stock</label>
          <input
            type="text"
            name="stock"
            value={selectedProduct?.stock || ""}
            placeholder="Enter product's stock"
            onChange={handleProductChange}
            className="text-black border-2 p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col w-fit">
          <label className="text-black">Price ($)</label>
          <input
            type="text"
            name="price"
            value={selectedProduct?.price || ""}
            placeholder="Enter product's price"
            onChange={handleProductChange}
            className="text-black border-2 p-1 rounded-md"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="py-2 px-4 bg-green-800 opacity-90 hover:opacity-100 rounded-md text-white"
          onClick={handleProductSubmit}
        >
          Submit
        </button>
        <button
          className="py-2 px-4 bg-red-800 opacity-90 hover:opacity-100 rounded-md text-white"
          onClick={handleProductReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Form;
