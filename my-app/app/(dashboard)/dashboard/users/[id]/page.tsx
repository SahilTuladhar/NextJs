// import React from 'react'

// const page = ({params} : {params :{ id:string}}) => {
  
//   const {id} = params;

//   return (
//     <div><h1 className='text-3xl'>Hi, User {id}</h1></div>
//   )
// }

// export default page

import { Metadata } from "next"
import { resolve } from "path"
import { notFound , redirect} from "next/navigation";

export const generateMetadata = async({params} : Props) : Promise<Metadata> => {
  const id = (await params).id;
  return {
   title:{
    absolute :  `User ${id} page`,
   }
  }
}

function getRandom(count : number){
  return Math.floor(Math.random() * count)
}


type Props = { 
  params : {id : string} ;
}

export default async function page({
params,
}: Props){

 const rand_num = getRandom(2);

 if (rand_num === 1){
  throw new Error("Error Loading user");
 }

 const userId = (params).id
 if (parseInt(userId) > 4){
  redirect('/')
 }


 return(
  <div>
    <h1>Hi User, {userId}</h1>
  </div>
 )
}