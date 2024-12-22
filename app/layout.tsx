import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import Neko from "@/components/Neko";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAC",
  description: "Mac",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div
          className="flex flex-col min-h-screen"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          <Navbar />

          <Neko />

          <main className="flex-1 mt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
