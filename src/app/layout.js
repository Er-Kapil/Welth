import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {ClerkProvider} from "@clerk/nextjs";
import React from "react";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>Made with ❤️ by Kaps</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
