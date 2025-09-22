import { useNavigate, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const navigation = useNavigate();

  const param = useParams();

  const serviceName = param.service[0].toUpperCase() + param.service.slice(1);

  return (
    <div className="bg-zinc-400/40 mt-5 h-44 p-3">
      <h4 className="text-xl font-semibold">{serviceName}</h4>
      <p className="mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quam
        dignissimos perferendis eum autem odit mollitia fugit impedit iure
        maiores tenetur quisquam molestias fuga, nulla dolore! Quidem fugiat
        repellat nisi, quia obcaecati accusamus reprehenderit porro ullam, ex,
        tempora reiciendis deleniti?
      </p>
      <button className="bg-red-500 active:scale-95 cursor-pointer mt-5 text-white text-sm font-semibold tracking-wide leading-none px-4 py-3 rounded-sm ">
        Buy Now
      </button>
      <button className="bg-green-600 active:scale-95 cursor-pointer mt-5 ml-5 text-white text-sm font-semibold tracking-wide leading-none px-4 py-3 rounded-sm ">
        Subscribe
      </button>
      <button
        onClick={() => navigation("/services")}
        className="bg-zinc-800 active:scale-95 cursor-pointer text-white px-4 py-3 leading-none tracking-wide text-sm font-semibold rounded-sm mt-5 ml-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default ServiceDetail;
