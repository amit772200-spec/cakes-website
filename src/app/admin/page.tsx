import Image from "next/image";
import Link from "next/link";
import LeadsTable from "./LeadsTable";
import LogoutButton from "./LogoutButton";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F9] text-[#201A1B]">
      {/* Header */}
      <header className="bg-white border-b border-[#F8BBD0]/30 h-16 flex items-center px-6 gap-4">
        <Image src="/logo.png" alt="Rachel Bakery" width={90} height={45} className="object-contain" />
        <span className="font-bold text-[#9d4867] text-sm mr-2">| לוח ניהול</span>
        <div className="mr-auto flex items-center gap-3">
          <Link href="/" className="text-sm text-[#514346] hover:text-[#9d4867] transition-colors font-bold">
            → חזרה לאתר
          </Link>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-[#201A1B]" style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
              פניות לקוחות
            </h1>
            <p className="text-[#514346] mt-1 text-sm">כל הלקוחות שהשאירו פרטים באתר</p>
          </div>
        </div>

        <LeadsTable />
      </main>
    </div>
  );
}
