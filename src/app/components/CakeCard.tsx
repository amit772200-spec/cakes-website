"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Cake } from "@/lib/cakes";

const STORAGE_KEY = "rachel_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  function toggle(id: string) {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  return { favorites, toggle };
}

export default function CakeCard({ cake }: { cake: Cake }) {
  const { favorites, toggle } = useFavorites();
  const isFav = favorites.includes(cake.id);

  return (
    <div className="relative group overflow-hidden rounded-3xl shadow-lg border-4 border-white aspect-[4/3] scale-hover">
      <Link href={`/cake/${cake.id}`} className="block w-full h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A0018]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {cake.tags.slice(0, 2).map(tag => (
              <span key={tag} className="bg-[#FFF9C4]/80 text-[#211B00] text-xs font-bold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-white text-xl font-black" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
            {cake.name}
          </h3>
          <p className="text-white/80 text-sm mt-1">{cake.description}</p>
        </div>
      </Link>

      {/* Favorite button — always visible */}
      <button
        onClick={e => { e.preventDefault(); toggle(cake.id); }}
        aria-label={isFav ? "הסר ממועדפים" : "הוסף למועדפים"}
        className={`absolute top-3 left-3 z-10 w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-all duration-200 ${
          isFav
            ? "bg-[#9d4867] text-white scale-110"
            : "bg-white/80 backdrop-blur-sm text-[#9d4867] hover:bg-white"
        }`}
      >
        {isFav ? "♥" : "♡"}
      </button>
    </div>
  );
}
