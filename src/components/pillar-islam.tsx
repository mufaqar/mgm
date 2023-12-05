import Image from 'next/image'
import React from 'react'

function Pillar_Islam() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-6xl text-3xl font-bold '>
                    Pillars Of Islam
                </h2>
            </div>
            <div className='relative bg-gradient-to-tl from-[#34A777] via-[#8AC0488F] bg-[#8AC0488F]'>
                <Image src='/images/cta-bg.png' alt="cta-bg" width={1920} height={336} className='' />
                <div className='container mx-auto px-4 absolute top-0 grid md:grid-cols-5 grid-cols-1 ga-7'>
                    <div className=' py-5'>
                        <div className='bg-[#F5FCB9] rounded-full p-4 w-fit mx-auto'>
                            <Image src="/images/pillar/1.svg" alt='/pillar/1' width={50} height={50} />
                        </div>
                        <h3 className='md:text-3xl text-xl font-bold text-center'>
                            Shahada
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pillar_Islam