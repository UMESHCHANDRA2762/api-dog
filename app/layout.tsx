import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Bootstrap and Bootstrap Icons CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apidog UI Clone (Bootstrap)",
  description: "A replica of the Apidog UI with Next.js and Bootstrap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}