"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CAKES } from "@/lib/cakes";
import CakeCard from "@/app/components/CakeCard";

const STORAGE_KEY = "rachel_favorites";

export default function FavoritesList() {
  const [ids, setIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setIds(JSON.parse(stored));
    } catch { /* ignore */ }
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const favCakes = CAKES.filter(c => ids.includes(c.id));

  if (favCakes.length === 0) {
    return (
      <div className="text-center py-20 flex flex-col items-center gap-4">
        <div className="text-6xl">🎂</div>
        <p className="text-xl text-[#514346]">עדיין לא שמרת עוגות</p>
        <Link
          href="/#catalog"
          className="mt-4 bg-[#9d4867] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
        >
          לקטלוג העוגות
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {favCakes.map(cake => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </div>
  );
}
