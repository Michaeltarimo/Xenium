import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import logo from "@/../public/img/logo.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import pulse from '@/../public/img/pulse.png';
import pulsex from '@/../public/img/pulsex.png';
import hex from '@/../public/img/hex.png';
import inc from '@/../public/img/inc.png';

const index = () => {
  return (
    <>
      <Head>
        <title>Xenium | Dashboard</title>
        <meta name='description' content='The new Protocol in Pulsechain' />
      </Head>
      <main className="flex items-center justify-center bg-dark pb-10">

        <div className="flex items-start flex-row justify-start w-full min-h-screen md:hidden">

          <div className="flex py-2 flex-col items-center justify-start bg-darkest h-screen w-1/4 rounded-b-xl">

            <nav className="w-full flex items-center justify-center">
              <div>
                <Image src={logo} alt="logo" className="w-10" />
              </div>
              <h1 className="text-base font-extrabold text-white mt-2">Xenium</h1>
            </nav>

            <div className="flex flex-col items-center justify-center pt-24">
              <h1 className="font-medium text-gray-200">Burn Xen to mint Xem</h1>
              <h1 className="text-sm font-light text-gray-400">( 1 batch = 350.000.000 XEN )</h1>
            </div>

            <div className="flex flex-col border border-gray-300 items-center justify-start rounded-lg bg-blue-400/20 w-[85%] mt-5 h-[150px]">
              <h1 className="text-xs font-bold text-gray-300 mt-2">350,000,000.00 XEN</h1>
              <h1 className="text-[10px] text-gray-300 font-bold">Xen to burn</h1>

              <div className="flex items-center justify-center mt-4 w-full">
                <nav className="flex font-bold rounded-l-sm hover:bg-gray-400/50 cursor-pointer transition transition-transform duration-300 hover:scale-105 text-lg font-extrabold text-red-500 items-center justify-center border border-gray-400 w-[60px] h-[50px]">
                  <h1 className="cursor-pointer">-</h1>
                </nav>
                <nav className="flex text-xs font-bold items-center justify-center border-t border-b border-gray-400 w-full h-[50px]">
                  00000000
                </nav>
                <nav className="flex font-bold rounded-r-sm hover:bg-gray-400/50 cursor-pointer transition transition-transform duration-300 hover:scale-105 text-lg font-extrabold text-green-500 items-center justify-center border border-gray-400 w-[60px] h-[50px]">
                  <h1 className="">+</h1>
                </nav>

              </div>

              <div className="flex pb-2 text-xs font-bold px-2 mt-5 w-full items-center justify-between">
                <h1>Fee:</h1>
                <h1>-30855 PLS</h1>
              </div>

            </div>

            <div className="flex flex-col items-start justify-start border border-gray-300  rounded-lg bg-blue-400/20 w-[85%] mt-5 h-[100px]">
              <nav className="flex w-full text-xs font-bold py-4 px-2 border-b border-gray-300 items-center justify-between">
                  <h1>Protocol fee:</h1>
                  <h1>1,445,342 PLS </h1>
              </nav>
              <nav className="flex w-full text-xs font-bold py-4 px-2 items-center justify-between">
                <h1>Pay in:</h1>
                <div className="flex items-center justify-center">
                  <Link href="#"><Image src={pulse} alt="coin" className="w-6"/></Link>
                  <Link href="#"><Image src={pulsex} alt="coin" className="w-6"/></Link>
                  <Link href="#"><Image src={hex} alt="coin" className="w-6"/></Link>
                  <Link href="#"><Image src={inc} alt="coin" className="w-6"/></Link>
                </div>
              </nav>
            </div>

            <button className="flex items-center justify-center transition transition-transform duration-500 hover:scale-105 font-bold text-xs py-3 rounded-3xl border border-gray-400 bg-black mt-10 w-[85%]">
              <b className="text-green-500">Mint</b>&<b className="text-red-500">Burn</b>
            </button>

          </div>

          <div className="flex flex-col items-start justify-start w-3/4 min-h-screen">
            <nav className="flex w-full bg-darker py-[20px] px-6 font-extrabold text-white text-base">
              <h1>Dashboard</h1>
            </nav>
            <div className="flex flex-col items-start justify-start w-full mt-12 h-full gap-10">
              <div className="flex flex-row gap-4 items-start justify-start w-full h-full px-6">

                {/**First half */}
                <div className="flex flex-col w-[70%] gap-4 items-start justify-start">

                  <nav className="flex items-center justify-between border border-white rounded-lg bg-darker w-full h-[250px]">
                    Box 1
                  </nav>

                  <nav className="flex items-center justify-between border border-white rounded-lg bg-darker w-full h-[250px]">
                    Box 2
                  </nav>

                  <nav className="flex items-center justify-between border border-white rounded-lg bg-darker w-full h-[250px]">
                    Box 3
                  </nav>

                </div>


                {/**Second half */}
                <div className="flex flex-col w-[30%] gap-4 items-start justify-start">

                  
                <nav className="flex items-center justify-between border border-white rounded-lg bg-darker w-full h-[250px]">
                    Box 4
                  </nav>
                  <nav className="flex items-center justify-between border border-white rounded-lg bg-darker w-full h-[250px]">
                    Box 5
                  </nav>
                  <nav className="flex items-center justify-between border border-white rounded-lg bg-darker w-full h-[250px]">
                    Box 6
                  </nav>


        

                </div>




              </div>
            </div>
          </div>

        </div>

        <div className="hidden md:flex md:flex-col py-10 px-2 w-full h-screen items-center justify-center">
          <AnimatedText text="Welcome to Xenium" className="text-xl font-bold text-green-500"/>
          <h1 className="text-sm font-light">Please use Desktop screen to continue ...</h1>
        </div>
      </main>
    </>
  )
}

export default index
