import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rifah Sajida Deya | Full-Stack Engineer",
  description:
    "Junior Full-Stack Engineer at Periscale AI building Django, React/TypeScript and LangGraph AI features. CSE graduate and co-first author in IET Systems Biology.",
  keywords: [
    "Full-Stack Engineer",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "Python",
    "Django",
    "React",
    "Next.js",
    "LangGraph",
    "Rifah Sajida Deya",
  ],
  authors: [{ name: "Rifah Sajida Deya" }],
  openGraph: {
    type: "website",
    title: "Rifah Sajida Deya | Full-Stack Engineer",
    description:
      "Full-stack and AI engineer building production commerce and AI agent features.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
