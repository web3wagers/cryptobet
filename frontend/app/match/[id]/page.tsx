'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MatchAPI from '@/src/mock/matches.json'
import Bets from '@/src/contracts/BetsContract'

interface MatchProps {
  params: {
    id: string
  }
}

const Match = ({ params }: MatchProps) => {
  const [selectedMatch, setSelectedMatch] = useState<any>();
  const [selectedTeam, setSelectedTeam] = useState<number>(0);
  const [txHashLink, setTxHashLink] = useState<string>("");
  const [txHash, setTxHash] = useState<string>("");
  const [eth, setEth] = useState<number>(0);
  useEffect(() => {
    const filterMatches = async () => {
      const filteredMatch = await Bets.getEventById(parseInt(params.id))
      setSelectedMatch(filteredMatch)
    }

    filterMatches()
  }, [params.id])

  useEffect(() => {
  }, [selectedTeam])

  const setBet = (team: number) => {
    setSelectedTeam(team)
  }

  const setEthAmount = (event: any) => {
    setEth(event.target.value);
  };

  async function sendBet() {
    const txHashRes = await Bets.sendBet(parseFloat(params.id), selectedTeam, eth)
    if(txHashRes != undefined){
      setTxHash(txHashRes);
      setTxHashLink("https://sepolia-optimism.etherscan.io/tx/" + txHashRes);
    }
  }

  return (
    <div
      className=' z-0 w-full h-full flex justify-center items-center py-[5%]'
    >
      <div
        className='bg-lightGray w-[115rem] h-[70rem] rounded-xl p-10'
      >
        <div>
          <Link
            href={'/'}
            className={'bg-buttonOrange text-white text-2xl px-10 p-4 rounded-xl'}
          >
            Back
          </Link>
        </div>


        <div
          className='flex flex-col justify-center items-center'
        >
          <div
            className='flex  justify-center items-center gap-10 mt-10'
          >
            <div
              className={`${selectedTeam === 1 ? 'bg-buttonOrange' : 'bg-lightOrange'} cursor-pointer w-[25.4rem] h-[30.9rem]  rounded-xl p-10 flex flex-col justify-center items-center`}
              onClick={() => setBet(1)}
            >
              <Image
                src={selectedMatch?.team1imgurl!}
                alt='barca shield'
                width={300}
                height={300}
                className={'drop-shadow-xl'}
              />
            </div>
            <div className='w-[15.2rem] h-[10.5rem] bg-lightOrange text-white text-5xl flex justify-center items-center rounded-xl'>
              <p>
                VS
              </p>
            </div>
            <div
              className={`${selectedTeam === 2 ? 'bg-buttonOrange' : 'bg-lightOrange'} cursor-pointer w-[25.4rem] h-[30.9rem]  rounded-xl p-10 flex flex-col justify-center items-center`}
              onClick={() => setBet(2)}
            >
              <Image
                src={selectedMatch?.team2imgurl!}
                alt='barca shield'
                width={300}
                height={300}
                className={'drop-shadow-xl'}
              />

            </div>
          </div>

          <div
            className='flex flex-col justify-center items-center gap-10 mt-10'
          >
            <input onChange={setEthAmount} type="number" max={10} min={0} className='bg-stone-400 placeholder:text-gray-600 p-5 text-2xl w-[17rem] h-[5rem] rounded-xl' placeholder='Place your ETH bet' />
            <button
              onClick={sendBet}
              className='bg-buttonOrange text-white text-2xl py-4 px-10 rounded-xl'
            >
              Bet
            </button>
          </div>

          {txHashLink != '' && (
            <div
              className='flex flex-col justify-center items-center gap-4 mt-10 bg-buttonOrange p-5 rounded-xl'
            >
              <h1 className='text-3xl text-white'>Your bet has been placed, take a look at the transaction here:</h1>
              <a className='text-xl text-white underline' href={txHashLink}>{txHash}</a>
            </div>
          )}
       </div>
      </div>
    </div >
  )
}

export default Match