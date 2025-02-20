import React from 'react'
import NavItem from './NavItem'

export default function NavBar() {
  return (
    <div className='flex justify-center bg-amber-100 dark:bg-gray-500 p-4'>
      <NavItem title={"Trending"} param="fetchTrending"/>
      <NavItem title={"TopRated"} param={"fetchTopRated"}/>
    </div>
  )
}
