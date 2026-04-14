import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCakeById, CAKES } from "@/lib/cakes";
import ContactForm from "./ContactForm";

export function generateStaticParams() {
  return CAKES.map((cake) => ({ id: cake.id }));
}

export default async function CakePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cake = getCakeById(id);
  if (!cake) notFound();

  return (
    <div className="bg-[#FFF8F9] min-h-screen text-[#201A1B]">
      {/* ─── Header ─── */}
      <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-2xl border-b border-[#F8BBD0]/20 h-20 flex items-center px-6">
        <Link href="/" className="text-[#201A1B] hover:bg-[#F8BBD0]/20 p-2 rounded-full transition-colors flex items-center gap-2 font-bold text-sm">
          <span className="material-symbols-outlined">arrow_forward</span>
          חזרה לקטלוג
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo.png" alt="Rachel Bakery and Cake" width={120} height={60} className="object-contain" />
        </div>
      </header>

      <main className="pt-28 pb-24 px-6 md:px-20 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* ─── Left: Cake Details ─── */}
          <div className="w-full lg:w-3/5">
            {/* Category badge */}
            <span className="inline-block bg-[#CFE9E7] text-[#00201F] text-sm font-bold px-4 py-1 rounded-full mb-6">
              {cake.category}
            </span>

            {/* Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h1
              className="text-4xl md:text-6xl font-black text-[#201A1B] mb-4 leading-tight"
              style={{ fontFamily: "Noto Serif Hebrew, serif" }}
            >
              {cake.name}
            </h1>

            {/* Short description */}
            <p className="text-xl text-[#514346] mb-6">{cake.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {cake.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#FFF9C4] text-[#211B00] text-sm font-bold px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Long description */}
            <p className="text-[#514346] text-lg leading-relaxed">
              {cake.longDescription}
            </p>
          </div>

          {/* ─── Right: Contact Form ─── */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(248,187,208,0.2)] border border-[#F8BBD0]/20">
              <h2
                className="text-2xl font-black text-[#201A1B] mb-2"
                style={{ fontFamily: "Noto Serif Hebrew, serif" }}
              >
                רוצים את העוגה הזו?
              </h2>
              <p className="text-[#514346] mb-6 text-sm leading-relaxed">
                השאירו פרטים ונחזור אליכם בהקדם עם כל המידע על{" "}
                <strong>{cake.name}</strong>
              </p>

              <ContactForm cakeName={cake.name} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
