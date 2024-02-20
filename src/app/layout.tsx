import type { Metadata } from "next";
/* import { Ubuntu } from 'next/font/google' */
import "./globals.css";

/* const ubuntu = Ubuntu({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
}) */

export const metadata: Metadata = {
  title: "Apple Vision Pro",
  description: "You’ve never seen everything like this before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >{children}</body>
    </html>
  );
}
/* className={ubuntu.className} */