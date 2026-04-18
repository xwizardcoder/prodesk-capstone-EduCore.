"use client";

import { useSelector } from "react-redux";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const storedUser = useSelector((state) => state.user.user);
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!storedUser) {
      router.push("/register");
      return;
    }

    if (
      form.email !== storedUser.email ||
      form.password !== storedUser.password
    ) {
      alert("Invalid credentials");
      return;
    }

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res.ok) router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}