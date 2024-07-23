import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className='flex justify-evenly gap-10 flex-wrap p-10'>
      <div
        className={'w-[43rem] h-[30.9rem] bg-lightGray rounded-xl p-10 flex flex-col justify-between items-center'}
      >
        <div className={'flex justify-center text-3xl font-bold'}>
          <p>FCB</p>
          <p> - </p>
          <p>RMD</p>
        </div>

        <div
          className={'flex justify-center items-center text-4xl gap-10 font-bold'}
        >
          <Image
            src="/images/barca.png"
            alt='barca shield'
            width={100}
            height={139}
          />
          <p>VS</p>
          <Image
            src="/images/realm.png"
            alt='barca shield'
            width={100}
            height={139}
          />
        </div>

        <button
          className={' bg-buttonOrange text-white text-2xl p-5 rounded-xl'}
        >
          Bet
        </button>
      </div>
      <div
        className={'w-[43rem] h-[30.9rem] bg-lightGray rounded-xl p-10 flex flex-col justify-between items-center'}
      >
        <div className={'flex justify-center text-3xl font-bold'}>
          <p>FCB</p>
          <p> - </p>
          <p>RMD</p>
        </div>

        <div
          className={'flex justify-center items-center text-4xl gap-10 font-bold'}
        >
          <Image
            src="/images/barca.png"
            alt='barca shield'
            width={100}
            height={139}
          />
          <p>VS</p>
          <Image
            src="/images/realm.png"
            alt='barca shield'
            width={100}
            height={139}
          />
        </div>

        <button
          className={' bg-buttonOrange text-white text-2xl p-5 rounded-xl'}
        >
          Bet
        </button>
      </div>
      <div
        className={'w-[43rem] h-[30.9rem] bg-lightGray rounded-xl p-10 flex flex-col justify-between items-center'}
      >
        <div className={'flex justify-center text-3xl font-bold'}>
          <p>FCB</p>
          <p> - </p>
          <p>RMD</p>
        </div>

        <div
          className={'flex justify-center items-center text-4xl gap-10 font-bold'}
        >
          <Image
            src="/images/barca.png"
            alt='barca shield'
            width={100}
            height={139}
          />
          <p>VS</p>
          <Image
            src="/images/realm.png"
            alt='barca shield'
            width={100}
            height={139}
          />
        </div>

        <button
          className={' bg-buttonOrange text-white text-2xl p-5 rounded-xl'}
        >
          Bet
        </button>
      </div>
      <div
        className={'w-[43rem] h-[30.9rem] bg-lightGray rounded-xl p-10 flex flex-col justify-between items-center'}
      >
        <div className={'flex justify-center text-3xl font-bold'}>
          <p>FCB</p>
          <p> - </p>
          <p>RMD</p>
        </div>

        <div
          className={'flex justify-center items-center text-4xl gap-10 font-bold'}
        >
          <Image
            src="/images/barca.png"
            alt='barca shield'
            width={100}
            height={139}
          />
          <p>VS</p>
          <Image
            src="/images/realm.png"
            alt='barca shield'
            width={100}
            height={139}
          />
        </div>

        <button
          className={' bg-buttonOrange text-white text-2xl p-5 rounded-xl'}
        >
          Bet
        </button>
      </div>
    </div>
  );
}
