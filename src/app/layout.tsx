import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mortydex",
  description: "Desenvolvido por Lucas Cintra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
