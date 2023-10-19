import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ people }) {
  return (
  <>
    <Head>
        <title>Bone NEXT PDF | Home</title>
        <meta name="keywords" content="bone" />
    </Head>
    <div className='bg-white min-w-250 min-h-250 rounded-md text-center shadow-md flex justify-center items-center lg:min-w-500'>
      <div className='block p-10'>
        <h1 className='mt-3 font-bold text-3xl lg:text-5xl'>WELCOME</h1>
        <p className='mt-3 text-sm lg:text-xl'>This is a simple Example of Converting HTML to PDF in Next JS</p>
      </div>
    </div>
  </>
  )
}