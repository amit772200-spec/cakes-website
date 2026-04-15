"use client";

import { useState, useRef, useEffect } from "react";

const REVIEWS = [
  { name: "מיכל כהן", event: "בת מצווה", text: "העוגה הייתה פשוט מושלמת. כל האורחים עצרו לצלם אותה לפני שחתכו — לא האמנתי שאפשר לעשות משהו כל כך יפה וטעים גם יחד.", stars: 5 },
  { name: "שירה לוי", event: "חתונה", text: "הזמנו עוגת חתונה בהתאמה אישית ורחל עלתה על כל הציפיות שלנו. השירות היה מדהים, התוצאה הייתה חלום. נמליץ לכולם!", stars: 5 },
  { name: "דנה אברהם", event: "יום הולדת", text: "הפתעתי את הבת שלי עם עוגה מותאמת לתחביבים שלה — היא פרצה בבכי מרוב רגש. תודה על הקסם!", stars: 5 },
  { name: "נועה פרידמן", event: "אירוסין", text: "הזמנו עוגה לאירוסין שלנו וכולם שאלו מאיפה. העיצוב היה מדויק בדיוק למה שרצינו, והטעם — פשוט לא מהעולם הזה.", stars: 5 },
  { name: "יעל גולדברג", event: "ברית", text: "קיבלנו שירות אישי מהרגע הראשון. רחל הקשיבה לכל פרט ועשתה עוגה שגרמה לכולם לדבר עליה כל הערב.", stars: 5 },
  { name: "רותם שמיר", event: "יום הולדת 30", text: "ציינתי את יום ההולדת ה-30 עם עוגה שפשוט שברה את כולם. כל כך יפה עד שהיה קשה לחתוך אותה. תודה רחל!", stars: 5 },
  { name: "אורית בן דוד", event: "בר מצווה", text: "פניתי בהמלצה של חברה ולא התאכזבתי. העוגה הגיעה בדיוק בזמן, ארוזה בצורה מהממת, והילדים התגעגעו אליה.", stars: 5 },
];

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const total = REVIEWS.length;
  const dragStart = useRef<number | null>(null);

  function goTo(idx: number) {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(((idx % total) + total) % total);
      setFading(false);
    }, 350);
  }

  function prev() { goTo(current - 1); }
  function next() { goTo(current + 1); }

  function onMouseDown(e: React.MouseEvent) { dragStart.current = e.clientX; }
  function onMouseUp(e: React.MouseEvent) {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
  }
  function onTouchStart(e: React.TouchEvent) { dragStart.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
  }

  const shown = Array.from({ length: 3 }, (_, i) => ({
    review: REVIEWS[(current + i) % total],
    key: (current + i) % total,
  }));

  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 cursor-grab active:cursor-grabbing select-none"
        style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(8px)" : "translateY(0)", transition: "opacity 0.35s ease, transform 0.35s ease" }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {shown.map(({ review: r, key }) => (
          <div
            key={key}
            className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/60 flex flex-col gap-4"
          >
            <div className="flex gap-1">
              {Array.from({ length: r.stars }).map((_, s) => (
                <span key={s} className="text-[#9d4867] text-lg">★</span>
              ))}
            </div>
            <p className="text-[#514346] font-light leading-relaxed text-base flex-1">
              "{r.text}"
            </p>
            <div className="border-t border-[#F8BBD0]/30 pt-4">
              <p className="font-bold text-[#201A1B] text-sm">{r.name}</p>
              <p className="text-[#9d4867] text-xs font-light mt-0.5">{r.event}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button onClick={next} className="w-10 h-10 rounded-full bg-white/60 border border-[#F8BBD0]/40 text-[#9d4867] hover:bg-white/90 transition-all text-xl font-bold shadow-sm">‹</button>
        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-[#9d4867] w-5" : "bg-[#9d4867]/30 w-2"}`}
            />
          ))}
        </div>
        <button onClick={prev} className="w-10 h-10 rounded-full bg-white/60 border border-[#F8BBD0]/40 text-[#9d4867] hover:bg-white/90 transition-all text-xl font-bold shadow-sm">›</button>
      </div>
    </div>
  );
}
