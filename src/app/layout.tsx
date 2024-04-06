import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto Next",
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
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
