import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nector",
  description: "Fresh groceries delivered to your doorstep",
  icons: {
    icon: "/assets/icons/carrot-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
