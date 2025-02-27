'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

export default function page() {

 

  const router = useRouter()

  const handleClick = () => {
    console.log('Order Has Been Placed');
    router.push('/') //Redirects to home
 
  }

  return (

    <div>
       <h1>Product Order page</h1>
       <button onClick={handleClick} style={{
        backgroundColor: 'blue',
        padding:'1rem'
       }}>Place Your Order</button>
        
    </div>

  )
}

