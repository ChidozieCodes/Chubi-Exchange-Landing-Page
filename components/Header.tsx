"use client";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
  return (
    <header className="bg-muted py-6">
        <nav className="w-[90%] m-auto flex items-center justify-between text-white">
            <Link href="/" className="" data-aos="fade-right">
                <Image
                  src="/images/header/chubi logo.png"
                  alt="Chubi Logo"
                  width={150} // fallback width for SEO/layout
                  height={50}
                  className="w-[80px] h-auto sm:w-[120px] md:w-[150px]"
                />
            </Link>
            <button className="py-2 px-4 md:p-4 bg-primary text-white font-bold rounded-2xl cursor-pointer" data-aos="fade-left">Download</button>
        </nav>
    </header>
  );
}