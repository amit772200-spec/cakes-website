"use client";

import { useState } from "react";

export default function ContactForm({ cakeName }: { cakeName: string }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "שם מלא הוא שדה חובה";
    if (!form.phone.trim()) e.phone = "מספר טלפון הוא שדה חובה";
    if (!form.email.trim()) e.email = "מייל הוא שדה חובה";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "כתובת מייל לא תקינה";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#CFE9E7] rounded-3xl p-10 text-center flex flex-col items-center gap-4">
        <span className="material-symbols-outlined text-[#00201F] text-6xl">check_circle</span>
        <h3 className="text-2xl font-black text-[#00201F]" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
          תודה רבה!
        </h3>
        <p className="text-[#00201F]/80 text-lg">ניצור קשר בקרוב בנוגע ל{cakeName} 🎂</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="font-bold text-[#201A1B] text-sm">שם מלא *</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="ישראל ישראלי"
          className="bg-white rounded-2xl px-5 py-4 text-[#201A1B] outline-none border border-[#F8BBD0]/30 focus:bg-[#FFF9C4]/50 focus:border-[#F8BBD0] transition-all placeholder:text-[#514346]/50"
        />
        {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-[#201A1B] text-sm">מספר טלפון *</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="050-0000000"
          className="bg-white rounded-2xl px-5 py-4 text-[#201A1B] outline-none border border-[#F8BBD0]/30 focus:bg-[#FFF9C4]/50 focus:border-[#F8BBD0] transition-all placeholder:text-[#514346]/50"
          dir="ltr"
        />
        {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-[#201A1B] text-sm">מייל *</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="your@email.com"
          className="bg-white rounded-2xl px-5 py-4 text-[#201A1B] outline-none border border-[#F8BBD0]/30 focus:bg-[#FFF9C4]/50 focus:border-[#F8BBD0] transition-all placeholder:text-[#514346]/50"
          dir="ltr"
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
      </div>

      <button
        type="submit"
        className="mt-2 bg-[#9d4867] text-white px-10 py-5 rounded-full font-black text-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_rgba(157,72,103,0.3)]"
      >
        שלחו פרטים
      </button>
    </form>
  );
}
