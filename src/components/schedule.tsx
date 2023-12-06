import Image from 'next/image'
import React from 'react'
import { HiOutlineClock } from "react-icons/hi2";
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link';

function Schedule({prayerTimings}:any) {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div>
                    <div className='relative md:h-[200px] h-[120px] rounded-3xl'>
                        <Image src="/images/time-bg.png" alt="time-bg" width={739} height={223} className='rounded-3xl h-full' />
                        <div className='absolute top-0 p-5'>
                            <h4 className='md:text-4xl text-xl font-semibold text-white'>
                                Prayer times in Malta
                            </h4>
                            <h4 className='md:text-4xl text-xl font-semibold text-white md:my-4'>
                            
                            {prayerTimings?.date?.hijri?.gregorian?.weekday?.en}  {prayerTimings?.date?.readable}
                            </h4>
                            <p className='flex items-center justify-between max-w-[300px]'>
                                <span className='md:text-2xl text-lg font-medium text-white'>
                                    Sun Rise
                                </span>
                                <span className='md:text-4xl text-xl font-medium text-white'>
                                {prayerTimings?.timings?.Sunrise} <span className='text-xl'>AM</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between p-4 mt-6'>
                        <h5 className='md:text-xl text-lg font-medium text-[#36AE7C] w-1/3'>
                            Salah
                        </h5>
                       
                        <h5 className='md:text-xl text-lg font-medium text-[#36AE7C] w-1/3 text-end'>
                            Iqaamah
                        </h5>
                    </div>
                    <div className='grid gap-3'>

                   
                       


                        <div className='flex justify-between p-4 border border-[#8AC048] shadow-[0px_0px_3px_0px_rgb(0,0,0,32%)] rounded-md'>
                            <h5 className='md:text-xl text-lg font-medium flex items-center gap-2  w-1/3'>
                                <HiOutlineClock className="text-[#36AE7C] text-2xl" />   Fajr
                            </h5>
                            
                            <h5 className='md:text-xl text-lg font-medium w-1/3 text-end'>
                            {prayerTimings?.timings?.Fajr}
                            </h5>
                        </div>
                        <div className='flex justify-between p-4 border border-[#8AC048] shadow-[0px_0px_3px_0px_rgb(0,0,0,32%)] rounded-md'>
                            <h5 className='md:text-xl text-lg font-medium flex items-center gap-2  w-1/3'>
                                <HiOutlineClock className="text-[#36AE7C] text-2xl" />   Dhuhr
                            </h5>
                         
                            <h5 className='md:text-xl text-lg font-medium w-1/3 text-end'>
                            {prayerTimings?.timings?.Dhuhr}
                            </h5>
                        </div>
                        <div className='flex justify-between p-4 border border-[#8AC048] shadow-[0px_0px_3px_0px_rgb(0,0,0,32%)] rounded-md'>
                            <h5 className='md:text-xl text-lg font-medium flex items-center gap-2  w-1/3'>
                                <HiOutlineClock className="text-[#36AE7C] text-2xl" />   Asr
                            </h5>
                           
                            <h5 className='md:text-xl text-lg font-medium w-1/3 text-end'>
                            {prayerTimings?.timings?.Asr}
                            </h5>
                        </div>
                        <div className='flex justify-between p-4 border border-[#8AC048] shadow-[0px_0px_3px_0px_rgb(0,0,0,32%)] rounded-md'>
                            <h5 className='md:text-xl text-lg font-medium flex items-center gap-2  w-1/3'>
                                <HiOutlineClock className="text-[#36AE7C] text-2xl" />   Maghrib
                            </h5>
                           
                            <h5 className='md:text-xl text-lg font-medium w-1/3 text-end'>
                            {prayerTimings?.timings?.Maghrib}
                            </h5>
                        </div>
                        <div className='flex justify-between p-4 border border-[#8AC048] shadow-[0px_0px_3px_0px_rgb(0,0,0,32%)] rounded-md'>
                            <h5 className='md:text-xl text-lg font-medium flex items-center gap-2  w-1/3'>
                                <HiOutlineClock className="text-[#36AE7C] text-2xl" />   Isha
                            </h5>
                           
                            <h5 className='md:text-xl text-lg font-medium w-1/3 text-end'>
                            {prayerTimings?.timings?.Isha}
                            </h5>
                        </div>
                        <div className='flex justify-between p-4 border border-[#8AC048] shadow-[0px_0px_3px_0px_rgb(0,0,0,32%)] rounded-md'>
                            <h5 className='md:text-xl text-lg font-medium flex items-center gap-2  w-1/3'>
                                <HiOutlineClock className="text-[#36AE7C] text-2xl" />   Imsak
                            </h5>
                           
                            <h5 className='md:text-xl text-lg font-medium w-1/3 text-end'>
                            {prayerTimings?.timings?.Imsak}
                            </h5>
                        </div>


                        <div className='flex justify-between p-4 bg-[#8AC048] shadow-[0px_0px_3px_0px_rgb(0,0,0,32%)] rounded-md'>
                            <h5 className='md:text-xl text-lg font-medium flex items-center gap-2 text-center text-white w-1/3'>
                                <HiOutlineClock className="text-[#36AE7C] text-2xl" />   Sunset
                            </h5>
                            <h5 className='md:text-xl text-lg font-medium text-white w-1/3 text-end'>
                            {prayerTimings?.timings?.Sunset}
                            </h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='relative md:h-[200px] h-[120px] rounded-3xl'>
                        <Image src="/images/date-bg.png" alt="date-bg" width={739} height={223} className='rounded-3xl h-full' />
                        <div className='absolute top-0 p-5'>
                            <h4 className='md:text-4xl text-xl font-semibold text-white'>
                                Islamic Date
                            </h4>
                            <h4 className='md:text-4xl text-xl font-semibold text-white md:my-4'>
                            {prayerTimings?.date?.hijri?.date}
                            </h4>
                            <p className='flex items-center justify-between'>
                                <span className='md:text-2xl text-lg font-medium text-white'>
                                   
                                    {prayerTimings?.date?.hijri?.month.en}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='rounded-[20px] shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)] mt-6 bg-white pb-10'>
                        <div className='bg-[#36AE7C] h-[124px] w-full rounded-tl-[20px] rounded-tr-[20px]'></div>
                        <Image src="/images/imam-mohammed.png" alt="imam-mohammed" width={382} height={382} className='mx-auto -mt-24 lg:w-auto w-[180px]' />
                        <h3 className='md:text-3xl text-xl font-semibold text-center mt-3'>
                            Imam Mohammed Elsadi
                        </h3>
                        <p className='text-2xl font-medium text-center text-[#36AE7C]'>
                            Imam At Islamic Centre
                        </p>
                        <Link href="https://www.linkedin.com/in/mohammad-elsadi-85627712a/?originalSubdomain=mt" target='_blank' className='md:text-3xl font-bold text-[#0A66C2] text-center flex items-center w-fit mx-auto'>
                            Linked
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Schedule