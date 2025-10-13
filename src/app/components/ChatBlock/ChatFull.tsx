import axios from 'axios'
import React, { useState } from 'react'
import { BounceLoader } from 'react-spinners'

export const ChatFull = () => {

	const [title, setTitle] = useState<string>("")
	const [minPrice, setMinPrice] = useState<number>()
	const [maxPrice, setMaxPrice] = useState<number>()
	const [volume, setVolume] = useState<number>()

	// const [framePosition, setFramePosition] = useState<number>(0)
	// const [frameSize, setFrameSize] = useState<number>(20)
	const [load, setLoad] = useState<boolean>(true)

	const findItem = async () => {
		console.log(process.env)
		let query = ""
		query += "language=en&"
		query += `framePosition=${0}&`
		query += `frameSize=${30}&`
		query += `ItemTitle=${title}&`
		query += `MinPrice=${minPrice}&`
		query += `MaxPrice=${maxPrice}&`
		query += `MinVolume=${volume}`
		setLoad(!load)
		axios.get(`http://businessimport.ru:8000/api/search?${query}`)
			.then(responce => console.log(responce.data))
			.then(() => setLoad(false))
	}

	return <>
		<div className='p-2 bg-gray-500/30 h-[600px] rounded-xl flex flex-col'>
			<div className='h-4/12 bg-gray-900/80 m-1 p-2 rounded-xl flex flex-col'>
				<input value={title} onChange={(e)=>setTitle(e.target.value)} className='border-2 m-1 p-1 text-center border-gray-800 bg-gray-100/20 text-white rounded-xl' type='text' placeholder='Наименование товара' />
				<div className='flex'>
					<input value={minPrice} onChange={(e)=>setMinPrice(Number(e.target.value))} className='border-2 m-1 p-1 w-full text-center border-gray-800 bg-gray-100/20 text-white rounded-xl' type='number' placeholder='Мин. цена'></input>
					<input value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))} className='border-2 m-1 p-1 w-full text-center border-gray-800 bg-gray-100/20 text-white rounded-xl' type='number' placeholder='Макс. цена'></input>
				</div>
				<input value={volume} onChange={(e)=>setVolume(Number(e.target.value))} className='border-2 m-1 p-1 text-center border-gray-800 bg-gray-100/20 text-white rounded-xl' type='number' placeholder='Объём товара'></input>
				<button onClick={findItem} className="w-full m-1 bg-gradient-to-r from-gray-500 to-indigo-600 text-white p-1 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex justify-center items-center space-x-2">Поиск</button>
			</div>
			<div className='h-8/12 bg-gray-900/80 m-1 p-2 rounded-xl relative'>
				{load && <span className='absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'><BounceLoader size={35}/></span>}
				{!load && <div className='w-full h-full rounded-xl bg-red-600/10'>
				</div>}
			</div>
		</div>
	</>
}
