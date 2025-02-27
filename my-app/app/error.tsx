'use client'

import { useRouter } from "next/navigation"
import { startTransition } from "react"

type Props = { 
    error : Error,
    reset : () => void,
}

export default function ErrorBoundary(
{error, reset} : Props
){

  const router = useRouter()

  const reload = () => {
    startTransition(() => {
        router.refresh();
        reset();
    })
  }

    return(

        <div>
            {error.message}
            <button onClick={reload} 
            style={{
                backgroundColor: 'blue',
                padding:'1rem'
            }}>Try Again</button>
            </div>
    )

}