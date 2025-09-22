import { useState } from "react";
import ServiceElement from "./ServiceElement";
import { Outlet } from "react-router-dom";

const Services = () => {
  const [serviceData, setServiceData] = useState([
    {
      serviceName: "Recycle",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facilis?",
    },
    {
      serviceName: "Reuseable",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facilis?",
    },
    {
      serviceName: "Vanish",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facilis?",
    },
  ]);

  return (
    <div className="w-full h-screen pt-20 pb-5 px-5 ">
      <h1 className="text-3xl mb-5">Our Services</h1>
      <div className="w-full bg-red-50 p-5 flex gap-10">
        {serviceData.map((ele, idx) => (
          <ServiceElement data={ele} key={idx} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Services;
