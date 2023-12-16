import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-purple-200 w-6/12 mx-auto h-80">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-red-700 mx-auto text-center pt-10"
      >
        <label>fName</label>

        <input
          type="text"
          {...register("fName", { required: true })}
          className="border-2 border-cyan-600"
        />
        <br />
        {errors.fName && <span>This fiuld is required</span>}
        <br />
        <label>lName</label>
        <input
          className="border-2 border-cyan-600"
          type="text"
          {...register("lName", { required: true })}
        />
        <br />
        {errors.lName && <span>This fiuld is required</span>}
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
