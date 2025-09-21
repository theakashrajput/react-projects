import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { userContext } from "../Wrapper";

const SignUp = () => {
  const [users, setUsers] = useContext(userContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (e) => {
    toast.success("Form submitted successfully!");
    setUsers([...users, e]);
    reset();
  };

  console.log(users);

  const resetHandler = () => reset();

  return (
    <div
      id="sign-up-page"
      className="w-full h-screen flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-[28vw] bg-red-200 flex flex-col items-baseline justify-center gap-4 py-7 px-16 rounded-md"
      >
        <h1 className="w-full text-3xl font-bold font-['gilroy'] text-center">
          User SignUp
        </h1>

        {/* Username */}
        <label className="flex flex-col gap-0.5 w-full">
          <span className="text-base">Username:</span>
          <input
            className="bg-white w-full p-2 rounded-sm"
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs font-semibold tracking-wide">
              {errors.username.message}
            </p>
          )}
        </label>

        {/* Email */}
        <label className="flex flex-col gap-0.5 w-full">
          <span className="text-base">Email:</span>
          <input
            type="email"
            className="bg-white w-full p-2 rounded-sm"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs font-semibold tracking-wide">
              {errors.email.message}
            </p>
          )}
        </label>

        {/* Password */}
        <label className="flex flex-col gap-0.5 w-full">
          <span className="text-base">Password:</span>
          <input
            type="password"
            className="bg-white w-full p-2 rounded-sm"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6-8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs font-semibold tracking-wide">
              {errors.password.message}
            </p>
          )}
        </label>

        {/* Gender */}
        <div>
          <span className="text-base font-semibold tracking-wide inline-block mr-2">
            Gender:
          </span>
          <label>
            <input
              type="radio"
              value="male"
              {...register("gender", { required: true })}
            />
            <span className="text-base inline-block ml-0.5 mr-2">Male</span>
          </label>
          <label>
            <input
              type="radio"
              value="female"
              {...register("gender", { required: true })}
            />
            <span className="text-base inline-block ml-0.5">Female</span>
          </label>
          {errors.gender && (
            <p className="text-red-500 text-xs font-semibold tracking-wide">
              Gender is required
            </p>
          )}
        </div>

        {/* Hobby */}
        <div>
          <span className="text-base font-semibold tracking-wide inline-block mr-2">
            Hobbies:
          </span>
          <label>
            <input type="checkbox" value="sports" {...register("hobbies")} />
            <span className="text-base inline-block ml-0.5 mr-2">Sports</span>
          </label>
          <label>
            <input type="checkbox" value="singing" {...register("hobbies")} />
            <span className="text-base inline-block ml-0.5 mr-2">Singing</span>
          </label>
          <label>
            <input type="checkbox" value="coding" {...register("hobbies")} />
            <span className="text-base inline-block ml-0.5">Coding</span>
          </label>
        </div>

        {/* Country */}
        <div>
          <span className="text-base font-semibold tracking-wide inline-block mr-2">
            County:
          </span>
          <select
            className="bg-white px-2 py-1 rounded-sm"
            {...register("country", { required: "Country is required" })}
          >
            <option value="">--Select Country--</option>
            <option value="india">India</option>
            <option value="usa">Usa</option>
            <option value="uk">Uk</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs font-semibold tracking-wide">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <label>
          <input type="checkbox" {...register("terms", { required: true })} />
          <span className="text-base ml-2">I accept terms & conditions</span>
          {errors.terms && (
            <p className="text-red-500 text-xs font-semibold tracking-wide">
              You must accept term & conditions
            </p>
          )}
        </label>

        {/* Button */}
        <div className="w-full flex gap-5 justify-center mt-3">
          <button
            className="py-3 px-4 bg-blue-400 cursor-pointer rounded-md text-white font-semibold tracking-wide leading-none active:scale-95"
            type="submit"
          >
            Submit
          </button>
          <button
            className="py-3 px-4 bg-red-400 cursor-pointer rounded-md text-white font-semibold tracking-wide leading-none active:scale-95"
            type="button"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
