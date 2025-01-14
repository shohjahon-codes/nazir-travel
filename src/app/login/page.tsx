"use client";
import { loginUser } from "@/service/auth-mutations";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loading, setLoading] = React.useTransition();
  const { handleSubmit, register, reset } = useForm<{
    email: string;
    password: string;
  }>();
  const router = useRouter();
  const submit = (data: { email: string; password: string }) => {
    setLoading(async () => {
      await loginUser(data);
      reset();
      router.replace("/");
    });
  };
  return (
    <div className="container mx-auto max-w-[1200px]">
      <Link href={"/register"}>Register</Link>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            {...register("email")}
            placeholder="email"
            className="bg-cyan-300 p-[10px]"
            type="email"
          />
        </div>
        <div>
          <input
            {...register("password")}
            placeholder="password"
            className="bg-cyan-300 p-[10px]"
            type="password"
          />
        </div>
        <button className="p-[14px] bg-green-400">
          {loading ? "Loading..." : "send"}
        </button>
      </form>
    </div>
  );
};

export default Login;
