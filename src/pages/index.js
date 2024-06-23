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

const xeniumAddress = '0xbdCF581FF70AAE104D41C6B2AbCb3F29E0bCFB89';

const IndexPage = () => {
  const [protocolFee, setProtocolFee] = useState(0);
  const [batchNumber, setBatchNumber] = useState(1);
  const [selectedToken, setSelectedToken] = useState('PLS');
  const [gasUsed, setGasUsed] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (provider && signer) {
      const xeniumContract = new ethers.Contract(xeniumAddress, xeniumAbi, signer);
      setContract(xeniumContract);
    }
  }, [provider, signer]);

  useEffect(() => {
    if (walletConnected) {
      getGasEstimate();
    }
  }, [batchNumber, selectedToken, walletConnected]);

  const getGasEstimate = async () => {
    if (contract) {
      try {
        const gasEstimate = await contract.estimateGas.burnAndMint(batchNumber, selectedToken);
        setGasUsed(gasEstimate.toNumber());
        calculateProtocolFee(gasEstimate.toNumber(), batchNumber, selectedToken); // Call with the latest values
      } catch (error) {
        console.error('Error estimating gas:', error);
      }
    }
  };

  const calculateProtocolFee = (gasUsed, batchNumber, token) => {
    if (!gasUsed || !batchNumber) return;

    let fee = gasUsed * Math.max(0.5, (1 - 0.0003 * batchNumber)) * batchNumber;
    if (token === 'PLSX') {
      fee *= 2.1752;
    } else if (token === 'HEX') {
      fee *= 0.0083;
    } else if (token === 'INC') {
      fee *= 0.000018;
    }
    setProtocolFee(fee);
  };

  const handleBatchIncrease = async () => {
    const newBatchNumber = batchNumber + 1;
    setBatchNumber(newBatchNumber);
    await getGasEstimate(); // Recalculate the gas estimate and protocol fee
  };

  const handleBatchDecrease = async () => {
    if (batchNumber > 1) {
      const newBatchNumber = batchNumber - 1;
      setBatchNumber(newBatchNumber);
      await getGasEstimate(); // Recalculate the gas estimate and protocol fee
    }
  };

  const handleTokenSelection = async (token) => {
    setSelectedToken(token);
    await getGasEstimate(); // Recalculate the gas estimate and protocol fee with the selected token
  };

  const handleMintAndBurn = async () => {
    if (contract) {
      try {
        await contract.burnAndMint(batchNumber, selectedToken, ethers.utils.parseUnits(protocolFee.toString(), 'ether'));
      } catch (error) {
        console.error('Error executing burnAndMint:', error);
      }
    }
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    
    <>
    
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
              <h1 className="text-sm font-light text-gray-400">(1 batch = 350,000,000 XEN)</h1>
            </div>
            <div className="flex flex-col border border-gray-300 items-center justify-start rounded-lg bg-blue-400/20 w-[85%] mt-5 h-[150px]">
              <h1 className="text-xs font-bold text-gray-300 mt-2">350,000,000.00 XEN</h1>
              <h1 className="text-[10px] text-gray-300 font-bold">Xen to burn</h1>
              <div className="flex items-center justify-center mt-4 w-full">
                <nav
                  className="flex font-bold hover:bg-gray-400/50 cursor-pointer transition transition-transform duration-300 hover:scale-105 text-lg font-extrabold text-red-500 items-center justify-center border border-gray-400 w-[60px] h-[50px]"
                  onClick={handleBatchDecrease}
                >
                  <h1 className="cursor-pointer">-</h1>
                </nav>
                <div className="flex text-xs font-bold items-center justify-center border-t border-b border-gray-400 w-full h-[50px]">
                  {batchNumber}
                </div>
                <nav
                  className="flex font-bold hover:bg-gray-400/50 cursor-pointer transition transition-transform duration-300 hover:scale-105 text-lg font-extrabold text-green-500 items-center justify-center border border-gray-400 w-[60px] h-[50px]"
                  onClick={handleBatchIncrease}
                >
                  <h1 className="">+</h1>
                </nav>
              </div>
              <div className="flex pb-2 text-xs font-bold px-2 mt-5 w-full items-center justify-between">
                <h1>Fee:</h1>
                <h1>{gasUsed.toFixed(2)} PLS</h1> {/* Always display gas used for the fee */}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start border border-gray-300 rounded-lg bg-blue-400/20 w-[85%] mt-5 h-[100px]">
              <nav className="flex w-full text-xs font-bold py-4 px-2 border-b border-gray-300 items-center justify-between">
                <h1>Protocol fee: {protocolFee}</h1>
                <h1>{protocolFee.toFixed(2)} {selectedToken}</h1>
              </nav>
              <div className="flex w-full text-xs font-bold py-4 px-2 items-center justify-between">
  <h1>Pay in:</h1>
  <div className="flex items-center gap-5 justify-center">
    <button
      onClick={() => handleTokenSelection('PLS')}
      className="transition transition-transform duration-300 hover:scale-105"
    >
      <Image src={pulse} alt="coin" className="w-6" />
    </button>
    <button
      onClick={() => handleTokenSelection('PLSX')}
      className="transition transition-transform duration-300 hover:scale-105"
    >
      <Image src={pulsex} alt="coin" className="w-6" />
    </button>
    <button
      onClick={() => handleTokenSelection('HEX')}
      className="transition transition-transform duration-300 hover:scale-105"
    >
      <Image src={hex} alt="coin" className="w-8" />
    </button>
    <button
      onClick={() => handleTokenSelection('INC')}
      className="transition transition-transform duration-300 hover:scale-105"
    >
      <Image src={inc} alt="coin" className="w-6" />
    </button>
  </div>
</div>


            </div>
            <button
              className="flex items-center justify-center transition transition-transform duration-500 hover:scale-105 font-bold text-xs py-3 rounded-3xl border border-gray-400 bg-black mt-10 w-[85%]"
              onClick={handleMintAndBurn}
            >
              <b className="text-green-500">Mint</b>&<b className="text-red-500">Burn</b>
            </button>
          </div>
          <div className="flex flex-col items-start justify-start w-3/4 min-h-screen">
                        <nav className="flex w-full bg-darker py-[20px] px-6 font-extrabold text-white text-base justify-between items-center">
                            <h1>Dashboard</h1>
                            <div>
                                <WalletConnect
                                setProvider={setProvider}
                                setSigner={setSigner}
                                setWalletConnected={setWalletConnected}
                                setWalletAddress={setWalletAddress}
                                walletAddress={walletAddress} // Pass walletAddress as a prop
                                />
                            </div>
                        </nav>
                        <div className="flex flex-col items-start justify-start w-full mt-12 h-full gap-10">
                            <div className="flex flex-row gap-4 items-start justify-start w-full h-full px-6">
                                {/**First half */}
                                <div className="flex flex-col w-[70%] gap-4 items-start justify-start">
                                    {/**First Box */}
                                    <nav className="flex items-center justify-between border border-gray-400 rounded-lg bg-darker px-4 w-full h-[250px]">
                                        <div className="flex flex-col w-full items-center justify-center gap-10 text-gray-300 font-light text-sm">
                                            <nav className="flex w-full flex-col items-center justify-center gap-2">
                                                <h1>Xem minted in current cycle</h1>
                                                <h1 className="font-bold text-white text-sm">9 5 XEM</h1>
                                            </nav>
                                            <nav className="flex w-full flex-col items-center justify-center gap-2">
                                                <h1>Total Xem minted</h1>
                                                <h1 className="font-bold text-white text-sm">2 3 4 , 2 6 3  XEM</h1>
                                            </nav>
                                        </div>
                                        <div className="flex flex-col w-full items-center justify-center gap-10 text-gray-300 font-light text-sm">
                                            <nav className="flex w-full flex-col items-center justify-center gap-2">
                                                <h1>Total Xem Burnt</h1>
                                                <h1 className="font-bold text-white text-sm">1 9 2 3 5 XEM</h1>
                                            </nav>
                                            <nav className="flex w-full flex-col items-center justify-center gap-2">
                                                <h1>Total Xen Burnt</h1>
                                                <h1 className="font-bold text-white text-sm">1 3 4 , 3 6 2 , 0 0 0 , 0 0 0 , 0 0 0  XEN</h1>
                                            </nav>
                                        </div>
                                        <div className="flex flex-col w-full items-center justify-center gap-10 text-gray-300 font-light text-sm">
                                            <nav className="flex w-full flex-col items-center justify-center gap-2">
                                                <h1>Total Xem Staked</h1>
                                                <h1 className="font-bold text-white text-sm">2 1 4 , 9 5 5 XEM</h1>
                                            </nav>
                                            <nav className="flex w-full flex-col items-center justify-center gap-2">
                                                <h1>Total Xem Unstaked</h1>
                                                <h1 className="font-bold text-white text-sm">2 , 1 4 9  XEM</h1>
                                            </nav>
                                        </div>
                                    </nav>
                                    {/**End of First Box */}

                                    {/**Second Box */}
                                    <nav className="flex items-center justify-between border border-gray-400 rounded-lg bg-darker px-4 w-full h-[250px]">
                                        <div className="flex flex-col w-full items-center justify-center gap-10 text-gray-300 font-light text-sm">
                                            <h1>Total fees collected</h1>
                                            <div className="flex w-full items-center justify-between px-4">
                                                <nav className="flex flex-col items-center justify-center gap-10">
                                                    <div className="flex w-full items-center justify-between">
                                                        <Image src={pulse} alt="pulse logo" className="w-6" />
                                                        <h1>Pulse</h1>
                                                    </div>
                                                    <h1 className="font-bold text-white text-sm">9,214,955,346</h1>
                                                </nav>
                                                <nav className="flex flex-col items-center justify-center gap-10">
                                                    <div className="flex w-full items-center justify-between">
                                                        <Image src={pulsex} alt="pulse logo" className="w-6" />
                                                        <h1>PulseX</h1>
                                                    </div>
                                                    <h1 className="font-bold text-white text-sm">6,638,245,346</h1>
                                                </nav>
                                                <nav className="flex flex-col items-center justify-center gap-10">
                                                    <div className="flex w-full items-center justify-between">
                                                        <Image src={hex} alt="pulse logo" className="w-8" />
                                                        <h1>Hex</h1>
                                                    </div>
                                                    <h1 className="font-bold text-white text-sm">637,436,573</h1>
                                                </nav>
                                                <nav className="flex flex-col items-center justify-center gap-10">
                                                    <div className="flex w-full items-center justify-between">
                                                        <Image src={inc} alt="pulse logo" className="w-6" />
                                                        <h1>Inc</h1>
                                                    </div>
                                                    <h1 className="font-bold text-white text-sm">821,536</h1>
                                                </nav>
                                                <nav className="flex flex-col items-center justify-center gap-10">
                                                    <div className="flex w-full items-center justify-between">
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
                                    <nav className="flex items-center justify-between border border-gray-400 rounded-lg bg-darker w-full px-4 h-[250px]">
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
                                    </nav>
                                    {/**End of Third Box */}

                                </div>

                                {/**Second half */}
                                <div className="flex flex-col w-[30%] gap-4 items-start justify-start">

                                    {/**Fourth box */}
                                    <nav className="flex flex-col items-center justify-between border border-gray-400 rounded-lg px-4 py-4 bg-darker w-full h-[250px]">
                                        <div className="flex flex-col w-full items-center justify-between text-gray-300 font-light text-sm">
                                        <div className="w-full flex items-center justify-center gap-8">
                                                <h1>Cycle fees collected</h1>
                                                <Image src={coinstack} alt="coin stack logo" className="w-10" />
                                            </div>

                                            <div className="flex flex-row items-start justify-between px-4 w-full pt-4 gap-4">
                                                <div className="flex w-1/3 flex-col items-start justify-start gap-5">
                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={pulse} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">9,214,567,342</h1>
                                                    </nav>

                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={hex} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">345,564</h1>
                                                    </nav>

                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={logo} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">267</h1>
                                                    </nav>
                                                </div>

                                                <div className="flex w-1/3 flex-col items-start justify-start gap-5">
                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={pulsex} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">2,354,543</h1>
                                                    </nav>

                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={inc} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">10,293</h1>
                                                    </nav>
                                                </div>
                                            </div>

                                            <div className="w-full flex items-end justify-end">
                                                <button className="flex w-[48%] transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-2 rounded-3xl px-6 border border-gray-300 items-center justify-center">
                                                    Distribute rewards
                                                </button>
                                            </div>
                                        </div>
                                    </nav>
                                    {/**End of Fourth box */}

                                    {/**Fifth box */}
                                    <nav className="flex flex-col items-center justify-between border border-gray-400 rounded-lg px-4 py-4 bg-darker w-full h-[250px]">
                                        <div className="flex flex-col w-full items-center justify-between text-gray-300 font-light text-sm gap-5">
                                            <div className="w-full flex items-center justify-center gap-8">
                                                <h1>Buy and Burn Xem</h1>
                                                <Image src={flame} alt="flame logo" className="w-8" />
                                            </div>

                                            <div className="flex flex-row items-start justify-between px-4 w-full pt-6 gap-4">
                                                <div className="flex w-1/3 flex-col items-start justify-start gap-5">
                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={pulse} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">9,214,567,342</h1>
                                                    </nav>

                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={hex} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">345,564</h1>
                                                    </nav>
                                                </div>

                                                <div className="flex w-1/3 flex-col items-start justify-start gap-5">
                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={pulsex} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">2,354,543</h1>
                                                    </nav>

                                                    <nav className="flex w-full flex-row gap-3 items-center justify-between">
                                                        <Image src={inc} alt="pulse logo" className="w-6" />
                                                        <h1 className="font-bold text-white text-sm">10,293</h1>
                                                    </nav>
                                                </div>
                                            </div>

                                            <div className="w-full flex items-end justify-end">
                                                <button className="flex w-[48%] transition transition-transform duration-300 hover:scale-105 text-sm text-gray-300 py-2 rounded-3xl px-6 border border-gray-300 items-center justify-center">
                                                    Buy & Burn
                                                </button>
                                            </div>
                                        </div>
                                    </nav>
                                    {/**Fifth box */}

                                    {/**Sixth box */}
                                    <nav className="flex flex-col items-center justify-between border border-gray-400 rounded-lg px-4 py-4 bg-darker w-full h-[250px]">
                                        <div className="flex flex-col w-full items-center justify-between text-gray-300 font-light text-sm gap-5">
                                            <div className="w-full flex items-center justify-between px-5">
                                                <h1>STAKE</h1>
                                                <h1>UNSTAKE</h1>
                                            </div>
                                        </div>
                                    </nav>
                                    {/**End of Sixth box */}
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


