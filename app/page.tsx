'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import matchesAPI from "../src/mock/matches.json";
import {Match, MatchElement} from "@/src/config/interfaces/match";
import Link from "next/link";


export default function Home() {
  const [matches, setMatches] = useState<{matches: MatchElement[]}>(matchesAPI as any)

  return (
    <div className='flex justify-evenly gap-10 flex-wrap p-10'>
      {
        matches.matches?.map((match: MatchElement) => (
          <div
            key={match?.idEvent}
            className={'w-[43rem] h-[30.9rem] bg-lightGray rounded-xl p-10 flex flex-col justify-between items-center'}
          >
            <div className={'flex justify-center text-3xl font-bold'}>
              <p>{match.strHomeTeam}</p>
              <p> - </p>
              <p>{match.strAwayTeam}</p>
            </div>
            <div className={'flex justify-center text-2xl'}>
              <p>{match.strTime}</p>
            </div>
            <div
              className={'flex justify-center items-center text-4xl gap-10 font-bold'}
            >
              <Image
                src={match.strHomeTeamBadge}
                alt='barca shield'
                width={100}
                height={139}
                // className={'drop-shadow-xl shadow-buttonOrange shadow-inner'}
              />
              <p>VS</p>
              <Image
                src={match.strAwayTeamBadge}
                alt='barca shield'
                width={100}
                height={139}
                // className={'drop-shadow-xl shadow-buttonOrange shadow-md'}
              />
            </div>

            <Link
              className={' bg-buttonOrange text-white text-2xl p-5 rounded-xl'}
              href={`match/${match.idEvent}`}
            >
              Bet
            </Link>
          </div>
        ))
      }
    </div>
  );
}
