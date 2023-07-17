import Image from "next/image";
import HeroImage from '../public/hero.webp'
import Logo from "../components/Logo/Logo";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="hero" className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />
        <p>AI-powered SaaS platform for building blog-posts Lightning fast!</p>
        <Link href="/post/new" className="btn mt-2">Begin</Link>
      </div>
    </div>
  );
}
