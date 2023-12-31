import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Prov from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Users",
  description: "smart solutions ai, intership task ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Prov>
        <body className={inter.className}>{children}</body>
      </Prov>
    </html>
  );
}
