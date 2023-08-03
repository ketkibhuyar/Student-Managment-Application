import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='p-5 bg-transparent shadow md:flex md:items-center md:justify-between'>
                <div>
                    <Link to='/' className="hover:text-blue-500 font-semibold text-xl p-4 m-4 cursor-pointer">
                    Student Management Application
                    </Link>
                </div>
                <ul>
                    <li className='flex justify-center gap-x-5'>
                        <Link to='/add-student' className='text-lg hover:text-blue-500 duration-500 cursor-pointer'>
                            Add student
                        </Link>
                        <Link to='/update-student' className='text-lg hover:text-blue-500 duration-500 cursor-pointer'>
                            Update
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent;
