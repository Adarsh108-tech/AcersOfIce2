import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const futura = localFont({
  src: [
    {
      path: "../public/fonts/futura/FuturaLT.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/futura/FuturaLT-Heavy.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/futura/FuturaLT-CondensedLight.woff2",
      weight: "700",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${futura.variable} ${inter.variable}`}>
      <body className="font-futura">{children}</body>
    </html>
  );
}
