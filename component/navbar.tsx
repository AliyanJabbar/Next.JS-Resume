import Link from "next/link";
export default function NavBar() {
  return (
    <div className="bg-black">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </div>
  );
}


