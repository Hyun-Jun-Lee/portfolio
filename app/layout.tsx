import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Navigation } from "./components/Navigation";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이현준 | Backend & AI Engineer",
  description:
    "기획부터 배포까지, LLM 기반 프로덕트를 직접 설계하고 운영하는 Backend & AI 엔지니어입니다.",
  metadataBase: new URL("https://juniverse.pro"),
  openGraph: {
    title: "이현준 | Backend & AI Engineer",
    description:
      "기획부터 배포까지, LLM 기반 프로덕트를 직접 설계하고 운영하는 Backend & AI 엔지니어입니다.",
    url: "https://juniverse.pro",
    siteName: "이현준 Portfolio",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/profile.jpg", width: 630, height: 630, alt: "이현준" }],
  },
  twitter: {
    card: "summary",
    title: "이현준 | Backend & AI Engineer",
    description:
      "기획부터 배포까지, LLM 기반 프로덕트를 직접 설계하고 운영하는 Backend & AI 엔지니어입니다.",
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
