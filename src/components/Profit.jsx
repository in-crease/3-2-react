import React, { useState } from 'react';
import hero from "../assets/hero.svg"
import coin from "../assets/coin.svg"

const Earn = () => {
  const [count, setCount] = useState(0);

  function click() {
    setCount(count + 1);
  }
  return (
    <div className='bg-[#2C2F35] w-[500px] rounded-2xl p-[30px]'>
      <h1 className='text-center text-white text-2xl'>Hamster Kombat</h1>
      <div className='flex justify-around mt-[50px]'>
        <div className='bg-[#32363C] rounded-2xl p-[10px]'>
          <h1 className='text-[#F79841] text-center'>Earn per tap</h1>
          <h1 className='text-center text-white'>+12</h1>
        </div>
        <div className='bg-[#32363C] rounded-2xl p-[10px]'>
          <h1 className='text-[#6F72E2] text-center'>Coins to level up</h1>
          <h1 className='text-center text-white'>10 M</h1>
        </div>
        <div className='bg-[#32363C] rounded-2xl p-[10px]'>
          <h1 className='text-[#84CB69] text-center'>Profit per hour</h1>
          <h1 className='text-center text-white'>+636</h1>
        </div>
      </div>
      <div className='flex justify-center items-center text-5xl text-white mt-[50px]'>
        <img src={coin} alt="logo" /> {count}
      </div>
      <div className='bg-[#32363C]'>
       <div className='flex justify-around items-center'>
        <h1 className='text-white'>lvl 1</h1>
        <div className='flex items-center'>
            <h1 className='text-white'>+2</h1>
            <img className='w-[30px]' src={coin} alt="" />
        </div>
        <div className='flex items-center'>
            <h1 className='text-white'>-1000</h1>
            <img className='w-[30px]' src={coin} alt="" />
        </div>
       </div>
      </div>
      <div className='bg-[#32363C] mt-[10px] mb-[10px]'>
       <div className='flex justify-around items-center'>
        <h1 className='text-white'>lvl 2</h1>
        <div className='flex items-center'>
            <h1 className='text-white'>+3</h1>
            <img className='w-[30px]' src={coin} alt="" />
        </div>
        <div className='flex items-center'>
            <h1 className='text-white'>-2500</h1>
            <img className='w-[30px]' src={coin} alt="" />
        </div>
       </div>
      </div>
      <div className='bg-[#32363C]'>
       <div className='flex justify-around items-center'>
        <h1 className='text-white'>lvl 3</h1>
        <div className='flex items-center'>
            <h1 className='text-white'>+4</h1>
            <img className='w-[30px]' src={coin} alt="" />
        </div>
        <div className='flex items-center'>
            <h1 className='text-white'>-6000</h1>
            <img className='w-[30px]' src={coin} alt="" />
        </div>
       </div>
      </div>
      <div className='flex justify-center  mt-[50px]'>
        <button className='cursor-pointer' onClick={click}><img src={hero} alt="logo" /></button>
      </div>
      <div className='flex justify-around mt-[50px]'>
        <h1 className='text-white text-2xl'>6500 / 6500</h1>
        <h1 className='text-white text-2xl'>Boost</h1>
      </div>
      <div className='flex bg-[#32363C] justify-around p-[10px] rounded-2xl '>
        <h1 className='text-white'>Exchange</h1>
        <h1 className='text-white'>Mine</h1>
        <h1 className='text-white'>Friends</h1>
        <h1 className='text-white'>Earn</h1>
        <h1 className='text-white'>Airdrop</h1>
      </div>
    </div>
  )
}

export default Earn