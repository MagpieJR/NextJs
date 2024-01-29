'use client'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import spaceman from  '@/public/images/wp2841676-cool-pc-wallpapers.jpg'
import { Metadata } from 'next'
// import HeavyCompent from './components/HeavyCompent'
import { useState } from 'react'
import dynamic from "next/dynamic"
// const HeavyComponent = dynamic(
//   () => import('./components/HeavyCompent'),
//   { 
//     ssr: false,
//     loading: () => <p>Loading...</p>
//   })
// import _ from 'lodash'

export default  function Home() {
  const [ isVisible, setVisible] = useState(false);

  return (
    <main className='relative h-screen'>
      {/* <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> */}


      {/* <Image src={spaceman} alt="spaceman"/> */}
      {/* <Image 
        src="https://bit.ly/react-cover"
        alt="spaceman"
        // width={300}
        // height={170}
        fill={true}
        // style={ {objectFit: 'cover'}}
        className='object-cover'
        // sizes="100vw"
        sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
        quality={75}
        priority
      /> */}

      <h1 className='text-4xl'>Hello World</h1>
      {/* <button onClick={() => setVisible(true)}>Show</button>
      { isVisible && <HeavyComponent />} */}

      <button onClick={async () => {
        const _ = (await import('lodash')).default;

        const users = [
          { name: 'c' },
          { name: 'b' },
          { name: 'a' },
        ];

        const sorted = _.orderBy(users, ['name']);
      }}>Show</button>
    </main>
  )
}

// export const metadata: Metadata = {
//   title: '...'
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.name'
//   }
// }