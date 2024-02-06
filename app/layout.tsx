import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Form Mockup",
  description: "A simple one page contact form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-6xl min-h-screen items-center justify-center mx-auto flex flex-col h-full w-full text-sm font-medium`}
      >
        {children}
      </body>
    </html>
  );
}
