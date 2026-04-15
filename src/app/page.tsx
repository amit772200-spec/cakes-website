import Image from "next/image";
import Link from "next/link";
import { CAKES } from "@/lib/cakes";
import CakeCard from "@/app/components/CakeCard";

export default function Home() {
  return (
    <div className="bg-[#FFF8F9] text-[#201A1B]">
      {/* ─── Header ─────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 h-16 flex items-center px-6" style={{ background: "#F2D5C4" }}>
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
          style={{ background: "#F2D5C4" }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #FFF8F9)" }} />

          <div className="soft-float z-10 mb-8">
            <Image
              src="/logo.png"
              alt="Rachel Bakery and Cake"
              width={420}
              height={420}
              className="object-contain w-72 md:w-[420px] mix-blend-multiply"
              priority
            />
          </div>

          <h1
            className="z-10 text-4xl md:text-6xl font-light text-center text-[#201A1B] mb-4 leading-tight tracking-wide"
            style={{ fontFamily: "Noto Serif Hebrew, serif" }}
          >
            עיצוב עוגות בהתאמה אישית
          </h1>

          <p className="z-10 text-base text-[#514346]/80 text-center max-w-lg mb-10 leading-relaxed font-light tracking-wide">
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
        <section className="py-28 px-6 md:px-20 bg-[#FFF8F9]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            {/* Tiles */}
            <div className="w-full md:w-1/2 flex flex-col sm:grid sm:grid-cols-2 gap-6 flex-shrink-0">
              <div className="tile-float-1 bg-[#FFD8E4] rounded-3xl overflow-hidden flex flex-col justify-end shadow-md hover:shadow-xl transition-shadow relative" style={{ minHeight: "200px" }}>
                <img
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&q=80"
                  alt="חומרי גלם"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative p-5">
                  <p className="font-bold text-[#31111D] text-base leading-snug" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
                    רק חומרי גלם מהשורה הראשונה
                  </p>
                  <p className="text-[#31111D]/70 text-xs mt-1">שוקולד בלגי, קמח אורגני, פרי טרי בלבד</p>
                </div>
              </div>
              <div className="tile-float-2 bg-[#CFE9E7] rounded-3xl overflow-hidden flex flex-col justify-end sm:translate-y-10 shadow-md hover:shadow-xl transition-shadow relative" style={{ minHeight: "200px" }}>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                  alt="עיצוב אישי"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="relative p-5">
                  <p className="font-bold text-[#00201F] text-base leading-snug" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
                    כל עוגה מעוצבת לפי הדמיון שלכם
                  </p>
                  <p className="text-[#00201F]/70 text-xs mt-1">עיצוב אישי מלא לכל אירוע ובקשה</p>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2
                className="text-4xl md:text-5xl font-light text-[#201A1B] mb-8 leading-tight tracking-wide"
                style={{ fontFamily: "Noto Serif Hebrew, serif" }}
              >
                הסטנדרט החדש של עולם הקונדיטוריה
              </h2>
              <p className="text-xl text-[#514346]/80 leading-relaxed font-light mb-6">
                אנחנו לא רק אופים עוגות — אנחנו בונים זיכרונות. כל שכבה נבחרת בקפידה, כל עיטור נעשה בעבודת יד מוקפדת, וכל טעם מתוכנן לעורר השראה.
              </p>
              <p className="text-lg text-[#514346]/60 leading-relaxed font-light">
                כל פרט, כל צבע, כל טעם — מותאם במיוחד לאירוע שלכם ולחלום שלכם.
              </p>
            </div>
          </div>
        </section>

        {/* ─── How it works ─────────────────────────────────── */}
        <section className="py-28 px-6 md:px-20" style={{ background: "linear-gradient(135deg, #FAE8DC 0%, #F5E6C8 100%)" }}>
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-[#9d4867] font-bold tracking-widest uppercase text-sm block mb-3">התהליך שלנו</span>
            <h2
              className="text-4xl md:text-5xl font-light text-[#201A1B] mb-16 tracking-wide"
              style={{ fontFamily: "Noto Serif Hebrew, serif" }}
            >
              העוגה שלכם בשלושה שלבים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-[#FFD8E4] flex items-center justify-center shadow-md">
                  <span className="text-3xl font-light text-[#9d4867]" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>1</span>
                </div>
                <div className="w-px h-0 md:hidden" />
                <h3 className="text-2xl font-light text-[#201A1B] tracking-wide" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
                  בוחרים עוגה
                </h3>
                <p className="text-[#514346]/80 font-light leading-relaxed text-center">
                  גולשים בקטלוג שלנו ובוחרים את העוגה שדיברה אליכם — או מגיעים עם חלום משלכם
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-[#CFE9E7] flex items-center justify-center shadow-md">
                  <span className="text-3xl font-light text-[#00695C]" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>2</span>
                </div>
                <h3 className="text-2xl font-light text-[#201A1B] tracking-wide" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
                  ממלאים פרטים
                </h3>
                <p className="text-[#514346]/80 font-light leading-relaxed text-center">
                  ממלאים את הטופס עם השם, הטלפון והמייל — זה לוקח פחות מדקה
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-[#F5E6C8] flex items-center justify-center shadow-md">
                  <span className="text-3xl font-light text-[#7a5c00]" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>3</span>
                </div>
                <h3 className="text-2xl font-light text-[#201A1B] tracking-wide" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
                  אנחנו יוצרים קשר
                </h3>
                <p className="text-[#514346]/80 font-light leading-relaxed text-center">
                  אנחנו מתקשרים אליכם, מתאמים את כל הפרטים — ומכינים את עוגת החלומות שלכם
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Catalog ──────────────────────────────────────── */}
        <section id="catalog" className="py-24 px-6 md:px-20 bg-[#F2DDE1]/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#9d4867] font-bold tracking-widest uppercase text-sm block mb-2">הקולקציה שלנו</span>
              <h2
                className="text-5xl md:text-6xl font-light text-[#201A1B] tracking-wide"
                style={{ fontFamily: "Noto Serif Hebrew, serif" }}
              >
                גלריית עוגות
              </h2>
              <p className="text-[#514346] mt-3 font-light">לחצו על כל עוגה להזמנה ומידע נוסף</p>
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
              className="text-5xl md:text-6xl font-light text-[#31111D] mb-6 leading-tight tracking-wide"
              style={{ fontFamily: "Noto Serif Hebrew, serif" }}
            >
              מוכנים ליצירה<br />הבאה שלכם?
            </h2>
            <p className="text-lg text-[#31111D]/60 mb-10 font-light">
              הצטרפו למאות הלקוחות שהפכו את האירוע שלהם לחוויה בלתי נשכחת.
            </p>
            <a
              href="#catalog"
              className="inline-block bg-[#9d4867] text-white px-14 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              בחרו את העוגה שלכם
            </a>
          </div>
        </section>

        {/* ─── Footer ───────────────────────────────────────── */}
        <footer className="bg-[#FFD8E4] border-t border-[#F8BBD0]/30 py-8">
          <div className="max-w-6xl mx-auto px-8 flex flex-col items-center gap-6">
            <Image src="/logo.png" alt="Rachel Bakery and Cake" width={80} height={40} className="object-contain mix-blend-multiply" />
            <nav className="flex flex-wrap justify-center gap-8">
              {["אודות", "תהליך העבודה", "צור קשר", "מדיניות פרטיות"].map((item) => (
                <a key={item} href="#" className="text-sm font-light text-[#4A0018]/70 hover:text-[#9d4867] transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <p className="text-xs text-[#514346]/60 font-light">© 2025 Rachel Bakery and Cake. כל הזכויות שמורות.</p>
            <Link href="/admin" className="text-xs text-[#514346]/30 hover:text-[#514346]/60 transition-colors">
              ADMIN
            </Link>
          </div>
        </footer>
      </main>

    </div>
  );
}
