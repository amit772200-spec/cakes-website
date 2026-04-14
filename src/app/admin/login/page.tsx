import LoginForm from "./LoginForm";
import Image from "next/image";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: "#FAE8DC" }}>
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Rachel Bakery" width={140} height={70} className="object-contain" />
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(248,187,208,0.3)]">
          <h1 className="text-2xl font-black text-center text-[#201A1B] mb-2"
            style={{ fontFamily: "Noto Serif Hebrew, serif" }}>
            כניסת מנהל
          </h1>
          <p className="text-center text-[#514346] text-sm mb-6">הזינו את סיסמת הניהול</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
