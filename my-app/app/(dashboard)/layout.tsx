'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

function getRandom(count : number){
  return Math.floor(Math.random() * count)
}



const layout = ({children}:{children : React.ReactNode}) => {

const pathname = usePathname();

const [input , setInput] = useState('');



const rand_num = getRandom(2);

 if (rand_num === 1){
  throw new Error("Error Loading user");
 }


  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
        <h1 className='text-3xl'>This is Dashboard Navigation Bar</h1>
        {children}

        <input type="Enter Something"
         value={input} 
         onChange = {(e) => {
          setInput(e.target.value);
        }}
        style={{
          color:'black'
        }} />

    

        <Link 
     href='/dashboard/analytics'
     style={{
      color : pathname === '/dashboard/analytics' ? 'blue' : 'white',
      fontWeight : pathname === '/dashboard/anayltics' ? 'bold' : 'normal',
      textDecoration : pathname === '/dashboard/analytics' ? "underline" : 'none'
     }}
     >Analytics</Link>
     <Link href='/dashboard/users'
     style={{
      color : pathname === '/dashboard/users' ? 'blue' : 'white',
      fontWeight : pathname === '/dashboard/users' ? 'bold' : 'normal',
      textDecoration : pathname === '/dashboard/users' ? "underline" : 'none'
     }}
     >Users</Link>
    </div>
  )
}

export default layout