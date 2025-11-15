// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UINLP - University of Ibadan NLP Unit",
  description:
    "Advancing language technology for African languages and digital inclusion.",
  keywords:
    "NLP, AI, African languages, Yoruba, Igbo, Hausa, University of Ibadan, digital inclusion",
  openGraph: {
    title: "UINLP",
    description: "Connecting Africa through language technology",
    url: "https://uinlp.ui.edu.ng",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900">
        {" "}
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
