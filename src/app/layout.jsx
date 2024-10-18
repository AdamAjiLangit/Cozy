import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header/page";

export const metadata = {
  title: "Cozy",
  description: "Choose your cozy place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
