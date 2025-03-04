'use client' // converting in client component

import { useState } from "react"

export default function DashboardPage(){

    const [name , setName] = useState('')

    console.log('This is a client component');
    

    return(
        <div>
            <h1>Dashboard</h1>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <p>{name}, Dashboard</p>
        </div>
    )
}