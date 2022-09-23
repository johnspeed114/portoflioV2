import requests from '../utils/requests'
import Router, { useRouter } from 'next/router'

function Nav() {
  const router = useRouter()
  return (
    <nav className='relative'>
      {/* px is padding */}
      {/* added scrollbar hidden pluggin through yarnk */}
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            // acitve in classname for tailwind means when you trigger the event
            //last:pr means the border of the child will get it
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>
            {title}
          </h2>
        ))}
      </div>
      {/* from attri below allows for the text background color disappear without the "to" attri */}
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  )
}

export default Nav
