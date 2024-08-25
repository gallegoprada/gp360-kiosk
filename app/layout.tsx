import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GP 360 - Kiosk",
  description: "Kiosk de Gallego Prada 360",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* link manifest.json */}
        <link rel="manifest" href="/manifest.json" />
        {/* https://github.com/GoogleChromeLabs/pwacompat */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
