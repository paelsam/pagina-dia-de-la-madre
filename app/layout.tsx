import "@fontsource/merriweather/400.css"
import "@fontsource/merriweather/700.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feliz Día de la Madre :D',
  description: 'Hecho por Elkin Angulo a punta de Vibe Coding (V0)',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
