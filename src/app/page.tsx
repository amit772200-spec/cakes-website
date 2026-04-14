import Image from "next/image";
import Link from "next/link";
import { CAKES } from "@/lib/cakes";
import CakeCard from "@/app/components/CakeCard";

export default function Home() {
  return (
    <div className="bg-[#FFF8F9] text-[#201A1B]">
      {/* ─── Header ─────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 h-16 flex items-center px-6" style={{ background: "#FAE8DC" }}>
        <Link href="/contact" className="text-[#7a3a50] hover:bg-[#F8BBD0]/40 px-4 py-2 rounded-full transition-colors font-bold text-sm">
          צרו קשר
        </Link>
        <div className="mr-auto">
          <Link href="/favorites" className="text-[#7a3a50] hover:bg-[#F8BBD0]/40 px-4 py-2 rounded-full transition-colors font-bold text-sm">
            ♡ מועדפים
          </Link>
        </div>
      </header>

      <main className="pt-16">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section
          className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 overflow-hidden"
          style={{ background: "#FAE8DC" }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #FFF8F9)" }} />

          <div className="soft-float z-10 mb-8">
            <Image
              src="/logo.png"
              alt="Rachel Bakery and Cake"
              width={400}
              height={400}
              className="object-contain w-64 md:w-96"
              priority
            />
          </div>

          <h1
            className="z-10 text-3xl md:text-5xl font-black text-center text-[#201A1B] mb-4 leading-tight"
            style={{ fontFamily: "Noto Serif Hebrew, serif" }}
          >
            עיצוב עוגות יוקרה בהתאמה אישית
          </h1>

          <p className="z-10 text-lg text-[#514346] text-center max-w-lg mb-10 leading-relaxed">
            כל עוגה היא יצירת מופת ייחודית — נאפה ומעוצבת ביד לאירוע שלכם
          </p>

          <div className="z-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#catalog"
              className="bg-[#F8BBD0] text-[#4A0018] px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all scale-hover shadow-[0_10px_30px_rgba(248,187,208,0.5)] text-center"
            >
              צפו בקטלוג שלנו
            </a>
            <Link
              href="/contact"
              className="bg-white border-2 border-[#F8BBD0]/40 text-[#201A1B] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F8BBD0]/10 transition-all text-center"
            >
              צרו קשר
            </Link>
          </div>
        </section>

        {/* ─── Features ─────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-20 bg-[#FFF8F9]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            {/* Tiles */}
            <div className="w-full md:w-2/5 grid grid-cols-2 gap-6 flex-shrink-0">
              {/* Pink tile — ingredients */}
              <div className="aspect-square bg-[#FFD8E4] rounded-3xl overflow-hidden flex flex-col justify-end shadow-sm hover:shadow-md transition-shadow relative">
                <img
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&q=80"
                  alt="חומרי גלם"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative p-5">
                  <p className="font-black text-[#31111D] text-base leading-snug" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
                    רק חומרי גלם מהשורה הראשונה
                  </p>
                  <p className="text-[#31111D]/70 text-xs mt-1">שוקולד בלגי, קמח אורגני, פרי טרי בלבד</p>
                </div>
              </div>
              {/* Mint tile — custom design */}
              <div className="aspect-square bg-[#CFE9E7] rounded-3xl overflow-hidden flex flex-col justify-end translate-y-10 shadow-sm hover:shadow-md transition-shadow relative">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                  alt="עיצוב אישי"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="relative p-5">
                  <p className="font-black text-[#00201F] text-base leading-snug" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
                    כל עוגה מעוצבת לפי הדמיון שלכם
                  </p>
                  <p className="text-[#00201F]/70 text-xs mt-1">עיצוב אישי מלא לכל אירוע ובקשה</p>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="w-full md:w-3/5">
              <h2
                className="text-4xl md:text-5xl font-black text-[#201A1B] mb-6 leading-tight"
                style={{ fontFamily: "Noto Serif Hebrew, serif" }}
              >
                הסטנדרט החדש של עולם הקונדיטוריה
              </h2>
              <p className="text-xl text-[#514346] leading-relaxed">
                אנחנו לא רק אופים עוגות — אנחנו בונים זיכרונות. כל שכבה נבחרת בקפידה, כל עיטור נעשה בעבודת יד מוקפדת, וכל טעם מתוכנן לעורר השראה.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Catalog ──────────────────────────────────────── */}
        <section id="catalog" className="py-24 px-6 md:px-20 bg-[#F2DDE1]/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#9d4867] font-bold tracking-widest uppercase text-sm block mb-2">הקולקציה שלנו</span>
              <h2
                className="text-5xl md:text-6xl font-black text-[#201A1B]"
                style={{ fontFamily: "Noto Serif Hebrew, serif" }}
              >
                גלריית עוגות
              </h2>
              <p className="text-[#514346] mt-3">לחצו על כל עוגה להזמנה ומידע נוסף</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAKES.map((cake) => (
                <CakeCard key={cake.id} cake={cake} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section id="contact-cta" className="py-24 bg-[#FFD8E4] text-center px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8BBD0]/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B2DFDB]/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2
              className="text-5xl md:text-6xl font-black text-[#31111D] mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif Hebrew, serif" }}
            >
              מוכנים ליצירה<br />הבאה שלכם?
            </h2>
            <p className="text-xl text-[#31111D]/70 mb-10">
              הצטרפו למאות הלקוחות שהפכו את האירוע שלהם לחוויה בלתי נשכחת.
            </p>
            <a
              href="#catalog"
              className="inline-block bg-[#9d4867] text-white px-14 py-6 rounded-full font-black text-xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              בחרו את העוגה שלכם
            </a>
          </div>
        </section>

        {/* ─── Footer ───────────────────────────────────────── */}
        <footer className="bg-[#FFF8F9] border-t border-[#F8BBD0]/20 pb-10">
          <div className="text-center pt-6">
            <Link href="/admin" className="text-xs text-[#514346]/50 hover:text-[#514346]/80 transition-colors">
              ADMIN
            </Link>
          </div>
          <div className="max-w-6xl mx-auto px-8 pt-16 pb-6 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Image src="/logo.png" alt="Rachel Bakery and Cake" width={100} height={50} className="object-contain" />
              <p className="text-sm text-[#514346]">© 2025 Rachel Bakery and Cake. כל הזכויות שמורות.</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-8">
              {["אודות", "תהליך העבודה", "צור קשר", "מדיניות פרטיות"].map((item) => (
                <a key={item} href="#" className="text-sm font-bold text-[#201A1B]/60 hover:text-[#9d4867] transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex gap-4">
              <button className="bg-[#F8BBD0]/20 px-4 py-2 rounded-full text-[#9d4867] hover:bg-[#F8BBD0]/40 transition-colors text-sm font-bold">
                🔗 שיתוף
              </button>
              <button className="bg-[#F8BBD0]/20 px-4 py-2 rounded-full text-[#9d4867] hover:bg-[#F8BBD0]/40 transition-colors text-sm font-bold">
                🌐 שפה
              </button>
            </div>
          </div>
        </footer>
      </main>

    </div>
  );
}
