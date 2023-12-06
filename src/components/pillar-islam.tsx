import Image from 'next/image'
import React from 'react'

function Pillar_Islam() {
    return (
        <section className='py-16  bg-[url("/images/pillar.png")] bg-center bg-cover'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-6xl text-3xl font-bold py-5'>
                    Pillars Of Islam
                </h2>
            </div>
            <div className=''>
                <div className='container mx-auto px-4 grid md:grid-cols-5 grid-cols-1 ga-7 items-center py-20'>
                    <div className='py-5 md:h-56 grid items-end'>
                        <div className='bg-[#F5FCB9] rounded-full p-4 w-fit mx-auto'>
                            <Image src="/images/pillar/1.svg" alt='/pillar/1' width={50} height={50} />
                        </div>
                        <h3 className='md:text-3xl text-xl font-bold text-center'>
                            Shahada
                        </h3>
                    </div>
                    <div className='py-5 md:h-56 grid items-start'>
                        <div className='bg-[#F5FCB9] rounded-full p-4 w-fit mx-auto'>
                            <Image src="/images/pillar/3.svg" alt='/pillar/3' width={50} height={50} />
                        </div>
                        <h3 className='md:text-3xl text-xl font-bold text-center'>
                            Salat
                        </h3>
                    </div>
                    <div className='py-5 md:h-56 grid items-end'>
                        <div className='bg-[#F5FCB9] rounded-full p-4 w-fit mx-auto'>
                            <Image src="/images/pillar/4.svg" alt='/pillar/4' width={50} height={50} />
                        </div>
                        <h3 className='md:text-3xl text-xl font-bold text-center'>
                            Fasting
                        </h3>
                    </div>
                    <div className='py-5 md:h-56 grid items-start'>
                        <div className='bg-[#F5FCB9] rounded-full p-4 w-fit mx-auto'>
                            <Image src="/images/pillar/5.svg" alt='/pillar/5' width={50} height={50} />
                        </div>
                        <h3 className='md:text-3xl text-xl font-bold text-center'>
                            Zakat
                        </h3>
                    </div>
                    <div className='py-5 md:h-56 grid items-end'>
                        <div className='bg-[#F5FCB9] rounded-full p-4 w-fit mx-auto'>
                            <Image src="/images/pillar/2.svg" alt='/pillar/2' width={50} height={50} />
                        </div>
                        <h3 className='md:text-3xl text-xl font-bold text-center'>
                            Hajj
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pillar_Islam