import React from 'react'
import Earn from './components/Earn'
import Coins from './components/Coins'
import Profit from './components/Profit'

const App = () => {
  return (
    <div className='flex justify-center gap-[5px] mt-0.5 mb-0.5'>
      <Earn/>
      <Coins/>
      <Profit/>
    </div>
  )
}

export default App