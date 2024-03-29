import React from 'react'

export default function FormFild({lavelName,type,name,placeholder,value,handleChange,handleSurpriseMe,isSurpriseMe}) {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
   <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
    {lavelName}
   </label>
   { isSurpriseMe &&
 (
  <button
  onClick={handleSurpriseMe}
  className='font-semibold text-xs bg-[#ECECF1] px-2 py-1 rounded-[5px] text-black'
  >
    surprise me
  </button>
 )
   }
      </div>
      <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
      ></input>
    </div>
  )
}
