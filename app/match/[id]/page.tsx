'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import MatchAPI from '@/src/mock/matches.json'
import {MatchElement} from '@/src/config/interfaces/match'
import {setTimeout} from 'timers'


interface MatchProps {
  params: {
    id: string
  }
}

const Match = ({params}: MatchProps) => {

  const [selectedMatch, setSelectedMatch] = useState<MatchElement>()
  const [selectedTeam, setSelectedTeam] = useState<string>('')
  const [winner, setwinner] = useState('')
  const {matches} = MatchAPI
  useEffect(() => {
    const filterMatches = () => {
      const filteredMatch = matches.filter((match: MatchElement) => {
        console.log(match)
        return match.idEvent === params.id
      })
      setSelectedMatch(filteredMatch[0])
    }

    filterMatches()
  }, [])

  useEffect(() => {
    console.log(selectedTeam)
  }, [selectedTeam])

  const setBet = (team: string) => {
    setSelectedTeam(prev => prev = team)
    determineWinner(team)
  }

  const determineWinner = (team: string) => {
    console.log(`${team} - ${selectedMatch?.strHomeTeam}`)
    console.log(`${selectedMatch?.intHomeScore} - ${selectedMatch?.intAwayScore}`)
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
              className={`${selectedTeam === selectedMatch?.strHomeTeam ? 'bg-buttonOrange' : 'bg-lightOrange'} cursor-pointer w-[35.4rem] h-[40.9rem]  rounded-xl p-10 flex flex-col justify-center items-center`}
              onClick={() => setBet(selectedMatch?.strHomeTeam!)}
            >
              <Image
                src={selectedMatch?.strHomeTeamBadge!}
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
              className={`${selectedTeam === selectedMatch?.strAwayTeam ? 'bg-buttonOrange' : 'bg-lightOrange'} cursor-pointer w-[35.4rem] h-[40.9rem]  rounded-xl p-10 flex flex-col justify-center items-center`}
              onClick={() => setBet(selectedMatch?.strAwayTeam!)}
            >
              <Image
                src={selectedMatch?.strAwayTeamBadge!}
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