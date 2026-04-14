"use client";

import { useEffect, useState } from "react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  cake_name: string | null;
  message: string | null;
  created_at: string;
  status: string;
}

const STATUS_OPTIONS = ["חדש", "נוצר קשר", "לא ענה", "סגור עסקה", "לא רלוונטי"];

const STATUS_STYLE: Record<string, string> = {
  "חדש":          "bg-[#9d4867] text-white font-black",
  "נוצר קשר":    "bg-[#CFE9E7] text-[#00201F] font-bold",
  "לא ענה":      "bg-[#FFF9C4] text-[#211B00] font-bold",
  "סגור עסקה":   "bg-[#B2DFDB] text-[#00201F] font-bold",
  "לא רלוונטי":  "bg-gray-100 text-gray-500 font-medium",
};

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/leads")
      .then(r => r.json())
      .then(d => {
        if (d.error) setError(d.error);
        else setLeads(d.leads || []);
      })
      .catch(() => setError("שגיאה בטעינת הנתונים"))
      .finally(() => setLoading(false));
  }, []);

  async function updateStatus(id: string, status: string) {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  }

  if (loading) return <div className="text-center py-20 text-[#514346]">טוען פניות...</div>;
  if (error)   return <div className="text-center py-20 text-red-500">{error}</div>;

  if (leads.length === 0) return (
    <div className="text-center py-20 flex flex-col items-center gap-3">
      <div className="text-5xl">🎂</div>
      <p className="text-[#514346] text-lg">עדיין אין פניות</p>
    </div>
  );

  const newCount = leads.filter(l => l.status === "חדש").length;

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F8BBD0]/20 text-center">
          <p className="text-3xl font-black text-[#9d4867]">{leads.length}</p>
          <p className="text-sm text-[#514346] mt-1">סה״כ פניות</p>
        </div>
        <div className="bg-[#9d4867] rounded-2xl p-5 shadow-sm text-center">
          <p className="text-3xl font-black text-white">{newCount}</p>
          <p className="text-sm text-white/80 mt-1">חדשים לטיפול</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F8BBD0]/20 text-center">
          <p className="text-3xl font-black text-[#9d4867]">
            {leads.filter(l => l.status === "סגור עסקה").length}
          </p>
          <p className="text-sm text-[#514346] mt-1">עסקאות סגורות</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F8BBD0]/20 text-center">
          <p className="text-3xl font-black text-[#9d4867]">
            {leads.filter(l => {
              const d = new Date(l.created_at);
              const now = new Date();
              return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
            }).length}
          </p>
          <p className="text-sm text-[#514346] mt-1">החודש</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-[#F8BBD0]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FFD8E4]/40 text-[#4A0018]">
                <th className="text-right px-5 py-4 font-bold">#</th>
                <th className="text-right px-5 py-4 font-bold">סטטוס</th>
                <th className="text-right px-5 py-4 font-bold">שם מלא</th>
                <th className="text-right px-5 py-4 font-bold">טלפון</th>
                <th className="text-right px-5 py-4 font-bold">מייל</th>
                <th className="text-right px-5 py-4 font-bold">עוגה</th>
                <th className="text-right px-5 py-4 font-bold">הודעה</th>
                <th className="text-right px-5 py-4 font-bold">תאריך</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, i) => (
                <tr key={lead.id} className={i % 2 === 0 ? "bg-white" : "bg-[#FFF8F9]"}>
                  <td className="px-5 py-4 text-[#514346]">{i + 1}</td>

                  {/* Status dropdown */}
                  <td className="px-5 py-4">
                    <select
                      value={lead.status || "חדש"}
                      onChange={e => updateStatus(lead.id, e.target.value)}
                      className={`text-xs px-3 py-1.5 rounded-full border-none outline-none cursor-pointer ${STATUS_STYLE[lead.status] || STATUS_STYLE["חדש"]}`}
                    >
                      {STATUS_OPTIONS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>

                  <td className="px-5 py-4 font-bold text-[#201A1B]">
                    {lead.name}
                    {lead.status === "חדש" && (
                      <span className="mr-2 text-[10px] bg-[#9d4867] text-white px-2 py-0.5 rounded-full font-black">חדש</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-[#201A1B]" dir="ltr">{lead.phone}</td>
                  <td className="px-5 py-4 text-[#201A1B]" dir="ltr">{lead.email}</td>
                  <td className="px-5 py-4">
                    {lead.cake_name
                      ? <span className="bg-[#FFD8E4] text-[#4A0018] text-xs font-bold px-3 py-1 rounded-full">{lead.cake_name}</span>
                      : <span className="text-[#514346]/50">—</span>}
                  </td>
                  <td className="px-5 py-4 text-[#514346] max-w-[160px] truncate">
                    {lead.message || <span className="text-[#514346]/50">—</span>}
                  </td>
                  <td className="px-5 py-4 text-[#514346] whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleString("he-IL", {
                      day: "2-digit", month: "2-digit", year: "numeric",
                      hour: "2-digit", minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
