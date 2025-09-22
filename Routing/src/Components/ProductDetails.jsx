import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  const navigation = useNavigate();

  return (
    <div className="w-full h-screen pt-20 pb-5 px-5">
      <h2 className="text-3xl">{params.name}</h2>
      <p className="text-xl">{params.name} Details...</p>
      <button
        onClick={() => navigation(-1)}
        className="px-4 py-3 cursor-pointer active:scale-95 tracking-wide leading-none font-semibold text-sm bg-zinc-800 rounded-md text-white mt-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
