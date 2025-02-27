"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const page = () => {
  
  const pathname = usePathname();

  return (
    <>
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
     <h1>Dashboard</h1>
    
      </div>

    </>
    
  )
}

export default page