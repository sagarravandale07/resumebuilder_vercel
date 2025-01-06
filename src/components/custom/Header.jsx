import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
           <Link to="/dashboard">
                <img src="/logo2.svg" width={60} height={80} alt="Logo" />
            </Link>


            {
                isSignedIn ?
                    <div className='flex gap-2 items-center'>
                        <Link to={'/dashboard'}>
                             <Button className=' bg-indigo-600 text-white rounded-md hover:bg-gray-100 hover:text-black'>Dashboard</Button>
                        </Link>
                        <UserButton />
                    </div> :
                    <Link to={'/auth/sign-in'}>
                        <Button className=' bg-indigo-600 text-white rounded-md hover:bg-gray-100 hover:text-black'>Get Started</Button>
                    </Link>
            }


        </div>
    )
}

export default Header
