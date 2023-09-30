import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import AppProvider from '@/components/others/app-provider';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shoes World. Just Do it.',
  description: 'Shoes World. Just Do it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ToastContainer />

        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
