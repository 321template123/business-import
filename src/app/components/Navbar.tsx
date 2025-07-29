import React from 'react'
import { INavbarLink, ISocialLink, NavbarLinks, SocialLinks } from '../constants'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
	return (
		<div className='fixed top-0 bg-blue-700/90 z-[20] items-center justify-between w-full flex flex-row gap-5 md:jsutify-between md:px-30 p-5'>
			<div>
				<h1 className='text-white md:text-[40px] text-[20px]'>
					Бизнес <span className='font-thin'>Import</span>
					<span className='text-red-500'>.</span>
				</h1>
				<div className='flex flex-row gap-5'>
					{NavbarLinks.map((item:INavbarLink,index:number) => 
						<Link
							key={index}
							href={item.link}
							className='text-white'
						>{item.name}</Link>
					)}
				</div>
			</div>
			<div className='flex-row gap-5 items-center hidden md:flex'>
				{SocialLinks.map((item:ISocialLink,index:number) => 
					<Link
						key={index}
						href={item.link}
						target='_blank'
					>
						<Image
							key={index}
							src={item.icon}
							alt={item.name}
							width={50}
							height={50}
						/>
					</Link>
				)}
			</div>
		</div>
	)
}
