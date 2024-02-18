import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "./context/VideoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "video player",
  description: "video player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VideoProvider>{children}</VideoProvider>
      </body>
    </html>
  );
}
