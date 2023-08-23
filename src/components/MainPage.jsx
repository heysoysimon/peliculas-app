import React from 'react'
import Formulario from './Formulario'
import Movies from './Movies'

export const MainPage = () => {
  return (
    <>
    <div className='bg-zinc-800 w-full'>
      <div className='text-center'>
        <Formulario />
        <Movies />
      </div>
    </div>
    </>
  )
}