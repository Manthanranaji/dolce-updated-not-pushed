'use client';

import { use } from "react";
import { cards } from "@/app/data/menuItems";
import { notFound } from "next/navigation";
import Link from "next/link";
import useReveal from "@/app/hooks/Reveal";

export default function ItemPage({ params }) {
  const { slug } = use(params);
  const item = cards.find((c) => c.slug === slug);

  if (!item) return notFound();

  const ref = useReveal()
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()
  const ref4 = useReveal()

  return (
    <div className="min-h-screen bg-[#050D08] flex flex-col items-center px-4 py-10 text-center">
      <video
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-xl max-h-[60vh] rounded-8xl"
      />
      <span className="font-inter text-xs mt-8 text-white/50">
          {item.allergen}
      </span>
      <h1 ref={ref} className="opacity-0 font-cormorant italic text-5xl text-[#F0EDE6] mt-8">
        {item.name}
      </h1>
      <span ref={ref4} className="text-4xl font-cormorant text-white/70 mt-4">
      ₹{item.price}
      </span>
      <span ref={ref3} className="opacity-0 font-inter text-xs mt-4 px-8 italic text-[#C9A96E]/80 tracking-widest">
          {item.chef}
      </span>
      <p ref={ref1} className="opacity-0 text-sm font-inter tracking-wider text-[#7A9E87] mt-6 max-w-md font-extralight">
        {item.descr}
      </p>
      <Link
        href="/"
        ref={ref2}
        className="opacity-0 mt-8 text-[#C9A96E] font-inter tracking-widest text-sm"
      >
        ← Back to Menu
      </Link>
    </div>
  );
}