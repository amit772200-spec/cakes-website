import Image from "next/image";
import Link from "next/link";
import FavoritesList from "./FavoritesList";

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F9] text-[#201A1B]">
      <header className="fixed top-0 w-full z-50 h-16 flex items-center px-6 bg-white/70 backdrop-blur-2xl border-b border-[#F8BBD0]/20">
        <Link href="/" className="flex items-center gap-2 text-[#7a3a50] hover:bg-[#F8BBD0]/40 px-4 py-2 rounded-full transition-colors font-bold text-sm">
          ← חזרה לקטלוג
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo.png" alt="Rachel Bakery and Cake" width={100} height={50} className="object-contain" />
        </div>
      </header>

      <main className="pt-24 pb-20 px-6 md:px-20 max-w-6xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-black text-center mb-3"
          style={{ fontFamily: "Noto Serif Hebrew, serif" }}
        >
          ♥ המועדפים שלי
        </h1>
        <p className="text-center text-[#514346] mb-12">העוגות שסימנת לשמירה</p>
        <FavoritesList />
      </main>
    </div>
  );
}
