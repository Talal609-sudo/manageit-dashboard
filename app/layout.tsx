import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'ManageIt — Admin Dashboard',
  description: 'Colorful, accessible admin dashboard UI (portfolio project).',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'ManageIt — Admin Dashboard',
    description: 'Colorful, accessible admin dashboard UI (portfolio project).',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ManageIt — Admin Dashboard',
    description: 'Colorful, accessible admin dashboard UI (portfolio project).',
    images: ['/og.png'],
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main" className="container my-6">{children}</main>
        <footer className="container mb-8">
          <div className="card px-4 py-4 text-sm text-black/70 dark:text-white/70">© {new Date().getFullYear()} ManageIt.</div>
        </footer>
      </body>
    </html>
  )
}
