import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
=======
    <html lang="en">
      <head>
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
<<<<<<< HEAD
      <body className="overflow-x-hidden">{children}</body>
=======
      <body>{children}</body>
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
    </html>
  )
}
