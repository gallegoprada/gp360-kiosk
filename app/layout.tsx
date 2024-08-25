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
        <script
          async
          src="https://unpkg.com/pwacompat"
          crossOrigin="anonymous"
        ></script>

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
