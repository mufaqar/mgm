import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaMobileAlt } from "react-icons/fa";
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaLocationDot, FaTwitter, FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className='pt-16 bg-[url("/images/team-shap.png")] bg-cover bg-center mix-blend-overlay bg-[#22282F]'>
      <div className='container mx-auto px-4 grid md:grid-cols-4 gap-7'>
        <div>
          <Link href="/" className='inline-block'>
            <Image src="/images/footer-logo.png" alt='footer-logo' width={201} height={98} />
          </Link>
          <ul className='flex flex-wrap gap-3 mt-10'>
            <li>
              <Link href="#" className='flex h-8 w-8 bg-[#89DBC4] rounded-full justify-center items-center'>
                <FaFacebookF className="text-xl text-[#34A777]" />
              </Link>
            </li>
            <li>
              <Link href="#" className='flex h-8 w-8 bg-[#89DBC4] rounded-full justify-center items-center'>
                <FaYoutube className="text-xl text-[#34A777]" />
              </Link>
            </li>
            <li>
              <Link href="#" className='flex h-8 w-8 bg-[#89DBC4] rounded-full justify-center items-center'>
                <FaInstagram className="text-xl text-[#34A777]" />
              </Link>
            </li>
            <li>
              <Link href="#" className='flex h-8 w-8 bg-[#89DBC4] rounded-full justify-center items-center'>
                <FaLinkedinIn className="text-xl text-[#34A777]" />
              </Link>
            </li>
            <li>
              <Link href="#" className='flex h-8 w-8 bg-[#89DBC4] rounded-full justify-center items-center'>
                <FaTwitter className="text-xl text-[#34A777]" />
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-span-2 grid md:grid-cols-3 grid-cols-1 gap-3'>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link href="#" className='text-base text-white'>
                About
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Service
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                News
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Events
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Donate Us
              </Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link href="#" className='text-base text-white'>
                Hifz
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Aqidah
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Tajweed
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Quran Studies
              </Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link href="#" className='text-base text-white'>
                Committe
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Imam
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Social Workers
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base text-white'>
                Media Others
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-3'>
            <li className='flex gap-2 items-center'>
              <span className='flex h-9 w-9 bg-[#34A777] rounded-full justify-center items-center'>
                <FaLocationDot className="text-xl text-white" />
              </span>
              <p className='text-base text-white flex flex-col'>
                <span>
                  Address
                </span>
                <span>
                  orradino Rd, Paola PLA 9037, Malta
                </span>
              </p>
            </li>
            <li className='flex gap-2 items-center'>
              <span className='flex h-9 w-9 bg-[#34A777] rounded-full justify-center items-center'>
                <FaMobileAlt className="text-xl text-white" />
              </span>
              <Link href="#" className='text-base text-white flex flex-col'>
                <span>
                  Phone
                </span>
                <span>
                  +92 305 5862457
                </span>
              </Link>
            </li>
            <li className='flex gap-2 items-center'>
              <span className='flex h-9 w-9 bg-[#34A777] rounded-full justify-center items-center'>
                <FaEnvelope className="text-xl text-white" />
              </span>
              <p className='text-base text-white flex flex-col'>
                <span>
                  Time
                </span>
                <span>
                  Mon-Fri: 4 PM-11 PM
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='py-5 border-t border-white/20 mt-16'>
        <div className='container mx-auto px-4 flex md:flex-row flex-col-reverse justify-between gap-7'>
          <p className='text-base text-white md:text-start text-center'>
            Sirat 2024 ©, All rights reserved.
          </p>
          <ul className='flex flex-wrap gap-3 items-center md:justify-end justify-center'>
            <li>
              <Link href="#" className='md:text-base text-sm text-white'>
                Sitemap
              </Link>
            </li>
            <li className='md:text-base text-sm text-white'>
              -
            </li>
            <li>
              <Link href="#" className='md:text-base text-sm text-white'>
                Terms & Conditions
              </Link>
            </li>
            <li className='md:text-base text-sm text-white'>
              -
            </li>
            <li>
              <Link href="#" className='md:text-base text-sm text-white'>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer