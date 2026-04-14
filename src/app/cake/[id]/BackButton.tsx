"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-[#7a3a50] hover:bg-[#F8BBD0]/30 px-4 py-2 rounded-full transition-colors font-bold text-sm"
    >
      ← חזרה לדף הקודם
    </button>
  );
}
