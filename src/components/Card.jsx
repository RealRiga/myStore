import React from 'react'


const Card = ({title, price, image, onClick}) => {
  return (
    <div>
        <div className="p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 cursor-pointer" onClick={onClick}>
            <img src={image} />
            <div className='flex flex-col items-center'>
                <p className='font-semibold text-lg'>{ title }</p>
                <p className='text-xs font-regular text-gray-400'>${ price }</p>
            </div>
        </div>
    </div>
  )
}

export default Card
