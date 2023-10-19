import Image from 'next/image'
import { Inter } from 'next/font/google'
import GeneratePDF from '@/components/GeneratePDF'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ people }) {
  return (
  <>
      <Head>
          <title>Bone NEXT PDF | Home</title>
          <meta name="keywords" content="bone" />
      </Head>
      <div className="min-h-screen">
          <h1 className='text-center text-4xl font-bold pt-4 mb-3'>Converting HTML Table to PDF</h1>

          {/* People */}
          <div className='text-center'>
            <ul>
              {people.map(({name},i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>

          <GeneratePDF person={people}/>
      </div>
  </>
  )
}

// Get Data
export async function getStaticProps(){
  const res = await fetch("http://localhost:3000/api/people")

  const people = await res.json()

  return {
    props: {
      people
    }
  }
}