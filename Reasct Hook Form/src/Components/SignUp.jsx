import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [newUser, setNewUser] = useState(null)

  const formSubmit = (data) => {
    const newUser = data;
    setNewUser(JSON.stringify(newUser));
    reset();
  };

  return (
    <div className="signup-page h-screen w-full flex justify-center items-center flex-col">
      <div className="form-cont w-[25vw] bg-[#f3f3f3] py-10 px-5 rounded-sm mb-10">
        <h1 className="text-2xl font-semibold font-['gilroy'] text-center ">
          Signup Form
        </h1>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="w-full flex flex-col items-center mt-8"
        >
          <div className="flex flex-col p-2 w-[85%]">
            <label htmlFor="username" className="text-md mb-0.5">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              {...register("username", { required: "username is required" })}
              className="border-black border-[1px] py-1 px-2 rounded-sm bg-white"
            />
            <small className="text-red-400 font-semibold">
              {errors?.username?.message}
            </small>
          </div>
          <div className="flex flex-col p-2 w-[85%]">
            <label htmlFor="email" className="text-md mb-0.5">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", { required: "email is required" })}
              className="border-black border-[1px] py-1 px-2 rounded-sm bg-white"
            />
            <small className="text-red-400 font-semibold">
              {errors?.email?.message}
            </small>
          </div>
          <div className="flex flex-col p-2 w-[85%]">
            <label htmlFor="password" className="text-md mb-0.5">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", { required: "password is required" })}
              className="border-black border-[1px] py-1 px-2 rounded-sm bg-white"
            />
            <small className="text-red-400 font-semibold">
              {errors?.password?.message}
            </small>
          </div>
          <button className="mt-10 bg-green-600 text-white font-semibold py-4 px-6 text-lg leading-none tracking-wide rounded-md cursor-pointer active:scale-95">
            Submit
          </button>
        </form>
      </div>

      <h3>{newUser}</h3>
    </div>
  );
};

export default SignUp;
