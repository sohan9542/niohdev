import React from 'react'

const Topbar = () => {
  return (
    <div className=' h-24 w-full flex items-center justify-end pr-10 fixed top-0 left-0 z-50'>
      <div>
      <button className=' px-3 rounded-xl text-white font-semibold text-sm uppercase py-3 bg-pr cursor-pointer'>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Topbar