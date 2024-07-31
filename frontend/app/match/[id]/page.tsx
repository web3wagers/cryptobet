'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import MatchAPI from '@/src/mock/matches.json'
import {MatchElement} from '@/src/config/interfaces/match'
import {setTimeout} from 'timers'
import Bets from '@/src/contracts/BetsContract'

interface MatchProps {
  params: {
    id: string
  }
}

const Match = ({params}: MatchProps) => {

  const [selectedMatch, setSelectedMatch] = useState<any>()
  const [selectedTeam, setSelectedTeam] = useState<string>('')
  const [winner, setwinner] = useState('')
  const {matches} = MatchAPI
  useEffect(() => {
    const filterMatches = async () => {
      const filteredMatch = await Bets.getEventById(parseInt(params.id))
      console.log(filteredMatch);
      setSelectedMatch(filteredMatch)
    }

    filterMatches()
  }, [])

  useEffect(() => {
  }, [selectedTeam])

  const setBet = (team: string) => {
    setSelectedTeam(prev => prev = team)
    determineWinner(team)
  }

  const determineWinner = (team: string) => {
    setTimeout(() => {

      if (selectedMatch?.intHomeScore && selectedMatch?.intAwayScore) {
        if (selectedMatch?.intHomeScore > selectedMatch?.intAwayScore) {
          if (selectedMatch?.strHomeTeam === team) {
            setwinner('Bettor Wins')
          } else {
            setwinner('House Wins')
          }
        } else if (selectedMatch?.intHomeScore < selectedMatch?.intAwayScore) {
          if (selectedMatch?.strAwayTeam === team) {
            setwinner('Bettor Wins')
          } else {
            setwinner('House Wins')
          }
        } else {
          setwinner('Draw')
        }
      }
    }, 4000);
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
              className={`${selectedTeam === selectedMatch?.team1name ? 'bg-buttonOrange' : 'bg-lightOrange'} cursor-pointer w-[35.4rem] h-[40.9rem]  rounded-xl p-10 flex flex-col justify-center items-center`}
              onClick={() => setBet(selectedMatch?.team1name!)}
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
              className={`${selectedTeam === selectedMatch?.team2name ? 'bg-buttonOrange' : 'bg-lightOrange'} cursor-pointer w-[35.4rem] h-[40.9rem]  rounded-xl p-10 flex flex-col justify-center items-center`}
              onClick={() => setBet(selectedMatch?.team2name!)}
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
            <input type="number" max={10} min={0} className='bg-stone-400 placeholder:text-gray-600 p-5 text-2xl w-[17rem] h-[5rem] rounded-xl' placeholder='Place your ETH bet' />
            <button
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