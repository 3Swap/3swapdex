import Image from 'next/image';
import React from 'react';

type Card = {
  token: string;
  apy: string;
  lpt: string | number;
  liquidity: string;
  tag?: any[];
  tokenImg?: any;
};
export default function Card({
  token,
  apy,
  lpt,
  liquidity,
  tag,
  tokenImg,
}: Card) {
  return (
    <>
      <div className="p-3 bg-[#232323] text-[#ffffff] flex flex-col rounded-[10px] border border-transparent hover:border hover:border-gray-100 hover:cursor-pointer">
        <div className="flex justify-between items-center">
          <span>
            <Image src={tokenImg} alt="token image" width={30} height={30} />
          </span>
          <div className="flex gap-1">
            {tag?.map((t, i) => {
              return (
                <>
                  <span
                    className="p-[5px] py-[3px] text-[12px] bg-[green] flex items-center rounded"
                    key={i}
                  >
                    {t}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between py-3">
          <div className="leading-tight">
            <span className="text-[13px] text-[rgba(255,255,255,0.5)]">
              Farm
            </span>
            <h1 className="text-[20px] font-bold text-white">{token}</h1>
          </div>
          <div className="leading-tight text-right">
            <span className="text-[13px] text-[rgba(255,255,255,0.5)]">
              APY
            </span>
            <h1 className="text-[20px] font-bold text-white">{apy}</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="leading-tight">
            <span className="text-[13px] text-[rgba(255,255,255,0.5)]">
              LPT Available to Stake
            </span>
            <h1 className="text-[15px] font-bold text-white">{lpt}</h1>
          </div>
          <div className="text-right leading-tight">
            <span className="text-[13px] text-[rgba(255,255,255,0.5)]">
              Liquidity
            </span>
            <h1 className="text-[15px] font-bold text-white">{liquidity}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
