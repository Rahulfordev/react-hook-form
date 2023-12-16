import { useState } from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const [data, setData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
  };

  return (
    <div className="bg-purple-200 w-6/12 mx-auto h-6/6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-red-700 mx-auto text-center pt-10 pb-10"
      >
        <label>Name</label>
        <br />
        <input
          type="text"
          {...register("Name", { required: true, minLength: 2, maxLength: 10 })}
          className="border-2 border-cyan-600"
        />
        <br />
        {errors.Name && <span>This fiuld is required</span>}
        <br />
        <label>Email</label>
        <br />
        <input
          className="border-2 border-cyan-600"
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+([A-Za-z0-9]{2,4}|museum)$/,
          })}
        />
        <br />
        {errors.email && <span>This fiuld is required</span>}
        <br />
        <label>Password</label>
        <br />
        <input
          className="border-2 border-cyan-600"
          type="password"
          {...register("lName", {
            required: true,
            pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          })}
        />
        <br />
        <label>conform password</label>
        <br />
        <input
          className="border-2 border-cyan-600"
          type="password"
          {...register("lName", { required: true })}
        />
        <br />
        {errors.lName && <span>This fiuld is required</span>}
        <br />
        <label>Age</label>
        <br />
        <input
          className="border-2 border-cyan-600"
          type="number"
          {...register("age", { required: true, min: 18, max: 60 })}
        />
        <br />
        {errors.age && <span>This fiuld is required</span>}
        <br />
        <select {...register("gender")}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          submit
        </button>
      </form>
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  );
};

export default Form;
