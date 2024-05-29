import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import "./globals.css";
import { Providers } from "./providers";
import MainNavbar from "./components/molecules/MainNavbar/MainNavbar";

export const metadata: Metadata = {
  title: "Payosky - Portfolio",
  description: "Juan Payan's Portfolio",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} className="text-foreground bg-background">
      <body>
        <Providers>
          <MainNavbar />
          <main className="flex justify-center">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
