import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight, FaBars } from "react-icons/fa6";

function Header() {
    const [menu, setMenu] = useState(false)
    return (
        <header className='py-4'>
            <div className='container mx-auto px-4 flex flex-row gap-5 items-center'>
                <div className='md:w-1/4 w-1/3'>
                    <Link href="/">
                        <Image src="/images/logo.png" alt="logo" width={201} height={98} />
                    </Link>
                </div>
                <nav className='md:w-3/4 w-2/3 flex justify-end'>
                    <button onClick={() => { setMenu(!menu) }}>
                        <FaBars className="text-3xl font-semibold sm:hidden" />
                    </button>
                    <ul className={`sm:justify-end sm:static absolute left-0 right-0 flex sm:flex-row flex-col sm:gap-10 gap-4 p-5 sm:items-center ${menu ? 'top-20 bg-white z-40' : 'top-[-100%]'}`}>
                        <li>
                            <Link href="/" className='text-lg font-semibold text-[#474747]'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#services" className='text-lg font-semibold text-[#474747]'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className='text-lg font-semibold text-white flex items-center gap-3 bg-[#34A777] rounded-[10px] rounded-br-[20px] px-9 py-3'>
                                Contact <FaArrowRight />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header