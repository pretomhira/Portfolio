import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Porfolio",
  description: "Porfolio of Pretom Das Hira",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="root-layer text-primary">{children}</body>
    </html>
  );
}
