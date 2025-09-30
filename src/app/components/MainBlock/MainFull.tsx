import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const MAIN_FULL_IMAGES:string[] = [
	'/business-import/assets/main/main-1.png',
	'/business-import/assets/main/main-2.png',
	'/business-import/assets/main/main-3.png',
	'/business-import/assets/main/main-4.png',
]

export const MainFull = () => {
	const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % MAIN_FULL_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [MAIN_FULL_IMAGES.length]);

	return <section id="main" className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen flex items-center">
	<div className="absolute inset-0 z-0">
		{MAIN_FULL_IMAGES.map((image, index) => (
			<div
				key={image}
				className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
					index === currentImage ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<Image
					src={image}
					alt={`Фоновое изображение ${index + 1}`}
					layout="fill"
					objectFit="cover"
					quality={80}
					priority={index === 0}
				/>
			</div>
		))}
		{/* Затемняющий оверлей для читаемости текста */}
		<div className="absolute inset-0 bg-black opacity-60"></div>
	</div>

	{/* Контент поверх карусели */}
	<div className="z-10 text-center md:text-end text-white self-end my-10 mx-2 md:max-w-[800px] md:mx-20">
		<h1 className="text-4xl md:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
			Международная торговля<br /> <span className='font-bold text-blue-500'>Инновационно</span> и <span className='font-bold text-blue-500'>Профессионально.</span>
		</h1>
		<p className="mt-4 text-xl md:text-2xl text-gray-300 drop-shadow-md">
			<span className='font-bold'>Бизнес-Import</span> - надежный партнёр с многолетним опытом работы в сфере международной торговли. Наша компания - верный выбор для поиска и импорта товаров из любой точки мира.
		</p>
	</div>

		<div className="z-10 text-center md:text-start text-white self-start my-10 mx-2  md:mx-20 w-full md:max-w-[600px]">
		<h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-md">
			ИИ-консультант для поиска товара
		</h3>
		<ul className='text-xl'>
			<li><span className='font-extrabold'> - </span> Доступен в любое время</li>
			<li><span className='font-extrabold'> - </span> Моментальный расчёт предварительной цены</li>
		</ul>
	</div>
</section>
}