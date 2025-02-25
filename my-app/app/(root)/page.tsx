import Image from "next/image";
import Hello from "../_components/hello";


export default function Home() {

  console.log('What am I? -- SERVER/CLIENT')

  return (
    <>
     <h1 className="text-3xl">Welcome of to Next.Js</h1>
     <Hello/>
    </>
    
  );
}
