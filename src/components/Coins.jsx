import React, { useState } from 'react';
import coin from "../assets/coin.svg"
import logo from "../assets/logo.svg"
import person from "../assets/person.svg"
import x10 from "../assets/x10.svg"


const Earn = () => {
  const [count, setCount] = useState(5000);

  function click() {
    setCount(count + 1);
  }

  function buyItem(price) {
    if (count >= price) {
      setCount(count - price);
    }
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
      <div className='bg-[#32363C] mt-[50px]'>
        <div className='flex justify-center gap-[30px]'>
            <img src={logo} alt="" />
            <div>
            <h1 className='text-white'>Тоp 10 cmc pairs</h1>
            <h1 className='text-white'>120</h1>
            </div>
        </div>
        <div className='flex justify-center items-center gap-[30px]'>
                <h1 className='text-white'>lvl 1</h1>
                <div className='flex justify-center items-center'>
                <button onClick={() => buyItem(192)} className='flex justify-between bg-[#3C4047] p-2 rounded-lg text-white'>
            <img className='w-[20px]' src={coin} alt="coin" /> 192
          </button>
                </div>
            </div>
      </div>
      <div className='bg-[#32363C] mt-[50px]'>
        <div className='flex justify-center gap-[30px]'>
            <img src={person} alt="" />
            <div>
            <h1 className='text-white'>Mene coins</h1>
            <h1 className='text-white'>376</h1>
            </div>
        </div>
        <div className='flex justify-center items-center gap-[30px]'>
                <h1 className='text-white'>lvl 1</h1>
                <div className='flex justify-center items-center'>
                <button onClick={() => buyItem(2300)} className='flex justify-between bg-[#3C4047] p-2 rounded-lg text-white'>
                      <img className='w-[20px]' src={coin} alt="coin" /> 2.3K
          </button>
                </div>
            </div>
      </div>
      <div className='bg-[#32363C] mt-[50px]'>
        <div className='flex justify-center gap-[30px]'>
            <img src={x10} alt="" />
            <div>
            <h1 className='text-white'>Margin trading x10</h1>
            <h1 className='text-white'>997</h1>
            </div>
        </div>
        <div className='flex justify-center items-center gap-[30px]'>
                <h1 className='text-white'>lvl 1</h1>
                <div className='flex justify-center items-center'>
                <button onClick={() => buyItem(11200)} className='flex justify-between bg-[#3C4047] p-2 rounded-lg text-white'>
            <img className='w-[20px]' src={coin} alt="coin" /> 11.2K
          </button>
                </div>
            </div>
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