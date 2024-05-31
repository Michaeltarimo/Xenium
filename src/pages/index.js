import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import logo from "@/../public/img/logo.png"

const index = () => {
  return (
    <>
      <Head>
        <title>Xenium | Dashboard</title>
        <meta name='description' content='The new Protocol in Pulsechain' />
      </Head>
      <main className="flex items-center justify-center bg-dark pb-10">
        <div className="flex items-start flex-row justify-start w-full min-h-screen">

          <div className="flex py-2 flex-col items-center justify-start bg-darkest h-screen w-1/6 rounded-b-xl">

            <nav className="w-full flex items-center justify-center">
              <div>
                <Image src={logo} alt="logo" className="w-10" />
              </div>
              <h1 className="text-base font-extrabold text-white mt-2">Xenium</h1>
            </nav>

            <div className="flex flex-col items-center justify-center pt-24">
              <h1 className="font-medium text-gray-200">Burn Xen to mint Xem</h1>
              <h1 className="text-sm font-light text-gray-400">( 1 batch = 350000000 XEN )</h1>
            </div>

            <div className="flex flex-col items-center justify-start p-5 rounded-lg bg-blue-400/20 w-[85%] mt-5 h-[150px]">
              <h1 className="text-xs font-medium text-gray-300">350,000,000.00 XEN</h1>
              <h1 className="text-[10px] text-gray-300 font-medium">Xen to burn</h1>
              <div className="flex items-center justify-center">

                <nav className="flex rounded-l-sm hover:bg-gray-400/50 cursor-pointer transition transition-transform duration-300 hover:scale-105 text-lg font-extrabold text-red-500 mt-4 items-center justify-center border border-gray-400 w-[40px] h-[40px]">
                  <h1 className="cursor-pointer">-</h1>
                </nav>
                <nav className="flex text-xs mt-4 items-center justify-center border-t border-b border-gray-400 w-[80px] h-[40px]">
                  00000000
                </nav>
                <nav className="flex rounded-r-sm hover:bg-gray-400/50 cursor-pointer transition transition-transform duration-300 hover:scale-105 text-lg font-extrabold text-green-500 mt-4 items-center justify-center border border-gray-400 w-[40px] h-[40px]">
                  <h1 className="">+</h1>
                </nav>

              </div>
            </div>

            <div className="flex flex-col items-start justify-start p-5 rounded-lg bg-blue-400/20 w-[85%] mt-5 h-[100px]">
            </div>

            <button className="flex items-center justify-center transition transition-transform duration-500 hover:scale-105 font-bold text-xs py-3 rounded-3xl border border-gray-400 bg-black mt-5 w-[85%]">
              <b className="text-green-500">Mint</b>&<b className="text-red-500">Burn</b>
            </button>

          </div>

          <div className="flex flex-col items-start justify-start w-5/6 min-h-screen">
            <nav className="flex w-full bg-darker py-[20px] px-6 font-extrabold text-white text-base">
              <h1>Dashboard</h1>
            </nav>
            <div className="flex flex-col items-start justify-start w-full mt-5 h-full gap-10">
              <div className="flex flex-row gap-4 items-start justify-start w-full h-full px-6">

                {/**First half */}
                <div className="flex flex-col w-1/2 gap-4 items-start justify-start">

                  <nav className="flex items-center justify-between border border-white rounded-lg bg-darker w-full h-[200px]">
                    Box 1
                  </nav>

                  <nav className="flex items-center justify-between border border-white rounded-lg bg-darker w-full h-[316px]">
                    Box 2
                  </nav>

                </div>


                {/**Second half */}
                <div className="flex flex-col w-1/2 gap-4 items-start justify-start">

                  <nav className="flex items-center justify-between w-full h-[200px] gap-4">

                    <div className="flex items-center justify-between border border-white rounded-lg bg-darker w-1/2 h-full">
                      Box 3
                    </div>
                    <div className="flex items-center justify-between border border-white rounded-lg bg-darker w-1/2 h-full">
                      Box 4
                    </div>

                  </nav>


                  <nav className="flex gap-4 flex-col items-center justify-between w-full">

                    <div className="flex items-center justify-center border border-white rounded-lg bg-darker w-full h-[200px]">
                      Box 5
                    </div>

                    <div className="flex items-center justify-center border border-white rounded-lg bg-darker w-full h-[100px]">
                      Box 6
                    </div>

                  </nav>

                </div>




              </div>


              {/**The small box at the bottom */}
              <div className="flex items-center justify-center w-full px-6">
                <nav className="flex items-center justify-center border border-white rounded-lg bg-darker w-1/4 h-[200px]">

                </nav>

              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default index