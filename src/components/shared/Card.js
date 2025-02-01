import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, stock, price, handleDelete }) => {
  return (
    <div className="p-4 w-80 bg-white rounded-md shadow-md">
      <Link href={`/${id}`}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-black font-bold">{name}</h2>
            <p className="text-gray-800 text-sm">Stock: {stock}</p>
          </div>
          <h1 className="text-black text-3xl">${price}</h1>
        </div>
      </Link>

      <div className="mt-4">
        <button
          className="py-2 px-4 bg-red-800 opacity-90 hover:opacity-100 rounded-md"
          onClick={handleDelete}
        >
          <Image src="/delete.svg" alt="Delete" width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default Card;
