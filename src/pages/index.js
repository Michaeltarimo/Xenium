import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Image from 'next/image';
import pulse from '@/../public/img/pulse.png';
import pulsex from '@/../public/img/pulsex.png';
import hex from '@/../public/img/hex.png';
import inc from '@/../public/img/inc.png';
import coinstack from '@/../public/img/coinstack.png';
import flame from '@/../public/img/flame.png';
import logo from '@/../public/img/logo.png';
import AnimatedText from '@/components/AnimatedText';
import xeniumAbi from '../xeniumAbi';
import WalletConnect from '../components/WalletConnect';


const IndexPage = () => {
  return (

    <>

      <main className="flex items-center justify-center bg-dark pb-10">
        <div className="flex items-start flex-row justify-start w-full min-h-screen md:hidden">
          <div className="flex py-2 flex-col items-start pl-4 justify-start bg-gradient-to-tr from-dark via-darker to-darkest min-h-screen w-1/4 rounded-b-xl">
            <nav className="w-full flex items-center justify-center gap-3">
              <div>
                <Image src={logo} alt="logo" className="w-7" />
              </div>
              <h1 className="text-lg font-extrabold text-white">Xenium</h1>
            </nav>
            <div className="flex flex-col items-start justify-start pt-24">
              <h1 className="font-medium text-lg text-gray-200">Burn Xen to mint Xem</h1>
              <h1 className="text-sm font-semibold text-gray-400">(1 batch = 350,000,000 XEN)</h1>
            </div>
            <div className="flex flex-col border border-gray-300 items-center justify-start rounded-lg bg-blue-400/20 w-[85%] mt-5 h-[200px]">
              <h1 className="text-xs font-bold text-gray-300 mt-2">350,000,000.00 XEN</h1>
              <h1 className="text-[12px] text-gray-300 font-bold">Xen to burn</h1>
              <div className="flex items-center justify-center mt-4 w-full p-2 gap-2">
                <nav
                  className="flex font-bold hover:bg-gray-400/50 cursor-pointer transition transition-transform duration-300 hover:scale-105 text-lg font-extrabold text-red-500 items-center justify-center border border-gray-400 w-[60px] h-[50px]"
                >
                  <h1 className="cursor-pointer">-</h1>
                </nav>
                <input
                  type="number"
                  required
                  className="flex outline-none bg-dark px-3 text-xs font-bold  w-full h-[50px]" />

                <nav
                  className="flex font-bold hover:bg-gray-400/50 cursor-pointer transition transition-transform duration-300 hover:scale-105 text-lg font-extrabold text-green-500 items-center justify-center border border-gray-400 w-[60px] h-[50px]"
                >
                  <h1 className="">+</h1>
                </nav>
              </div>
              <div className="flex flex-col pb-2 text-sm font-bold px-2 mt-5 w-full items-center justify-center">
                <h1>Protocal Fee:</h1>
                <h1>150000.00</h1> {/* Always display gas used for the fee */}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start border border-gray-300 rounded-lg bg-blue-400/20 w-[85%] mt-5 h-[200px]">
              <nav className="flex w-full text-sm font-bold py-4 px-2 items-start justify-between">
                <h1>Additional fee</h1>
                <input
                  type="number"
                  className="text-dark bg-gray-300 px-2 outline-none py-1 rounded-sm w-[50%]"
                />
              </nav>
              <nav className="flex w-full text-sm font-bold py-4 px-2 items-start justify-start">
                <h1>CP:</h1>
                <h1>000000000000000</h1>
              </nav>
              <div className="flex w-full text-xs font-bold py-4 px-2 items-center justify-between">
                <h1>Pay in:</h1>
                <div className="flex items-center gap-5 justify-center">
                  <button
                    className="transition transition-transform duration-300 hover:scale-105"
                  >
                    <Image src={pulse} alt="coin" className="w-6" />
                  </button>
                  <button
                    className="transition transition-transform duration-300 hover:scale-105"
                  >
                    <Image src={pulsex} alt="coin" className="w-6" />
                  </button>
                  <button
                    className="transition transition-transform duration-300 hover:scale-105"
                  >
                    <Image src={hex} alt="coin" className="w-8" />
                  </button>
                  <button
                    className="transition transition-transform duration-300 hover:scale-105"
                  >
                    <Image src={inc} alt="coin" className="w-6" />
                  </button>
                </div>
              </div>


            </div>
            <button
              className="flex items-center justify-center transition transition-transform duration-500 hover:scale-105 font-bold text-sm py-3 rounded-3xl border border-gray-400 bg-black mt-10 w-[85%]"
            >
              <b className="text-green-500">Mint</b>&<b className="text-red-500">Burn</b>
            </button>
          </div>
          <div className="flex flex-col items-start justify-start w-3/4 min-h-screen">
            <nav className="flex w-full py-[20px] px-6 font-extrabold text-white text-base justify-between items-center">
              <h1>Dashboard</h1>
              <div>
              </div>
            </nav>
            <div className="flex flex-col items-start justify-start w-full mt-12 h-full gap-10">
              <div className="flex flex-row gap-4 items-start justify-start w-full h-full px-6">
                {/**First half */}
                <div className="flex flex-col w-[70%] gap-4 items-start justify-start">
                  {/**First Box */}
                  <nav className="flex items-center justify-between border border-gray-400 shadow-sm shadow-green-300 rounded-lg bg-gradient-to-br from-sky-500/40 to-green-300/40 px-4 w-full h-[250px]">
                    <div className="flex flex-col w-full items-center justify-center gap-10 text-gray-200 font-medium text-sm">
                      <nav className="flex w-full flex-col items-center justify-center gap-2">
                        <h1>Xem minted in current cycle</h1>
                        <h1 className="font-bold text-white text-sm">95 XEM</h1>
                      </nav>
                      <nav className="flex w-full flex-col items-center justify-center gap-2">
                        <h1>Total Xen Burnt</h1>
                        <h1 className="font-bold text-white text-sm">234,263  XEN</h1>
                      </nav>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center gap-10 text-gray-200 font-medium text-sm">
                      <nav className="flex w-full flex-col items-center justify-center gap-2">
                        <h1>Total Xem Minted</h1>
                        <h1 className="font-bold text-white text-sm">19235 XEM</h1>
                      </nav>
                      <nav className="flex w-full flex-col items-center justify-center gap-2">
                        <h1>Total Xem Staked</h1>
                        <h1 className="font-bold text-white text-sm">134,362  XEM</h1>
                      </nav>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center gap-10 text-gray-200 font-medium text-sm">
                      <nav className="flex w-full flex-col items-center justify-center gap-2">
                        <h1>Total Xem Staked</h1>
                        <h1 className="font-bold text-white text-sm">214,955 XEM</h1>
                      </nav>
                      <nav className="flex w-full flex-col items-center justify-center gap-2">
                        <h1>Total Xem Unstaked</h1>
                        <h1 className="font-bold text-white text-sm">2,149  XEM</h1>
                      </nav>
                    </div>
                  </nav>
                  {/**End of First Box */}

                  {/**Second Box */}
                  <nav className="flex items-center justify-between border border-gray-400 rounded-lg bg-gradient-to-br from-green-300/50 to-dark px-4 w-full h-auto">
                    <div className="flex flex-col w-full items-center justify-center gap-10 text-white font-normal text-sm p-5">
                      <h1 className="font-bold">Total fees collected</h1>
                      <div className="grid grid-cols-3 gap-10 w-full items-center justify-center p-4">
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-2">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={pulse} alt="pulse logo" className="w-6" />
                            <h1>Pulse</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">9,214,955,346</h1>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-2">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={pulsex} alt="pulse logo" className="w-6" />
                            <h1>PulseX</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">6,638,245,346</h1>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-1">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={hex} alt="pulse logo" className="w-8" />
                            <h1>Hex</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">637,436,573</h1>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-2">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={inc} alt="pulse logo" className="w-6" />
                            <h1>Inc</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">821,536</h1>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-1">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={logo} alt="pulse logo" className="w-8" />
                            <h1>Xem</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">1,346</h1>
                        </nav>
                      </div>
                    </div>
                  </nav>
                  {/**End of Second Box */}

                  {/**Third Box */}
                  <nav className="flex items-center justify-between border border-gray-400 rounded-lg bg-gradient-to-br to-green-300/50 from-dark px-4 w-full h-auto">
                    <div className="flex flex-col w-full items-center justify-center gap-10 text-white font-normal text-sm p-5">
                      <div className="w-full flex items-center justify-between px-10">
                        <h1 className="text-transparent">.</h1>
                        <div className="flex items-center justify-center">
                          <h1>Unclaimed fees</h1>
                          <Image src={coinstack} alt="coin stack logo" className="w-10" />
                        </div>
                        <button className="bg-blue-400/40 hover:bg-dark/50 font-medium p-2 rounded-md text-xs">Claim all</button>
                      </div>                      
                      <div className="grid grid-cols-3 gap-10 w-full items-center justify-center p-4">
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-2">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={pulse} alt="pulse logo" className="w-6" />
                            <h1>Pulse</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">9,214,955,346</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-md px-4 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-2">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={pulsex} alt="pulse logo" className="w-6" />
                            <h1>PulseX</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">6,638,245,346</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-md px-4 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-1">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={hex} alt="pulse logo" className="w-8" />
                            <h1>Hex</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">637,436,573</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-md px-4 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-2">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={inc} alt="pulse logo" className="w-6" />
                            <h1>Inc</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">821,536</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-md px-4 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-5 bg-gray-400/10 rounded-md p-1">
                          <div className="flex w-full items-center justify-center gap-5">
                            <Image src={logo} alt="pulse logo" className="w-8" />
                            <h1>Xem</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">1,346</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-md px-4 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                      </div>
                    </div>
                  </nav>
                  {/**<nav className="flex items-center justify-between border border-gray-400 rounded-lg bg-darker w-full px-4 h-[250px]">
                    <div className="flex flex-col w-full items-center justify-between gap-10 text-gray-300 font-light text-sm">
                      <div className="w-full flex items-center justify-between px-10">
                        <h1 className="text-transparent">.</h1>
                        <div className="flex items-center justify-center">
                          <h1>Unclaimed fees</h1>
                          <Image src={coinstack} alt="coin stack logo" className="w-10" />
                        </div>
                        <h1>Claim all</h1>
                      </div>
                      <div className="flex w-full items-center justify-between px-4">
                        <nav className="flex flex-col items-center justify-center gap-7">
                          <div className="flex w-full items-center justify-between">
                            <Image src={pulse} alt="pulse logo" className="w-8" />
                            <h1>Pulse</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">1 , 9 5 5 , 3 4 6</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-3xl px-6 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-7">
                          <div className="flex w-full items-center justify-between">
                            <Image src={pulsex} alt="pulse logo" className="w-8" />
                            <h1>PulseX</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">4 9 9 , 3 4 6 </h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-3xl px-6 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-7">
                          <div className="flex w-full items-center justify-between">
                            <Image src={hex} alt="pulse logo" className="w-8" />
                            <h1>Hex</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">5 5 , 3 4 6</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-3xl px-6 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-7">
                          <div className="flex w-full items-center justify-between">
                            <Image src={inc} alt="pulse logo" className="w-8" />
                            <h1>Inc</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">3 4 6</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-3xl px-6 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                        <nav className="flex flex-col items-center justify-center gap-7">
                          <div className="flex w-full items-center justify-between">
                            <Image src={logo} alt="pulse logo" className="w-8" />
                            <h1>Xem</h1>
                          </div>
                          <h1 className="font-bold text-white text-sm">4 6</h1>
                          <button className="flex transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-1 rounded-3xl px-6 border border-gray-300 items-center justify-center">
                            Claim
                          </button>
                        </nav>
                      </div>
                    </div>
  </nav> */}
                  {/**End of Third Box */}

                </div>

                {/**Second half */}
                <div className="flex flex-col w-[30%] gap-4 items-start justify-start">

                  {/**Fourth box */}
                  <nav className="flex flex-col items-center justify-between border border-gray-400 rounded-lg p-4 bg-gradient-to-bl from-white/50 via-sky-500/40 to-darker/50 shadow-lg shadow-sky-500 w-full h-auto">
                    <div className="flex flex-col w-full items-center justify-between text-gray-200 font-light text-sm">
                      <div className="w-full flex items-center justify-center gap-8">
                        <h1 className="font-semibold">Cycle fees collected</h1>
                        <Image src={coinstack} alt="coin stack logo" className="w-10" />
                      </div>

                      <div className="flex flex-row items-start justify-between px-4 w-full pt-10 gap-5">
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                          <nav className="flex w-full flex-col gap-5 items-center justify-center bg-gray-400/10 rounded-md p-2">
                            <Image src={pulse} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">9,214,342</h1>
                          </nav>

                          <nav className="flex w-full flex-col gap-5 items-center justify-between bg-gray-400/10 rounded-md p-2">
                            <Image src={hex} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">345,564</h1>
                          </nav>

                          <nav className="flex w-full flex-col gap-5 items-center justify-between bg-gray-400/10 rounded-md p-2">
                            <Image src={logo} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">267</h1>
                          </nav>
                        </div>

                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                          <nav className="flex w-full flex-col gap-5 items-center justify-between bg-gray-400/10 rounded-md p-2">
                            <Image src={pulsex} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">2,354,543</h1>
                          </nav>

                          <nav className="flex w-full flex-col gap-5 items-center justify-between bg-gray-400/10 rounded-md p-2">
                            <Image src={inc} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">10,293</h1>
                          </nav>
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-center mt-5">
                        <button className="flex font-semibold transition transition-transform duration-300 hover:scale-105 text-sm text-gray-200 py-2 rounded-md px-4 border border-gray-300 items-center justify-center">
                          Distribute rewards
                        </button>
                      </div>
                    </div>
                  </nav>
                  {/**End of Fourth box */}

                  {/**Fifth box */}
                  <nav className="flex flex-col items-center justify-between border border-gray-400 rounded-lg p-4 bg-gradient-to-bl from-white/50 via-orange-500/40 to-darker/50 shadow-lg shadow-orange-500 w-full h-auto">
                    <div className="flex flex-col w-full items-center justify-between text-gray-200 font-light text-sm">
                      <div className="w-full flex items-center justify-center gap-8">
                        <h1 className="font-semibold">Buy and Burn Xem</h1>
                        <Image src={flame} alt="coin stack logo" className="w-10" />
                      </div>

                      <div className="flex flex-row items-start justify-between px-4 w-full pt-10 gap-5">
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                          <nav className="flex w-full flex-col gap-5 items-center justify-center bg-gray-400/10 rounded-md p-2">
                            <Image src={pulse} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">9,214,342</h1>
                          </nav>

                          <nav className="flex w-full flex-col gap-5 items-center justify-between bg-gray-400/10 rounded-md p-2">
                            <Image src={hex} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">345,564</h1>
                          </nav>

                          <nav className="flex w-full flex-col gap-5 items-center justify-between bg-gray-400/10 rounded-md p-2">
                            <Image src={logo} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">267</h1>
                          </nav>
                        </div>

                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                          <nav className="flex w-full flex-col gap-5 items-center justify-between bg-gray-400/10 rounded-md p-2">
                            <Image src={pulsex} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">2,354,543</h1>
                          </nav>

                          <nav className="flex w-full flex-col gap-5 items-center justify-between bg-gray-400/10 rounded-md p-2">
                            <Image src={inc} alt="pulse logo" className="w-6" />
                            <h1 className="font-bold text-white text-sm">10,293</h1>
                          </nav>
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-center mt-5">
                        <button className="flex font-semibold transition transition-transform duration-300 hover:scale-105 text-sm text-gray-200 py-2 rounded-md px-4 border border-gray-300 items-center justify-center">
                          Distribute rewards
                        </button>
                      </div>
                    </div>
                  </nav>
                  {/**Fifth box */}

                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default IndexPage;


