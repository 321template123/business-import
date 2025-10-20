import { CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon, CubeIcon, EllipsisHorizontalIcon, LinkIcon, ScaleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {createPortal} from 'react-dom'
import { BounceLoader } from 'react-spinners'

export const ChatFull = () => {

	const [title, setTitle] = useState<string>("")
	const [minPrice, setMinPrice] = useState<number>()
	const [maxPrice, setMaxPrice] = useState<number>()
	const [volume, setVolume] = useState<number>()

	const [load, setLoad] = useState<boolean>(false)

	const [showItem, setShowItem] = useState<number>(-1)
	const [page, setPage] = useState<number>(1)
	const ITEMS_PER_PAGE = 2

	const [items, setItems] = useState<any[]>([
		 {
			//габариты
			dimensions: {
				height: 11.5,
				length: 17.5,
				weight: 0.1,
				width: 9.5
			},
			id: "abb-798221206257",//id товара
			image: "https://cbu01.alicdn.com/img/ibank/O1CN01Rd71AO1nKZRxgw2dw_!!2214121275071-0-cib.jpg",//ссылка на картинку
			location: null,//город откуда товар(думаю тебе не нужен, может быть пустым)
			min_order_quantity: 1,//минимальное кол-во товара(может быть пустым)
			original_title: "高版本方形小红书同款墨镜女时尚防紫外线缪缪太阳眼镜smu09w",//оригинальное название(думаю тебе не нужен)
			price: 125.0, //цена
			//кол-во товара и цена от кол-ва товара
			quantity_prices: [
				{
					min_quantity: 1,//кол-во товара
					original_price: 125.0 //цена 1 шт. за кол-во товара
				},
				{
					min_quantity: 10,
					original_price: 120.0
				},
				{
					min_quantity: 100,
					original_price: 105.0
				}
			],
			title: "Квадратные маленькие модные солнцезащитные очки на солнечной энергии, защита от ультрафиолета, 09W",//название товара
			url: "https://detail.1688.com/offer/798221206257.html",//ссылка на товар
			vendor: "视界汇眼镜"//продавец(думаю тебе не нужен)
		},
		{
			//габариты
			dimensions: {
				height: 11.5,
				length: 17.5,
				weight: 0.1,
				width: 9.5
			},
			id: "abb-798221206257",//id товара
			image: "https://cbu01.alicdn.com/img/ibank/O1CN01Rd71AO1nKZRxgw2dw_!!2214121275071-0-cib.jpg",//ссылка на картинку
			location: null,//город откуда товар(думаю тебе не нужен, может быть пустым)
			min_order_quantity: 1,//минимальное кол-во товара(может быть пустым)
			original_title: "高版本方形小红书同款墨镜女时尚防紫外线缪缪太阳眼镜smu09w",//оригинальное название(думаю тебе не нужен)
			price: 125.0, //цена
			//кол-во товара и цена от кол-ва товара
			quantity_prices: [
				{
					min_quantity: 1,//кол-во товара
					original_price: 125.0 //цена 1 шт. за кол-во товара
				},
				{
					min_quantity: 10,
					original_price: 120.0
				},
				{
					min_quantity: 100,
					original_price: 105.0
				}
			],
			title: "Квадратные маленькие модные солнцезащитные очки на солнечной энергии, защита от ультрафиолета, 09W",//название товара
			url: "https://detail.1688.com/offer/798221206257.html",//ссылка на товар
			vendor: "视界汇眼镜"//продавец(думаю тебе не нужен)
		},
		{
			//габариты
			dimensions: {
				height: 11.5,
				length: 17.5,
				weight: 0.1,
				width: 9.5
			},
			id: "abb-798221206257",//id товара
			image: "https://cbu01.alicdn.com/img/ibank/O1CN01Rd71AO1nKZRxgw2dw_!!2214121275071-0-cib.jpg",//ссылка на картинку
			location: null,//город откуда товар(думаю тебе не нужен, может быть пустым)
			min_order_quantity: 1,//минимальное кол-во товара(может быть пустым)
			original_title: "高版本方形小红书同款墨镜女时尚防紫外线缪缪太阳眼镜smu09w",//оригинальное название(думаю тебе не нужен)
			price: 125.0, //цена
			//кол-во товара и цена от кол-ва товара
			quantity_prices: [
				{
					min_quantity: 1,//кол-во товара
					original_price: 125.0 //цена 1 шт. за кол-во товара
				},
				{
					min_quantity: 10,
					original_price: 120.0
				},
				{
					min_quantity: 100,
					original_price: 105.0
				}
			],
			title: "Квадратные маленькие модные солнцезащитные очки на солнечной энергии, защита от ультрафиолета, 09W",//название товара
			url: "https://detail.1688.com/offer/798221206257.html",//ссылка на товар
			vendor: "视界汇眼镜"//продавец(думаю тебе не нужен)
		},
	])

	const findItem = async () => {
		let query = ""
		query += "language=en&"
		query += `framePosition=${0}&`
		query += `frameSize=${30}&`
		query += `ItemTitle=${title}&`
		query += `MinPrice=${minPrice}&`
		query += `MaxPrice=${maxPrice}&`
		query += `MinVolume=${volume}`
		setLoad(!load)
		axios.get(`/api/search?${query}`)
			.then(responce => setItems(responce.data))
			.then(() => setLoad(false))
			.catch(() => setLoad(false))
	}

	const toggleSelected = (index: number) => {
		// Обновляем глобальный индекс в массиве items (учитывая пагинацию)
		const globalIndex = (page - 1) * ITEMS_PER_PAGE + index
		setItems(prevItems => 
			prevItems.map((item, i) => 
				i === globalIndex ? { ...item, selected: !item.selected } : item
			)
		)
	}

	useEffect(()=>{
		localStorage.setItem("card",JSON.stringify(items.filter(item => item.selected)))
	},[items])

	// Отображаемые товары на текущей странице
	const displayedItems = items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
	const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE)

	const handlePrevPage = () => {
		if (page > 1) setPage(page - 1)
	}

	const handleNextPage = () => {
		if (page < totalPages) setPage(page + 1)
	}

	useEffect(() => {
			// Отключаем или включаем прокрутку страницы в зависимости от состояния модального окна
			if (showItem > -1) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
	
			// Очистка эффекта при размонтировании компонента
			return () => {
				document.body.style.overflow = 'auto';
			};

		}, [showItem]);

	return <>
		<div className='p-2 bg-gray-500/30 h-auto rounded-xl flex flex-col'>
			<div className='h-4/12 bg-gray-900/80 m-1 p-2 rounded-xl flex flex-col'>
				<input value={title} onChange={(e)=>setTitle(e.target.value)} className='border-2 m-1 p-1 text-center border-gray-800 bg-gray-100/20 text-white rounded-xl' type='text' placeholder='Наименование товара' />
				<div className='flex'>
					<input value={minPrice} onChange={(e)=>setMinPrice(Number(e.target.value))} className='border-2 m-1 p-1 w-full text-center border-gray-800 bg-gray-100/20 text-white rounded-xl' type='number' placeholder='Мин. цена'></input>
					<input value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))} className='border-2 m-1 p-1 w-full text-center border-gray-800 bg-gray-100/20 text-white rounded-xl' type='number' placeholder='Макс. цена'></input>
				</div>
				<input value={volume} onChange={(e)=>setVolume(Number(e.target.value))} className='border-2 m-1 p-1 text-center border-gray-800 bg-gray-100/20 text-white rounded-xl' type='number' placeholder='Кол-во товара'></input>
				<button onClick={findItem} className="w-full m-1 bg-gradient-to-r from-gray-500 to-indigo-600 text-white p-1 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex justify-center items-center space-x-2">Поиск</button>
			</div>
			{load && <span className='self-center'><BounceLoader size={35}/></span>}
			
				{!load && items.length > 0 && (
					<div className='h-7/12 bg-gray-900/80 m-1 p-2 rounded-xl relative'>
						<div className='grid grid-cols-2 place-items-center'>
							{displayedItems.map((item, index) => (
								// <MiniCardV1 key={index} item={item} select={()=>toggleSelected(index)} view={()=>setShowItem(item)}/>
								<MiniCardV2 key={index} item={item} select={()=>toggleSelected(index)} view={()=>setShowItem(index)}/>
							))}
						</div>
						{totalPages > 1 && (
							<div className='flex justify-center items-center mt-2 space-x-4 text-white'>
								<button 
									onClick={handlePrevPage} 
									disabled={page === 1} 
									className='px-3 py-2 bg-gray-600 rounded-full disabled:opacity-50 hover:bg-gray-500 transition-colors w-10 h-10 flex justify-center items-center'
								>
									<ChevronLeftIcon className="w-5 h-5" />
								</button>
								<span className='px-4 py-2 bg-gray-700 rounded-full'>{page} из {totalPages}</span>
								<button 
									onClick={handleNextPage} 
									disabled={page === totalPages} 
									className='px-3 py-2 bg-gray-600 rounded-full disabled:opacity-50 hover:bg-gray-500 transition-colors w-10 h-10 flex justify-center items-center'
								>
									<ChevronRightIcon className="w-5 h-5" />
								</button>
							</div>
						)}
					</div>
				)}
			<Link className="w-full h-1/12 m-1 bg-gradient-to-r from-gray-500 to-indigo-600 text-white p-1 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex justify-center items-center space-x-2" href={"#contact-form"}>Связаться с нами</Link>
		</div>
		{showItem >= 0 && <ItemFullView item={items[showItem]} close={() => setShowItem(-1)} select={()=>toggleSelected(showItem)}/>}
	</>
}

