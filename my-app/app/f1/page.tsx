import Link from "next/link";

export default function f1Page() {
  return (
    <div>
      <h1>f1 Page</h1>
      <Link href="/f1/f2">Go to f2</Link>
      <Link href="/f3">Go to f3</Link>
    </div>
  );
}
