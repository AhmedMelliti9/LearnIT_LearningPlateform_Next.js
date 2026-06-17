import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnIT — Free IT Learning Resources",
  description:
    "Discover the best free IT learning resources on YouTube. Curated tutorials and courses for HTML, CSS, JavaScript, React, Python, Java, and more.",
  keywords: [
    "learn programming",
    "free coding tutorials",
    "YouTube IT courses",
    "web development",
    "LearnIT",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
