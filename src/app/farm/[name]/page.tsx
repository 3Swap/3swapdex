'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function TokenPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(pathname);
  }, [pathname, searchParams, url]);

  return (
    <>
      <div className="container w-full mx-auto text-[#CCCCCC]">
        <div className="flex lg:w-1/3 p-5 mx-auto flex-col">
          <div className="flex gap-3 pb-2 breadcrumbs font-Poppins_600">
            <ul>
              <li>
                <Link href="/pool">Pool</Link>
              </li>
              <li>
                <Link
                  href={`/farm/${url?.split('/')[2]?.split('-')[0]}-${
                    url?.split('/')[2]?.split('-')[1]
                  }`}
                >
                  {url?.split('/')[2]?.split('-')[0]}
                  <span className="text-[10px]">
                    {url?.split('/')[2]?.split('-')[1]}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/farm">Farms</Link>
              </li>
              <li>
                <Link href="/farm">
                  {url?.split('/')[2]?.split('-')[0]}
                  <span className="text-[10px]">
                    {url?.split('/')[2]?.split('-')[1]}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-[#232323] p-5 rounded-[10px]">
            <div className="flex justify-between">
              <span className="font-[600] font-Poppins_600 text-[18px] text-[#fff]">
                Farm {url.split('/')[2]?.split('-')[0]}
              </span>
              <span className="bg-[rgb(248,198,198)] text-[rgb(141,22,23)] flex items-center rounded-[5px] p-1 text-[12px]">
                {' '}
                <span>
                  <Image
                    src="https://icons-ckg.pages.dev/stargate-outline/networks/avalanche.svg"
                    alt="token"
                    width={20}
                    height={20}
                  />
                </span>
                Avalanche
              </span>
            </div>
            <div className="py-3 flex gap-5 text-[#fff] text-[20px] font-Poppins_400">
              <Link href="/">Stake</Link>
              <Link href="/">Unstake</Link>
            </div>
            <div className="flex flex-col py-2">
              <span className="text-[12px] pb-1">Select Amount</span>
              <div className="flex items-center justify-between bg-[#1a1a1a] p-3 rounded-[8px] text-[#CCCCCC] border border-[#323232]">
                <div className="flex items-center gap-2 w-full">
                  <span>
                    <Image
                      src="https://icons-ckg.pages.dev/stargate-light/tokens/frax.svg"
                      width={20}
                      height={20}
                      alt="token"
                    />
                  </span>
                  <input
                    type="text"
                    name=""
                    id=""
                    defaultValue="0.0"
                    className="bg-transparent w-full outline-none"
                  />
                </div>
                <div>
                  <div className="text-[12px] p-[5px]  flex items-center border border-[#323232] rounded-md cursor-pointer">
                    MAX
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[50px]">
              <div className="flex bg-[#323232] justify-between p-4 rounded-[5px] text-[0.875rem] text-[#CCCCCC] mb-2">
                <span>Pending rewards</span>
                <span>-</span>
              </div>
              <div className="flex bg-transparent justify-between p-4 rounded-[5px] text-[0.875rem] text-[#CCCCCC] mb-2">
                <span>LPT Staked</span>
                <span>-</span>
              </div>
              <div className="flex bg-[#323232] justify-between p-4 rounded-[5px] text-[0.875rem] text-[#CCCCCC] mb-2">
                <span>Share of Pool</span>
                <span>-</span>
              </div>
              <div className="flex bg-transparent justify-between p-4 rounded-[5px] text-[0.875rem] text-[#CCCCCC] mb-2">
                <span>APY</span>
                <span>7.73%</span>
              </div>
              <div className="flex bg-[#323232] justify-between p-4 rounded-[5px] text-[0.875rem] text-[#CCCCCC] mb-2">
                <span>Pool Liquidity</span>
                <span>1,322,186.12</span>
              </div>
            </div>
            <div className="flex py-5">
              <div className="btn w-full">Connect Wallet</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
