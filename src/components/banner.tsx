import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

function Banner() {
    return (
        <section className='bg-blue-50/40 py-16 bg-[url("/images/malta.png")] bg-contain bg-right-bottom bg-no-repeat'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7 items-center'>
                <div className='md:w-[58%] w-full'>
                    <p className='text-lg font-normal text-[#535353] p-2 bg-gradient-to-r from-[#8AC0482E] via-[#8AC0482E] to-[#D1F3E3] w-fit rounded-md flex items-center gap-2'>
                        <FaLocationDot className="text-[#5FB19A]" /> Mariam Al-Batool Mosque
                    </p>
                    <h1 className='md:text-8xl text-4xl font-bold text-[#34A777] mt-5'>
                        Welcome to
                    </h1>
                    <h2 className='md:text-7xl text-3xl font-bold '>
                        Malta Islamic Center
                    </h2>
                    <p className='text-2xl font-bold max-w-[615px] my-3'>
                        A Place of Worship and Guidance, Where You Embrace the Beauty of Islamic Teachings.
                    </p>
                    <Link href="#contact" className='text-lg font-semibold text-white flex items-center gap-3 bg-[#34A777] rounded-[10px] rounded-br-[20px] px-9 py-3 w-fit'>
                        Consult now <FaArrowRight />
                    </Link>
                </div>
                <div className='md:w-[42%] w-full'>
                    {/* <Image src="/images/malta.png" alt="baner-img" width={928} height={674} className='w-full' /> */}
                </div>
            </div>
        </section>
    )
}

export default Banner