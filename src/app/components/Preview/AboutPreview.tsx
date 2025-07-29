import React from 'react'
import Glass from '../UI/Container/Glass'
import Image from 'next/image'

export default function AboutPreview() {
	return <>	
		<div id="about" className="w-full min-h-screen relative">				
			<div className="absolute top-0 left-0 bottom-0 right-0 bg-cover bg-[url(/business-import/assets/main-3.png)]"></div>
			<div className="absolute left-0 bottom-0 right-0 bg-blue-700/90 p-10"></div>
			<div className="w-full h-screen md:px-35 py-35 flex items-start z-[20]">
				<div className="flex flex-col w-full text-white">
					<Glass className="md:self-center flex flex-col items-center w-full text-shadow-lg text-shadow-black/60 mb-10">
						<div className="w-full px-10 flex flex-col items-center">
							<span className="text-[20px] text-center font-extrabold relative">
								Мы - надежный партнер в сфере международной торговли.
							</span>
							<span className="text-[30px] text-start font-bold relative px-10 py-1 underline underline-offset-8">
								Мы - Бизнес <span className='font-thin'>Import</span><span className='text-red-500'>.</span>
							</span>
						</div>
						<div className='max-w-[700px] text-justify'>
							<span className='pl-5'>Мы</span> не просто торговая компания. Мы ставим перед собой цель создания масштабной платформы для содействия развитию внешнеэкономической деятельности и решения любых задач в сфере взаимодействия между предпринимателями по всему миру.
						</div>
						<div className='self-center p-5'>Больше о нас</div>
					</Glass>
				</div>
			</div>
		</div>
		<div className="w-full min-h-screen relative">				
			<div className="absolute top-0 left-0 bottom-0 right-0 bg-cover bg-[url(/business-import/assets/main.png)]"></div>
			<div className="absolute left-0 bottom-0 right-0 bg-blue-700/90 p-10"></div>
			<div className="w-full h-screen md:px-35 py-35 flex items-center z-[20]">
				<div className="flex flex-col w-full text-white">
					<Glass className="md:self-end flex flex-col items-center w-full md:min-w-[500px] md:max-w-[500px] text-shadow-lg text-shadow-black/60 mb-10">
						<div className="w-full px-10 flex flex-col items-center">
							<span className="text-[40px] text-center self-start font-extrabold relative">
								Ключ к успеху
							</span>
							<span className="text-[20px] text-start font-bold relative p-10">
								Проверенный временем игрок на рынке импорта
							</span>
						</div>
					</Glass>
					<Glass className="md:self-end flex flex-col items-start w-full md:min-w-[500px] md:max-w-[500px] text-shadow-lg text-shadow-black/60 p-10">
						<span>
							Расширяйте свой бизнес и товарную номенклатуру благодаря нашей стратегической поддержке. Наши сотрудники имеют многолетний опыт работы в международной торговле, логистике и таможенном оформлении. И каждый из них точно знает - любую задачу можно решить.
						</span>
						<div className='flex flex-col md:flex-row gap-5 py-5 px-5 md:items-center justify-between md:w-full'>
							<div className='flex flex-row py-2 px-5 bg-blue-700/80 rounded-lg'>
								<Image
									src="/assets/icon/calendar.png"
									alt="calendar"
									width={50}
									height={50}
									className='mr-5'
								/>
								<div className='flex flex-col items-start justify-center'>
									<span className='text-[30px]'>6</span>
									<span className='text-[10px]'>Лет опыта</span>
								</div>
							</div>
							<div className='flex flex-row py-2 px-5 bg-blue-700/80 rounded-lg items-center'>
								<Image
									src="/assets/icon/order.png"
									alt="order"
									width={50}
									height={50}
									className='mr-5'
								/>
								<div className='flex flex-col items-start justify-center'>
									<span className='text-[30px]'>1200+</span>
									<span className='text-[10px]'>Заявок ежегодно</span>
								</div>
							</div>
						</div>
						<div className='self-center p-5'>Больше о нас</div>
					</Glass>
				</div>
			</div>
		</div>
	</>
}
