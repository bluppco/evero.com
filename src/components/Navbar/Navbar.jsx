import React from 'react';
import {FaPlus, FaUser } from 'react-icons/fa'; //Social icons 
import Button from '../atoms/button/Button.astro';
import Facebookicon from "public/icons/facebook.svg";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-2 z-10">
      <div className="container mx-auto px-3 py-2 flex justify-between items-center md:gap-7 xl:gap-10">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="./logo/Layer-21.svg" alt="eVero" className="h-12 mr-4" />
          
          
        </div>

        <div className=''>
          <a href="tel:+18444638376" className="text-black flex gap-2 items-center font-bold text-lg hover:text-orange-500 duration-150">
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.5382 19.5804L24.6007 20.8929C24.7424 20.9545 24.8581 21.0636 24.9281 21.2013C24.998 21.3391 25.0177 21.4969 24.9838 21.6476L24.3276 24.4914C24.2942 24.636 24.2127 24.7651 24.0965 24.8575C23.9803 24.9499 23.8362 25.0001 23.6877 25C16.6849 25 11 19.3261 11 12.3123C11 12.1639 11.0502 12.0198 11.1426 11.9037C11.235 11.7875 11.364 11.7061 11.5086 11.6727L14.3524 11.0164C14.5024 10.9823 14.6596 11.0017 14.7968 11.071C14.9341 11.1404 15.0429 11.2555 15.1044 11.3965L16.4169 14.4591C16.4729 14.5899 16.4848 14.7353 16.4508 14.8735C16.4167 15.0116 16.3386 15.1349 16.2282 15.2247L14.5712 16.581C15.5747 18.7095 17.2877 20.4225 19.4163 21.4261L20.7726 19.769C20.8625 19.6589 20.9858 19.5809 21.1239 19.5469C21.262 19.5129 21.4074 19.5246 21.5382 19.5804Z" fill="#FD9800"></path>
						</svg>
            +1 844 GOEVERO
          </a>
        </div>

        <div className="hidden xl:flex items-center space-x-7">

          <a href="#" className="text-black font-semibold text-sm flex items-center text-center hover:text-orange-500 duration-100 h-9">Home</a>

          <div className="relative group ">
            <a href="#" className="text-black font-semibold text-sm flex items-center gap-1 text-center hover:text-orange-500 duration-100 h-9">Company <span className='font-light text-xs text-orange-500'><FaPlus/></span></a>
            <div className="absolute hidden group-hover:block group-hover:transition-all bg-white shadow-md  rounded-lg w-[180px]">
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">About Us</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Leadership Team</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Careers</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Outreach</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Client Satisfaction and Testimonials</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Case Studies</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Videos</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">News</a>
            </div>
          </div>

          <div className="relative group">
          <a href="#" className="text-black font-semibold text-[13px] flex items-center gap-1 hover:text-orange-500 duration-100 h-9">Our Platform <span className='font-light text-xs text-orange-500'><FaPlus/></span></a>
            <div className="absolute hidden group-hover:block bg-white shadow-md  rounded-lg w-[180px] ">
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">About our Platform</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">E-Health Records (EHR)</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Self-Direction services (SDS)</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Electronic Visit Verification (EVV)</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Billing & Revenue Cycle Management</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Personal Care Services (CDPAP)</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Crisis Response & Support</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Visibility & Reporting</a>
              
            </div>
          </div>

          <div className="relative group">
          <a href="#" className="text-black font-semibold text-[13px] flex items-center hover:text-orange-500 duration-100 h-9">Who we Help <span className='font-light text-xs text-orange-500'> <FaPlus/></span></a>
            <div className="absolute hidden group-hover:block bg-white shadow-md  rounded-lg w-[180px]">

              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Traditional Health & Human Services Agencies</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Fiscal Intermediaries</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Support Brokers</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Direct Support Professionals</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Government Agencies</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Self-Directing Individuals & Families</a>
              
            </div>
          </div>

          <div className="relative group">
          <a href="#" className="text-black font-semibold text-[13px] flex items-center gap-1 hover:text-orange-500 duration-100 h-9">Apps <span className='font-light text-xs text-orange-500'> <FaPlus/></span></a>
            <div className="absolute hidden group-hover:block bg-white shadow-md  rounded-lg w-[180px]">

              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">eVeroMobile</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">eVeroPortal</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">eVeroConnect</a>
              
            </div>
          </div>

          <div className="relative group">
          <a href="#" className="text-black font-semibold text-[13px] flex items-center gap-1 hover:text-orange-500 duration-100 h-9">Our Expertise <span className='font-light text-xs text-orange-500'> <FaPlus/></span></a>
            <div className="absolute hidden group-hover:block bg-white shadow-md  rounded-lg w-[180px]">

              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Client Services</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Software Development</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Interoperability</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Data Security & Compliance</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Continuing Education & Training</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Data Science & Analytics</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">eVeroBlog</a>
              
            </div>
          </div>

          <div className="relative group">
          <a href="#" className="text-black font-semibold text-[13px] flex items-center gap-1 hover:text-orange-500 duration-100 h-9">Support <span className='font-light text-xs text-orange-500'> <FaPlus/></span></a>
            <div className="absolute hidden group-hover:block bg-white shadow-md  rounded-lg w-[180px]">
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">Support Services</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">eVeroEd</a>
              <a href="#" className="flex px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs  gap-3"><FaUser />eVero Ed Login</a>
              <a href="#" className="block px-6 hover:bg-orange-500 hover:text-white  py-4 text-black font-semibold text-xs">MyeVeroPortal Login</a>
              
            </div>
          </div>
          
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg ring-2 ring-orange-500 ring-offset-2 duration-100 hover:ring-0 hover:border-solid hover:border-2 hover:border-orange-500">
              Contact Us
          </button>
          
        </div>
        <div className="hidden md:flex items-center space-x-3">
          
          <a href="#" className="text-black font-semibold w-8">
            <img src="/icons/linkedin.svg" alt="li" />
          </a>

          <a href="#" className="text-black font-semibold w-8">
            <img src="/icons/instagram.svg" alt="is" />
          </a>

          <a href="#" className="text-black font-semibold w-8">
            <img src="/icons/facebook.svg" alt="fb" />
          </a>

          <a href="#" className="text-black font-semibold w-8">
            <img src="/icons/Xtwitter.svg" alt="tw" />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
