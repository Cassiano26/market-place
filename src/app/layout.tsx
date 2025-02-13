import type { Metadata } from "next"
import { DM_Sans, Poppins } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ['latin'],
  weight: ['700']
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: "Market Place"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${poppins.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
