import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Currículo - Robson Albuquerque",
  description: "Desenvolvedor Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
