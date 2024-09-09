import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

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
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
