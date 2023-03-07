import React from 'react'
import Image from 'next/image'

const Storerow = () => {
  return (
    <div className='top-[40]'>
        <div className='h-[40rem] bg-[#424242]'>
            <div className=' max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1>Featured Item</h1>
                </div>
            </div>
        </div>
        <div className='h-[30rem] bg-[#222222]'>
            <div>Storerow 1</div>
        </div>
        <div className='h-[30rem] bg-[#424242]'>
            <div >Storerow 2</div>
        </div>
    </div>
  )
}

export default Storerow