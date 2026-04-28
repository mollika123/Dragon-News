"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const LoginPage = () => {

  const { register,
    handleSubmit,watch, formState: { errors } } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleLoginFunc =async (data) => {
    // console.log(data, "data");
    
    const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("signin successfull")
    }
}




  return (
    <div className="w-11/12 mx-auto min-h-[80vh] flex justify-center items-center">

      <div className="p-4 rounded-xl bg-white shadow-2xs">
        <h2 className="font-bold text-3xl text-center">
          Login your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
            <input type="email" className="input" placeholder="Type here email"  {...register("email", { required: "Email field is required" })} />
             {errors.email && <p className="text-red-500">{errors.email.message }</p>}

</fieldset>
          <fieldset className="fieldset relative">
  <legend className="fieldset-legend">Password</legend>
  <input type={isShowPassword?"text":"password"}  className="input" placeholder="Type here password" {...register("password", { required: "Password field is required" })}/>
            <span className="absolute right-1 top-4 cursor-poi" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}</span>
            {errors.password && <p className="text-red-500">{errors.password.message }</p>}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white rounded-md">Login</button>
        </form>

        <p className="pt-4">Don't have an account ?</p>
        <Link href={'/register'} className="text-blue-500 font-semibold">Register</Link>
      </div>
    
    </div>
  );
};

export default LoginPage;