import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";



export const metadata: Metadata = {
  title: "Payosky - Portfolio",
  description: "Portfolio for developer Juan Payan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
