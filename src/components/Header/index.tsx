import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <>
      <div className="h-[80px] bg-[#000]  w-full md:flex hidden">
        <div className="container flex items-center justify-between gap-5 w-full mx-auto">
          <div className="left">
            <h1>3swap Dex</h1>
          </div>
          <div className="flex gap-10 text-[rgba(255,255,255,0.5)] font-Poppins_600">
            <Link href="/" className="">
              Transfer
            </Link>
            <Link href="/">Pool</Link>
            <Link href="/">Farming</Link>
            <Link href="/">Stake</Link>
            <Link href="/">Overview</Link>
          </div>
          <div className="right">
            <div className="btn bg-transparent capitalize h-[45px] min-h-fit border-[rgba(255,255,255,0.5)] text-[rgba(255,255,255,0.7)] hover:text-black">
              connect wallet
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
