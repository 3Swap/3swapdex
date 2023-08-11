'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Table() {
  const router = useRouter();

  return (
    <>
      <div className="w-full">
        <table className=" styled-table bg-[rgb(51,51,51)] text-white overflow-hidden">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Network</th>
              <th>Supported</th>
              <th>Liquidity</th>
              <th>APY</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="hover:bg-[rgba(0,0,0,.5)] cursor-pointer"
              onClick={() => router.push('/farm/BUSD-BNB')}
            >
              <th className="text-left">
                <div className="flex gap-2 items-center">
                  <Image
                    src="https://icons-ckg.pages.dev/stargate-light/tokens/busd.svg"
                    alt="busd"
                    width={30}
                    height={30}
                  />
                  <h2 className="uppercase font-Poppins_400 text-[14px]">
                    busd
                  </h2>
                </div>
              </th>
              <td>
                <div className="flex bg-[green] w-fit p-1 px-2 text-[12px] items-center gap-1 rounded-[5px]">
                  <span>
                    <Image
                      src="https://icons-ckg.pages.dev/stargate-light/tokens/busd.svg"
                      alt="busd"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className="text-[#133a49]">BNB</span>
                </div>
              </td>
              <td></td>
              <td>$61,056,008.31</td>
              <td>3.96%</td>
            </tr>
            <tr
              className="hover:bg-[rgba(0,0,0,.5)] cursor-pointer"
              onClick={() => router.push('/farm/FRAX-ETH')}
            >
              <th className="text-left">
                <div className="flex gap-2 items-center">
                  <Image
                    src="https://icons-ckg.pages.dev/stargate-light/tokens/frax.svg"
                    alt="busd"
                    width={30}
                    height={30}
                  />
                  <h2 className="uppercase font-Poppins_400 text-[14px]">
                    FRAX
                  </h2>
                </div>
              </th>
              <td>
                <div className="flex bg-[rgb(183,231,183)] w-fit p-1 px-2 text-[12px] items-center gap-1 rounded-[5px]">
                  <span>
                    <Image
                      src="https://icons-ckg.pages.dev/stargate-light/tokens/eth.svg"
                      alt="ETH"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className="text-[#133a49]">Ethereum</span>
                </div>
              </td>
              <td></td>
              <td>$61,056,008.31</td>
              <td>5.96%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
