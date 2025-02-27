import Image from "next/image";
import Hello from "../_components/hello";
import Link from "next/link";


export default function Home() {
  console.log("What am I? -- SERVER/CLIENT");

  return (
    <>
    <div
    style={{
      display:'flex',
      flexDirection:'column',
    }}
    >
    <h1 className="text-3xl">Welcome of to Next.Js</h1>
      <Hello />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/complex_dashboard">Complex Dashboard</Link>
      <Link href="/product-order">Product Order Page</Link>
      <Link href="/news/break-news-123?lang = en">Read in English</Link>
      <Link href="/news/break-news-123?lang = fr">Read in french</Link>
    </div>
     
    </>
  );
}


