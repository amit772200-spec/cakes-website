import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachel Bakery and Cake",
  description: "עוגות בהתאמה אישית ברמה הגבוהה ביותר",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="he" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
