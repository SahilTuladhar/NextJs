

import Link from "next/link";


type Props = {
  params: Promise<{ articleID: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
};

export default async function Article({ params, searchParams }: Props) {
  const { articleID } = await(params);
  const { lang } = await (searchParams);

   await new Promise((resolve) => {
      setTimeout(() =>{
          resolve("Inentional Delay");
      } , 3000)
    })

  return (
    <>
      <div>
        <h1>Article {articleID}</h1>
        <p> Written in {lang}</p>
      </div>
      <div>
        <Link href={`/news/${articleID}?lang=en`}>English</Link>
        <Link href={`/news/${articleID}?lang=es`}>Spanish</Link>
        <Link href={`/news/${articleID}?lang=fr`}>french</Link>
      </div>
    </>
  );
}

//for cient component

// 'use client'

// import Link from "next/link";
// import { use } from "react";

// type Props = {
//   params: Promise<{ articleID: string }>;
//   searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
// };

// export default  function Article({ params, searchParams }: Props){
//   const { articleID } =  use(params);
//   const { lang } = use(searchParams);

//   return (
//     <>
//       <div>
//         <h1>Article {articleID}</h1>
//         <p> Written in {lang}</p>
//       </div>
//       <div>
//         <Link href = {`/news/${articleID}?lang=en`}>English</Link>
//         <Link href={`/news/${articleID}?lang=es`}>Spanish</Link>
//         <Link href={`/news/${articleID}?lang=fr`}>french</Link>
//       </div>
//     </>
//   );
// };
