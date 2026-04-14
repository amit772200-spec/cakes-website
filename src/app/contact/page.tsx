import Image from "next/image";
import Link from "next/link";
import ContactPageForm from "./ContactPageForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAE8DC] text-[#201A1B]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 h-16 flex items-center px-6" style={{ background: "#FAE8DC" }}>
        <Link
          href="/"
          className="flex items-center gap-2 text-[#7a3a50] hover:bg-[#F8BBD0]/40 px-4 py-2 rounded-full transition-colors font-bold text-sm"
        >
          ← חזרה לדף הבית
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo.png" alt="Rachel Bakery and Cake" width={100} height={50} className="object-contain" />
        </div>
      </header>

      <main className="pt-24 pb-16 px-6 flex flex-col items-center">
        <div className="w-full max-w-lg">
          <h1
            className="text-4xl md:text-5xl font-black text-center text-[#201A1B] mb-3"
            style={{ fontFamily: "Noto Serif Hebrew, serif" }}
          >
            צרו קשר
          </h1>
          <p className="text-center text-[#514346] mb-10 text-lg">
            השאירו פרטים ונחזור אליכם בהקדם האפשרי
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(248,187,208,0.25)]">
            <ContactPageForm />
          </div>
        </div>
      </main>
    </div>
  );
}
