import React from 'react'

const usercard = () => {

const profile=""
const name="Abhiram"
const email="example@gmail.com"
const phoneno="9xxxxxxx99"
const address="Town side Newyork"
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-80 border border-gray-200">
        <div className="flex flex-col items-center text-center">
        <img src={profile} alt="profile_photo" className='w-24 h-24 rounded-full border-2 border-gray-300'/>
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-gray-500 text-sm">{email}</p>
        <p className="text-gray-500 text-sm">{phoneno}</p>
        <p className="text-gray-500 text-sm mt-1">{address}</p>

        </div>
    </div>
  )
}

export default usercard