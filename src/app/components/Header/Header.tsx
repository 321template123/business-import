import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

export const Header = () => {	

	const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

	return <>
		<Head>
			<title>Бизнес Import</title>
			<meta name="description" content="Надёжные услуги импорта для вашего бизнеса" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
			<nav className="container mx-auto px-4 py-2 flex justify-between items-center">
				<div className="text-3xl font-extrabold text-indigo-900">
					<Image
						src="/assets/logo/LogoMiddle.png"
						alt="Офис компании"
						width={200}
						height={100}
						className="rounded-xl"
					/>
				</div>
				
				{/* Меню для больших экранов */}
				<div className="space-x-6 hidden md:flex">
					<a href="#main" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">Главная</a>
					<a href="#about" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">О нас</a>
					<a href="#articles" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">Полезные статьи</a>
					<a href="#services" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">Услуги</a>
					<a href="#contact-form" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">Связь</a>
				</div>

				{/* Кнопка-гамбургер для мобильных устройств */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 transition-colors" aria-label="Открыть меню">
						{isMenuOpen ? (
							<XMarkIcon className="h-8 w-8" />
						) : (
							<Bars3Icon className="h-8 w-8" />
						)}
					</button>
				</div>
			</nav>

			{/* Мобильное меню */}
			<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-inner pb-4`}>
				<a href="#main" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Главная</a>
				<a href="#about" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">О нас</a>
				<a href="#articles" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Полезные статьи</a>
				<a href="#reviews" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Отзывы</a>
				<a href="#contact-form" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Связь</a>
				<a href="#contacts" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors">Контакты</a>
			</div>
		</header>
	</>
}
