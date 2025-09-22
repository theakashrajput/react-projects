import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigation = useNavigate();

  const handleNavigation = (name) => {
    navigation(`/products/details/${name}`);
  };

  return (
    <div className="bg-gray-600 w-fit h-fit py-4 px-6 rounded-md text-white">
      <h3 className="text-xl">{props.data.name}</h3>
      <p className="text-sm">{props.data.detail}...</p>
      <button
        onClick={() => handleNavigation(props.data.name)}
        className="px-4 py-2 cursor-pointer active:scale-95 tracking-wide leading-none font-semibold text-xs bg-zinc-200 rounded-md text-black mt-5"
      >
        Open
      </button>
    </div>
  );
};

export default Product;
