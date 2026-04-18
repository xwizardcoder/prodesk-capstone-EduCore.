"use client";

import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}