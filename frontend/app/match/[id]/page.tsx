'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import MatchAPI from '@/src/mock/matches.json'
import Bets from '@/src/contracts/BetsContract'

interface MatchProps {
  params: {
    id: string
  }
}

const Match = ({params}: MatchProps) => {
  const [selectedMatch, setSelectedMatch] = useState<any>();
  const [selectedTeam, setSelectedTeam] = useState<number>(0);
  const [eth, setEth] = useState<number>(0);
  const [winner, setwinner] = useState('')
  const {matches} = MatchAPI
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
    await Bets.sendBet(parseFloat(params.id), selectedTeam, eth)    
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
              className={`${selectedTeam === 1 ? 'bg-buttonOrange' : 'bg-lightOrange'} cursor-pointer w-[35.4rem] h-[40.9rem]  rounded-xl p-10 flex flex-col justify-center items-center`}
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
            <div className='w-[18.2rem] h-[13.5rem] bg-lightOrange text-white text-5xl flex justify-center items-center rounded-xl'>
              <p>
                {
                  winner === '' ? 'VS' : winner
                }
              </p>
            </div>
            <div
              className={`${selectedTeam === 2 ? 'bg-buttonOrange' : 'bg-lightOrange'} cursor-pointer w-[35.4rem] h-[40.9rem]  rounded-xl p-10 flex flex-col justify-center items-center`}
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
        </div>
      </div>
    </div >
  )
}

export default Match