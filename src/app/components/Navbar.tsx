"use client"

import React, { useEffect, useState } from 'react'
import { NavbarLinks, SocialLinks } from '../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {

	const [isRouting, setIsRouting] = useState<boolean>(false)
	const [isActive, setIsActive] = useState<string>("Main")
	const [prevPath, setPrevPath] = useState<string>("")

	const path = usePathname()

	useEffect(()=>{
		if(prevPath !== path){
			setIsRouting(true)
		}
	},[])

	useEffect(()=>{
		if(isRouting){
			const timeout = setTimeout(()=>{
				setIsRouting(false)
			},1200)
			return ()=> clearTimeout(timeout)
		}
	},[])

	//  bg-transparent 
	//  bg-blue-700/90
	return (
		<div className='fixed top-0 bg-blue-700/90 z-[20] items-center justify-between w-full flex flex-row gap-5 md:jsutify-between md:px-30 p-5'>
			<div>
				<h1 className='text-white md:text-[40px] text-[20px]'>
					Бизнес <span className='font-thin'>Import</span>
					<span className='text-red-500'>.</span>
				</h1>
				<AnimatePresence mode='wait'>
					<div className='flex flex-row gap-5'>
						{NavbarLinks.map((item:any,index:number) => 
							<Link
								key={index}
								href={item.link}
								onClick={()=>setIsActive(item.name)}
								className='text-white'
								// className={`${isActive === item.name?"text-orange-500 font-bold":"text-white"}`}
							>{item.name}</Link>
						)}
					</div>
				</AnimatePresence>
			</div>
			<div className='flex-row gap-5 items-center hidden md:flex'>
				{SocialLinks.map((item:any,index:number) => 
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
