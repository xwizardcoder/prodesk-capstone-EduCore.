"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-10">
      <div className="bg-white shadow rounded-xl p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <p className="mb-4">Logged in as: {session?.user?.email}</p>

        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}