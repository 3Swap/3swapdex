import Card from '@/components/Card';
import Hero from '@/components/Hero';
import Table from '@/components/Table';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="py-20">
        <div className="container w-[85%] mx-auto">
          <div>
            <div className="flex gap-5 pb-5 font-Inter_600 text-[rgba(255,255,255,0.7)] text-[12px] md:text-[16px]">
              <Link href="/">Your Farms</Link>
              <Link href="/">Pending rewards</Link>
              <Link href="/">Available</Link>
              <Link href="/">Top Farms</Link>
            </div>
            <div className="flex w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2">
                <Card
                  token="USDT"
                  apy="9.41%"
                  lpt="0.0"
                  liquidity="$1.7M"
                  tag={['by metis', 'metis']}
                  tokenImg="https://icons-ckg.pages.dev/stargate-light/tokens/usdt.svg"
                />
                <Card
                  token="USDT"
                  apy="9.41%"
                  lpt="0.0"
                  liquidity="$1.7M"
                  tag={['by metis', 'metis']}
                  tokenImg="https://icons-ckg.pages.dev/stargate-light/tokens/usdt.svg"
                />
                <Card
                  token="USDT"
                  apy="9.41%"
                  lpt="0.0"
                  liquidity="$1.7M"
                  tag={['by metis', 'metis']}
                  tokenImg="https://icons-ckg.pages.dev/stargate-light/tokens/usdt.svg"
                />
                <Card
                  token="USDT"
                  apy="9.41%"
                  lpt="0.0"
                  liquidity="$1.7M"
                  tag={['by metis', 'metis']}
                  tokenImg="https://icons-ckg.pages.dev/stargate-light/tokens/usdt.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" md:py-20 ">
        <div className="container w-[90%] md:w-[85%] mx-auto overflow-x-scroll md:overflow-auto">
          <div className="flex justify-between md:items-center flex-col md:flex-row ">
            <div className="flex gap-5 font-Inter_600 text-[rgba(255,255,255,0.7)]">
              <Link href="/">All Farms</Link>
              <Link href="/">Your Farms</Link>
            </div>
            <div className="flex items-center md:justify-between gap-5 my-2 ">
              <div className="flex">
                <div>
                  <span className="text-[16px] text-[rgba(255,255,255,.7)]">
                    Token
                  </span>
                  <span className="py-3 flex justify-between gap-5 items-center px-3 bg-[rgb(51,51,51)] rounded-[15px] text-white cursor-pointer ">
                    <h1 className="text-[14px]">All Tokens</h1>
                    <FiChevronDown />
                  </span>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="text-[16px] text-[rgba(255,255,255,.7)]">
                    Network
                  </span>
                  <span className="py-3 flex justify-between gap-5 items-center px-3 bg-[rgb(51,51,51)] rounded-[15px] text-white cursor-pointer ">
                    <h1 className="text-[14px]">All Chains</h1>
                    <FiChevronDown />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <Table />
          </div>
        </div>
      </section>
    </main>
  );
}
