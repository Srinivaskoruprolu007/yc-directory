import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "YC-Directory",
  description: "A modern directory for new age Startup ideas and applications",
};
const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/WorkSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "200",
      style: "extralight",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "100",
      style: "thin",
    },
  ],
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
