/* eslint-disable @next/next/no-async-client-component */
import Image from "next/image";
import Link from "next/link";
import getAllEvents from "@/src/contracts/BetsContract";
import matchAPI from "@/src/mock/matches.json";
import {Match, MatchElement} from "@/src/config/interfaces/match";
export default async function Home() {
  //TODO: uncomment the 2 lines below
  // var matchFetch = await getAllEvents();
  // const matches = matchFetch;
  const matches:Match = matchAPI;

  return (
    <div className='flex justify-evenly gap-10 flex-wrap p-10'>
      {//TODO: chage the type of match 
        matches.matches?.map((match:MatchElement |any) => (
          <div
            key={match?.id}
            className={'w-[43rem] h-[30.9rem] bg-lightGray rounded-xl p-10 flex flex-col justify-between items-center'}
          >
            <div className={'flex justify-center text-3xl font-bold'}>
              <p>{match.team1}</p>
              <p> - </p>
              <p>{match.team2}</p>
            </div>
            <div className={'flex justify-center text-2xl'}>
              <p>{match.time}</p>
            </div>
            <div
              className={'flex justify-center items-center text-4xl gap-10 font-bold'}
            >
              <Image
                src='https://www.thesportsdb.com/images/media/team/badge/yswsww1473503818.png'
                alt='barca shield'
                width={100}
                height={139}
                // className={'drop-shadow-xl shadow-buttonOrange shadow-inner'}
              />
              <p>VS</p>
              <Image
                src='https://www.thesportsdb.com/images/media/team/badge/yswsww1473503818.png'
                alt='barca shield'
                width={100}
                height={139}
                // className={'drop-shadow-xl shadow-buttonOrange shadow-md'}
              />
            </div>

            <Link
              className={' bg-buttonOrange text-white text-2xl p-5 rounded-xl'}
              //TODO: href={`match/${match.id}`}
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
