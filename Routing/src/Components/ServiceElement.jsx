import { useNavigate } from "react-router-dom";

const ServiceElement = (props) => {
  const navigation = useNavigate();

  const handleNavigation = (service) => {
    const updatedName = service.toLowerCase();
    navigation(`/services/${updatedName}`);
  };

  return (
    <div className="w-60 h-84 bg-gray-300 rounded-md p-5">
      <div id="img" className="w-full h-36 bg-zinc-400/40 rounded-sm"></div>
      <h3
        id="service-title"
        className="text-lg font-semibold tracking-wide mt-2"
      >
        {props.data.serviceName}
      </h3>
      <p id="service-detail" className="mt-1 leading-5">
        {props.data.serviceDetails}
      </p>
      <button
        onClick={() => handleNavigation(props.data.serviceName)}
        className="bg-zinc-800 active:scale-95 cursor-pointer text-white px-4 py-3 leading-none tracking-wide text-xs font-semibold rounded-sm mt-5"
      >
        More details...
      </button>
    </div>
  );
};

export default ServiceElement;
