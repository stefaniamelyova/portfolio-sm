import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Stefania Alberto — Portfolio",
  description: "Student · Designer · Developer based in The Netherlands.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-bg">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
