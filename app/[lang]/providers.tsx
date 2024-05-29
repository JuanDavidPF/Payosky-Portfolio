"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ViewTransitions>{children}</ViewTransitions>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
