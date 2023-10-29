import "./globals.css";
import Header from "./components/global/Header";

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
      <body className="root-layer" suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
