import React from 'react';

export default function Hero() {
  return (
    <>
      <div className="container py-20 w-[85%] mx-auto">
        <h1 className="text-[40px] text-white font-[700] font-Inter_600">
          You don’t have available assets to farm in your wallet.
        </h1>
        <p className="text-[12px] text-[#222] font-Poppins_400 text-[rgba(255,255,255,0.5)]">
          Stargate liquidity providers can farm their LP tokens in exchange for
          STG rewards. Earn STG and become a member of the Stargate community.
        </p>
      </div>
    </>
  );
}
