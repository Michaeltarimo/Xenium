import Head from 'next/head'
import { useRouter } from 'next/router';
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import { AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} bg-dark text-white w-full min-h-screen`}>
        <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  )
}
