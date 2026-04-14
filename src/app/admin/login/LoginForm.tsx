"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      setError("סיסמא שגויה, נסו שוב");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="••••••••"
        className="bg-[#FFF8F9] rounded-2xl px-5 py-4 text-[#201A1B] outline-none border border-[#F8BBD0]/30 focus:border-[#F8BBD0] transition-all text-center tracking-widest text-xl"
        dir="ltr"
        autoFocus
      />
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#9d4867] text-white py-4 rounded-full font-black text-lg hover:opacity-90 transition-all disabled:opacity-50"
      >
        {loading ? "...מתחבר" : "כניסה"}
      </button>
    </form>
  );
}
