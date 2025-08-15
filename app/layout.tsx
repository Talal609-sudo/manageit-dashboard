// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
export const viewport = { width: 'device-width', initialScale: 1 };
import Header from '@/components/Header';

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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Start in dark mode on first paint
    <html lang="en" className="dark">
      {/* Flex layout so footer stays inside; bottom padding to avoid clipping */}
      <body className="min-h-[100dvh] flex flex-col pb-14 md:pb-16">
        <Header />
        <main id="main" className="container my-6 flex-1">{children}</main>
        <footer className="container mt-15 md:mt-17">
          <p className="px-2 py-3 md:py-4 text-center text-sm text-black/65 dark:text-white/65">
            © {new Date().getFullYear()} ManageIt.
          </p>
        </footer>
      </body>
    </html>
  );
}