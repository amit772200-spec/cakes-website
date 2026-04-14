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
}

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

  if (loading) return (
    <div className="text-center py-20 text-[#514346]">טוען פניות...</div>
  );

  if (error) return (
    <div className="text-center py-20 text-red-500">{error}</div>
  );

  if (leads.length === 0) return (
    <div className="text-center py-20 flex flex-col items-center gap-3">
      <div className="text-5xl">🎂</div>
      <p className="text-[#514346] text-lg">עדיין אין פניות</p>
    </div>
  );

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F8BBD0]/20 text-center">
          <p className="text-3xl font-black text-[#9d4867]">{leads.length}</p>
          <p className="text-sm text-[#514346] mt-1">סה״כ פניות</p>
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
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F8BBD0]/20 text-center">
          <p className="text-3xl font-black text-[#9d4867]">
            {leads.filter(l => {
              const d = new Date(l.created_at);
              return Date.now() - d.getTime() < 7 * 24 * 60 * 60 * 1000;
            }).length}
          </p>
          <p className="text-sm text-[#514346] mt-1">ב-7 ימים אחרונים</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-[#F8BBD0]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FFD8E4]/40 text-[#4A0018]">
                <th className="text-right px-5 py-4 font-bold">#</th>
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
                  <td className="px-5 py-4 font-bold text-[#201A1B]">{lead.name}</td>
                  <td className="px-5 py-4 text-[#201A1B] dir-ltr" dir="ltr">{lead.phone}</td>
                  <td className="px-5 py-4 text-[#201A1B] dir-ltr" dir="ltr">{lead.email}</td>
                  <td className="px-5 py-4">
                    {lead.cake_name ? (
                      <span className="bg-[#FFD8E4] text-[#4A0018] text-xs font-bold px-3 py-1 rounded-full">
                        {lead.cake_name}
                      </span>
                    ) : <span className="text-[#514346]/50">—</span>}
                  </td>
                  <td className="px-5 py-4 text-[#514346] max-w-[180px] truncate">
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
