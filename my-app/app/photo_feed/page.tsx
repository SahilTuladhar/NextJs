import './style.css'


import React from 'react'
import Link from 'next/link'
import images from '../photo_feed/images'
import Image from 'next/image'


export default function HomePage(){

    return(
        <>
        <div className="outer-box">
            <h1>Images</h1>
        <div className="imageGrid">

            {images.map(({id,src,name}) => (
                <Link key = {id} href={`/photo_feed/${id}`}>
                <Image 
                  alt = {name}
                  src={src}
                  className='image'
                />
                </Link>
            ))
            
            }
        
        </div>
        </div>
        </>
    )

}