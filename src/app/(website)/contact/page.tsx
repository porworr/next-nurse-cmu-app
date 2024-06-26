import Conan from "@/assets/conan.jpg";
import Image from "next/image";
import { YouTubeEmbed } from '@next/third-parties/google'
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact",
    description: "Generated by create next app",
    keywords: ['nurse','cmu','nextjs']
  };
export default function ContactPage() {
  return (
    <main>
        <div>
            <Link href="/">Back to Home Page</Link>
        </div>
        <div>
            <Image src={Conan} alt="Conan" />
        </div>
        <hr />
        <div>
            <Image src="/conankung.jpg" 
            alt="ConanKung" 
            width={300} 
            height={200} 
            priority />
        </div>
        <hr />
        <div>
            <Image src="https://pbs.twimg.com/media/GO5GjmFaMAALm90?format=jpg&name=large" 
            alt="Seventeen"
            width={300} 
            height={200}
            priority />
        </div>
        <hr />
        <div>
            <YouTubeEmbed videoid="0BNhcBtAmP0" height={400} params="controls=0" />
        </div>
    </main>
  );
}