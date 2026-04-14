"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-bold text-[#514346] hover:text-[#9d4867] px-4 py-2 rounded-full hover:bg-[#F8BBD0]/20 transition-colors"
    >
      יציאה →
    </button>
  );
}
