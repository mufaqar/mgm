import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cta() {
    return (
        <section className='pt-16'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 gap-7 items-center'>
                <div>
                    <h2 className='md:text-6xl text-3xl font-semibold '>
                        Download for free and start today
                    </h2>
                    <div className='flex gap-4 my-5'>
                        <Link href="#">
                            <Image src="/images/apple.svg" alt="apple" width={181} height={66} />
                        </Link>
                        <Link href="#">
                            <Image src="/images/apple.svg" alt="apple" width={181} height={66} />
                        </Link>
                    </div>
                    <p className='md:text-4xl text-xl font-bold text-[#4E4E4E]'>
                        Check out this short video to learn more about the Sirat App.
                    </p>
                </div>
                <div>
                    <Image src="/images/cta.png" alt="cta" width={741} height={509} />
                </div>
            </div>
        </section>
    )
}

export default Cta