const Input = (props) => {
  const {
    type,
    placeholder,
    name,
    register,
    errors,
    rules,
    label,
    as = "input",
  } = props.data;

  const Element = as;

  return (
    <>
      <div className="flex items-center">
        <label
          htmlFor={name}
          className="font-medium text-gray-700 mr-2 whitespace-nowrap"
        >
          {label}:
        </label>
        <Element
          id={name}
          type={type}
          placeholder={`ENTER ${placeholder}`}
          className="w-full border-b pb-0.5 pt-1 px-2 outline-none"
          {...register(name, rules)}
        />
      </div>
      {errors[name] && (
        <p className="text-red-400 text-xs font-semibold tracking-wide">
          {errors[name].message}
        </p>
      )}
    </>
  );
};

export default Input;
