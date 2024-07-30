/* eslint-disable @next/next/no-async-client-component */
import Image from "next/image";
import Link from "next/link";
import getAllEvents from "@/src/contracts/BetsContract";

export default async function Home() {
  var matchFetch = await getAllEvents();
  const matches = matchFetch;

  return (
    <div className='flex justify-evenly gap-10 flex-wrap p-10'>
      {
        // ignore this err for the moment
        matches.matches?.map((match: any) => (
          <div
            key={match?.id}
            className={'w-[43rem] h-[30.9rem] bg-lightGray rounded-xl p-10 flex flex-col justify-between items-center'}
          >
            <div className={'flex justify-center text-3xl font-bold'}>
              <p>{match.team1name}</p>
              <p> - </p>
              <p>{match.team2name}</p>
            </div>
            <div className={'flex justify-center text-2xl'}>
              <p>{match.time}</p>
            </div>
            <div
              className={'flex justify-center items-center text-4xl gap-10 font-bold'}
            >
              <Image
                src={match.team1imgurl}
                alt='barca shield'
                width={100}
                height={139}
                // className={'drop-shadow-xl shadow-buttonOrange shadow-inner'}
              />
              <p>VS</p>
              <Image
                src={match.team2imgurl}
                alt='barca shield'
                width={100}
                height={139}
                // className={'drop-shadow-xl shadow-buttonOrange shadow-md'}
              />
            </div>

            <Link
              className={' bg-buttonOrange text-white text-2xl p-5 rounded-xl'}
              href={`match/${match.id}`}
            >
              Bet
            </Link>
          </div>
        ))
      }
    </div>
  );
}
