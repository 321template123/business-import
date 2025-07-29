import React from 'react'
import Glass from '../UI/Container/Glass'

export default function MainPreview() {
	return <div id="main" className="w-full min-h-screen relative">				
		<div className="absolute top-0 left-0 bottom-0 right-0 bg-cover bg-[url(/assets/main-2.png)]"></div>
		<div className="absolute left-0 bottom-0 right-0 bg-blue-700/90 p-10"></div>
		<div className="w-full h-screen md:px-35 py-35 flex items-center z-[20]">
			<div className="flex flex-col w-full text-white">
				<Glass className="md:self-end flex flex-col items-center w-full md:max-w-[700px] text-shadow-lg text-shadow-black/60 mb-10">
					<div className="w-full px-10 md:pr-40 flex flex-col items-center">
						<span className="text-[40px] text-center md:text-start md:self-start font-extrabold relative">
							Международная
							<br/>
							Торговля
						</span>
						<span className="text-[30px] font-extrabold self-center md:self-center">Инновационно</span>
						<span className="text-[30px] font-extrabold self-center md:self-end">Профессионально</span>
					</div>
					<span className="p-5">
						<span className="text-xl font-bold text-blue-700">Бизнес Import</span> - надежный партнёр с многолетним опытом работы в сфере международной торговли. Наша компания - верный выбор для поиска и импорта товаров из любой точки мира.
					</span>
				</Glass>
				<Glass className="md:self-start flex flex-col items-start w-full md:max-w-[500px] text-shadow-lg text-shadow-black/60 p-10">
					<span className="font-bold">ИИ-консультат для поиска товара</span>
					<span className="pl-10">- Доступен в любое время</span>
					<span className="pl-10">- Моментальный расчёт предварительной цены</span>
				</Glass>
			</div>
		</div>
	</div>
}
