import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "tomasvana10 | Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider><Nav />{children}<Footer /></ThemeProvider>
      </body>
    </html>
  );
}
