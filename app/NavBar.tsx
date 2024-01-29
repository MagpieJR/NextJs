'use client'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const {status, data: session } = useSession();

  return (
    <div className='flex bf-slate-200 p-5'>
        <Link href="/" className='mr-5'>Next.js</Link>
        <Link href="/users" className='mr-5'>Users</Link>
        { status === 'loading' && <div>Loading</div>}
        { status === 'authenticated' && 
          <div className='mr-5'>
            { session.user!.name }
            <Link href="/api/auth/signout" className='ml-3'> Sign Out </Link>
          </div>
        }
        { status === 'unauthenticated' && <Link href="/api/auth/signin"> Login </Link>}


    </div>
  )
}

export default NavBar