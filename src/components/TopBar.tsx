import React from 'react'

const TopBar = () => {
  return (
    <div
      className='z-10 fixed pl-[26rem] w-[100%] h-[12.5rem] bg-menuContent text-white flex justify-between items-center p-10 '
    >
      <h3 className={'text-4xl'}>
        CryptoBet
      </h3>
      <button className='bg-buttonOrange text-white text-2xl p-5 rounded-xl'>
        Connect Wallet
      </button>
    </div>
  )
}

export default TopBar