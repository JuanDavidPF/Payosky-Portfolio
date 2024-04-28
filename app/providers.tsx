'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ViewTransitions } from 'next-view-transitions'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ViewTransitions>
        {children}
      </ViewTransitions>
    </NextUIProvider>
  )
}