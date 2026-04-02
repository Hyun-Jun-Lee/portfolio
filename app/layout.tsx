import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이현준 | Product Engineer",
  description:
    "Product Engineer 이현준의 포트폴리오. FastAPI, LangChain, Django, AWS 기반의 백엔드 및 AI 시스템 개발.",
  openGraph: {
    title: "이현준 | Product Engineer",
    description:
      "Product Engineer 이현준의 포트폴리오. FastAPI, LangChain, Django, AWS 기반의 백엔드 및 AI 시스템 개발.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