interface IItemFullView {
	item:any
	close:()=>void
	select:()=>void
}

const ItemFullView = ({item,close,select}:IItemFullView) => 
	createPortal(
	<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 md:p-8 z-50">
		<div className="bg-white rounded-lg shadow-xl md:max-w-7/12 w-full max-h-full overflow-y-auto relative">
			<button
				onClick={close}
				className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 z-50 p-2"
				aria-label="Закрыть"
			>
				<XMarkIcon className="h-8 w-8" />
			</button>
			<div className="p-6 md:p-8">
				{/* Заголовок */}
				<h2 id="modal-title" className="text-xl font-bold mb-4">{item.title}</h2>
              
				{/* Основной контент: изображение и детали */}
				<div className="flex flex-col md:flex-row gap-4">
					{/* Изображение */}
					<div className="md:w-1/2">
						<img 
							src={item.image} 
							alt={`Детальное изображение: ${item.title}`} 
							className="w-full h-auto rounded-lg" 
						/>
					</div>
									
					{/* Детали */}
					<div className="md:w-1/2 flex flex-col justify-between">
					{/* Описание */}
						<div>
							<h3 className="text-lg font-semibold mb-2">Описание</h3>
							<p className="text-sm text-gray-700">
								{item.description || 'Подробное описание товара отсутствует. Свяжитесь с продавцом для дополнительной информации.'}
							</p>
						</div>
											
						{/* Цены со всеми опциями */}
						<div>
							<h3 className="text-lg font-semibold mb-2">Ценообразование</h3>
							{item.minPrice && <p className="text-lg font-bold text-blue-400">От {item.minPrice} ₽</p>}
							{item.quantity_prices && (
								<ul className="text-sm text-gray-700 space-y-1">
									{item.quantity_prices.map((qp:any, index:number) => (
										<li key={index}>
											{qp.min_quantity} шт.+: {qp.original_price} ₽ за штуку
										</li>
									))}
								</ul>
							)}
						</div>
											
						{/* Характеристики */}
						<div>
							<h3 className="text-lg font-semibold mb-2">Характеристики</h3>
							<ul className="text-sm text-gray-700 space-y-1">
								<li><strong>ID:</strong> {item.id}</li>
								<li><strong>Размеры:</strong> {item.dimensions.height}×{item.dimensions.width}×{item.dimensions.length} см</li>
								<li><strong>Вес:</strong> {item.dimensions.weight} кг</li>
								{item.rating && <li><strong>Рейтинг:</strong> {item.rating}/5 ⭐</li>}
							</ul>
						</div>
											
						{/* Отзывы (если есть) */}
						{item.reviews && item.reviews.length > 0 && (<>
							 {/* <div>
							 	<h3 className="text-lg font-semibold mb-2">Отзывы</h3>
							 	<ul className="text-sm text-gray-300 space-y-2">
							 		{item.reviews.map((review, index) => (
							 			<li key={index} className="bg-gray-700 p-2 rounded">{review}</li>
							 		))}
							 	</ul>
							 </div> */}
						</>)}
											
						{/* Действия */}
						<div>
							<div className="flex gap-4 mt-6">
								<button 
									onClick={select} 
									className={`flex-1 p-3 rounded transition ${item.selected ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}
								>
									{item.selected ? 'Выбрано' : 'Выбрать'}
								</button>
								{/* <button className="flex-1 p-3 bg-blue-600 hover:bg-blue-700 rounded transition text-white">
									Купить сейчас
								</button> */}
							</div>
							<div className='flex text-blue-600 font-bold'>
								<LinkIcon className='w-5 mr-2'></LinkIcon>
								<Link target='_blank' href={item.url}>Ссылка на источник</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	,document.body)


interface IItemMiniView {
	item:any
	select:()=>void
	view:()=>void
}
	
const MiniCardV1 = ({item,select,view}:IItemMiniView) => 
<div 
	className={`bg-gray-700/50 p-3 rounded-lg hover:bg-gray-600/50 transition-all duration-200 relative ${item.selected ? 'ring-2 ring-green-400' : ''} w-full h-full`}
>
	<img src={item.image} alt={item.title} className="w-40 h-40 object-cover rounded mx-auto mb-2" />
	<p className="text-white text-sm truncate text-center">{item.title}</p>
	<p className="text-white text-center font-bold">{item.price}</p>
	<div className="flex flex-col items-center md:flex-row ">
		<button 
			onClick={select} 
			className={`w-full flex-1 p-1 m-1 text-xs rounded ${item.selected ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'} hover:bg-opacity-80 transition-colors`}
		>
			{item.selected ? 'Выбрано' : 'Выбрать'}
		</button>
		<button 
			onClick={view} 
			className="w-full flex-1 p-1 m-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
		>
			Посмотреть
		</button>
	</div>
	{item.selected && (
		<div className="absolute top-1 right-1">
			<CheckBadgeIcon className="w-6 h-6 text-green-400" />
		</div>
	)}
</div>

const MiniCardV2 = ({item,select,view}:IItemMiniView) => 
<div className="m-2">
	<div className={`md:w-48 bg-gray-700 rounded-lg overflow-hidden m-2 ${item.selected ? 'ring-2 ring-green-400' : ''}`}>
		{/* Изображение */}
		<div className="relative">
			<img 
				src={item.image} 
				alt={item.title} 
				className="w-full h-full object-cover rounded-xl p-2" 
			/>
		</div>
		
		{/* Информация о товаре */}
		<div className="p-3">
			<h4 className="text-sm font-medium text-white line-clamp-2 mb-2">
				{item.title}
			</h4>
			
			{/* Цены */}
			<div className="mb-2">
				<span className="text-lg font-bold text-blue-600">
					от {item.minPrice} USD
				</span>
				{item.quantity_prices && item.quantity_prices.length > 1 && (
					<div className="text-xs text-gray-500">
						<ul className="list-disc pl-4">
							{item.quantity_prices.map((qp:any, index:number) => (
								<li key={index} className="py-1">
									{qp.min_quantity} шт.: {qp.original_price} USD
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			
			{/* Габариты */}
			<div className="text-xs text-gray-500 mb-2">
				Габариты: {item.dimensions.height}×{item.dimensions.width}×{item.dimensions.length} см, вес: {item.dimensions.weight} кг
			</div>
			
			{/* ID и мин. заказ (опционально, скрыть если не нужно) */}
			{/* <div className="text-xs text-gray-400">
				ID: {item.id} | Мин. заказ: {item.min_order_quantity} шт.
			</div> */}
			<div className='flex flex-col md:flex-row justify-around'>
				<button 
					onClick={select} 
					className={`w-full flex-1 p-1 m-1 text-xs rounded ${item.selected ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'} hover:bg-opacity-80 transition-colors`}
				>
					{item.selected ? 'Выбрано' : 'Выбрать'}
				</button>
				<button 
					onClick={view} 
					className="w-full flex-1 p-1 m-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
				>
					Посмотреть
				</button>
			</div>
		</div>
	</div>
</div>
	