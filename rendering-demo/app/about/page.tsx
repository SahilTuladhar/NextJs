// server component (by default)

import { cookies } from "next/headers";

export default async function AboutPage(/* params*/){

 const cookieStore  = await cookies() // triggers dynamic rendering
 const next = cookieStore.get('theme')

 console.log(next);
 

 console.log('This is a server component');

 return(
    <div>About Page {new Date().toLocaleTimeString()}</div>
 )
 
}