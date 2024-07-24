import React from 'react'
import Image from 'next/image'
const SideBar = () => {



  return (
    <div
      className='z-20 w-[24.4rem] h-screen  bg-menuBar fixed'
    >
      <div className={'flex flex-col m-10 items-between gap-10'}>
        <h3 className='bg-menuContent text-white text-5xl text-center'>Sports</h3>
        <div className='bg-menuContent'>
          <ul className={' text-white text-3xl flex flex-col gap-10 justify-start items-center h-[80rem]  '}>
            <li className='flex justify-between w-full p-10 pr-2 hover:bg-buttonOrange transition  ease-in-out delay-75'>
              <p>Football</p>
              <Image
                src={'/chevron-right.svg'}
                width={20}
                height={20}
                alt={'right arrow'}
                className={'text-white rightArrow bg-buttonOrange rounded-full'}
              />
            </li>
            <li className='flex justify-between w-full p-10 pr-2 hover:bg-buttonOrange transition  ease-in-out delay-75'>
              <p>Basketball</p>
              <Image
                src={'/chevron-right.svg'}
                width={20}
                height={20}
                alt={'right arrow'}
                className={'text-white bg-buttonOrange rounded-full'}
              />
            </li>
            <li className='flex justify-between w-full p-10 pr-2 hover:bg-buttonOrange transition  ease-in-out delay-75'>
              <p>Baseball</p>
              <Image
                src={'/chevron-right.svg'}
                width={20}
                height={20}
                alt={'right arrow'}
                className={'text-white bg-buttonOrange rounded-full'}
              />
            </li>
            <li className='flex justify-between w-full p-10 pr-2 hover:bg-buttonOrange transition  ease-in-out delay-75'>
              <p>Soccer</p>
              <Image
                src={'/chevron-right.svg'}
                width={20}
                height={20}
                alt={'right arrow'}
                className={'text-white bg-buttonOrange rounded-full'}
              />
            </li>
            <li className='flex justify-between w-full p-10 pr-2 hover:bg-buttonOrange transition  ease-in-out delay-75'>
              <p>Cricket</p>
              <Image
                src={'/chevron-right.svg'}
                width={20}
                height={20}
                alt={'right arrow'}
                className={'text-white bg-buttonOrange rounded-full'}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar