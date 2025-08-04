"use client"
// pages/index.js
// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PhoneIcon, EnvelopeIcon, PaperAirplaneIcon, UserIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Импортируем иконки для меню
import Link from 'next/link';
import { ISocialLink, SocialLinks } from './constants';

export default function Home() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>Бизнес импорт</title>
        <meta name="description" content="Надёжные услуги импорта для вашего бизнеса" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-indigo-900">
            <Image
							src="/business-import/assets/logo/LogoMiddle.png"
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
            <a href="#reviews" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">Отзывы</a>
            <a href="#contact-form" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">Связь</a>
            <a href="#contacts" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">Контакты</a>
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
          <a href="#reviews" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Отзывы</a>
          <a href="#contact-form" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Связь</a>
          <a href="#contacts" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors">Контакты</a>
        </div>
      </header>

      <main className="pt-24">
        {/* Главный блок */}
				<HeroSection />

        {/* Блок "О нас" */}
        <section id="about" className="relative py-20 bg-white">
          <div className="absolute inset-0 md:m-20">
            <Image
              src="/business-import/assets/about/about-1.png"
              alt="Офис компании"
              layout="fill"
              objectFit="cover"
              // className="opacity-20" // Делаем изображение полупрозрачным
            />
            {/* Градиентный оверлей для лучшей читаемости текста */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[0%] md:to-[50%] to-gray-900 "></div>
          </div>
          <div className="relative container mx-auto p-8 text-white z-10">
            <h2 className="text-4xl font-bold text-center mb-12">О нас</h2>
            <div className="flex flex-col md:items-end">
              <div className="text-lg space-y-6 md:max-w-1/2 py-5 px-10 text-center md:text-justify">
                <p>
                  <span className='md:pl-10'>Мы</span> — ваш надёжный проводник в мире международного бизнеса. Уже более <strong>6 лет</strong> мы успешно помогаем компаниям импортировать товары, обеспечивая прозрачность и безопасность на каждом этапе.
                </p>
                <p>
                   <span className='md:pl-10'>Ежегодно</span> мы обрабатываем <strong>более 1200 заявок</strong>, что свидетельствует о высоком доверии наших клиентов и профессионализме нашей команды. Мы ценим долгосрочные отношения и стремимся быть не просто поставщиком услуг, а стратегическим партнёром для вашего роста.
                </p>
              </div>
              <div className="space-y-4 text-lg bg-white/10 p-8 rounded-lg shadow-md backdrop-blur-md md:max-w-1/2 px-5">
                <p className="text-xl font-bold text-blue-300 mb-4">Наши преимущества:</p>
                <ul className="list-disc list-inside space-y-4">
                  <li className="flex items-start"><span className="font-bold text-blue-500 mr-2">✓</span> <span className="flex-1"><strong>Экономия времени:</strong> Мы берём на себя всю логистику и документацию.</span></li>
                  <li className="flex items-start"><span className="font-bold text-blue-500 mr-2">✓</span> <span className="flex-1"><strong>Выгодные цены:</strong> Благодаря проверенным партнёрам по всему миру.</span></li>
                  <li className="flex items-start"><span className="font-bold text-blue-500 mr-2">✓</span> <span className="flex-1"><strong>Прозрачность:</strong> Вы всегда знаете, на каком этапе находится ваш груз.</span></li>
                  <li className="flex items-start"><span className="font-bold text-blue-500 mr-2">✓</span> <span className="flex-1"><strong>Надёжность:</strong> Страхование грузов и гарантии сохранности.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Блок "Отзывы" */}
        <ReviewsSection />

        {/* Формочка для связи */}
        <section id="contact-form" className="container mx-auto p-8 py-20 bg-gray-100">
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Оставить заявку</h2>
          <form className="max-w-lg mx-auto bg-white p-10 rounded-xl shadow-2xl space-y-6">
            <div className="flex items-center space-x-4 border-b border-gray-200 py-2">
              <UserIcon className="h-6 w-6 text-gray-400" />
              <input type="text" id="name" placeholder="Ваше имя" className="flex-1 block w-full outline-none text-gray-700" required />
            </div>
            <div className="flex items-center space-x-4 border-b border-gray-200 py-2">
              <EnvelopeIcon className="h-6 w-6 text-gray-400" />
              <input type="email" id="email" placeholder="Электронная почта" className="flex-1 block w-full outline-none text-gray-700" required />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Сообщение</label>
              <textarea id="message" rows="4" placeholder="Ваше сообщение..." className="mt-1 block w-full border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500 transition-colors" required></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex justify-center items-center space-x-2">
              <span>Отправить заявку</span>
              <PaperAirplaneIcon className="h-5 w-5 rotate-90" />
            </button>
          </form>
        </section>

        {/* Контакты */}
        <section id="contacts" className="container mx-auto p-8 py-20 bg-white text-center">
          <h2 className="text-4xl font-bold text-indigo-900 mb-12">Наши контакты</h2>
          {/* <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <p className="text-xl md:text-2xl text-gray-700 font-bold flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6 text-blue-500" />
              <span>Телефон: <a href="tel:+71234567890" className="text-blue-500 hover:underline">+7 (123) 456-78-90</a></span>
            </p>
            <p className="text-xl md:text-2xl text-gray-700 font-bold flex items-center space-x-2">
              <EnvelopeIcon className="h-6 w-6 text-blue-500" />
              <span>Почта: <a href="mailto:info@business-import.ru" className="text-blue-500 hover:underline">info@business-import.ru</a></span>
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-blue-500 hover:text-indigo-600 transition-colors" aria-label="Telegram">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.15 15.3l-1.37-4.14-4.14-1.37-2.61-2.61a.95.95 0 0 1-.2-.55.95.95 0 0 1 .2-.55l1.62-1.62a.95.95 0 0 1 .55-.2.95.95 0 0 1 .55.2l5.7 5.7c.39.39.39 1.02 0 1.41l-2.03 2.03c-.39.39-1.02.39-1.41 0z"/></svg>
            </a>
            <a href="#" className="text-blue-500 hover:text-indigo-600 transition-colors" aria-label="ВКонтакте">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.25 14.5c.2 0 .4-.04.6-.14.2-.1.4-.2.55-.35.15-.15.3-.3.4-.5.1-.2.15-.4.15-.65V12c0-.25-.05-.45-.15-.65-.1-.2-.25-.35-.4-.5-.15-.15-.35-.25-.55-.35-.2-.1-.4-.15-.6-.15H12v-2.5h2.5c.55 0 1 .45 1 1v.5h.5c.55 0 1 .45 1 1v.5h.5c.55 0 1 .45 1 1v.5h.5c.55 0 1 .45 1 1v.5h.5c.55 0 1 .45 1 1v.5h.5c.55 0 1 .45 1 1v.5c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-.5h-.5c-.55 0-1-.45-1-1v-.5h-.5c-.55 0-1-.45-1-1v-.5h-.5c-.55 0-1-.45-1-1v-.5h-.5c-.55 0-1-.45-1-1v-.5c0-.55.45-1 1-1h.5c.55 0 1 .45 1 1v.5h.5c.55 0 1 .45 1 1v.5h.5c.55 0 1 .45 1 1v.5h.5c.55 0 1 .45 1 1v.5c0 .55-.45 1-1 1h-1.5c-1.1 0-2.1-.4-2.8-1.1-.7-.7-1.1-1.7-1.1-2.8v-.5c0-1.1.4-2.1 1.1-2.8.7-.7 1.7-1.1 2.8-1.1h2.5c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1V12h-2.5v2.5h-1.5v-2.5h-1.5v-2.5c0-.55-.45-1-1-1h-2.5c-.55 0-1-.45-1-1v-2.5c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v2.5c0 .55.45 1 1 1h2.5c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-2.5c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1z"/></svg>
            </a>
          </div> */}
					

					<div className='grid gap-5 grid-cols-2 place-content-center'>
						{SocialLinks.map((item:ISocialLink,index:number)=><Link target="_blank" key={index} href={item.link} className='flex flex-col md:flex-row items-center justify-center gap-5'>
							<Image 
								src={item.icon}
								alt={item.name}
								width={50}
								height={50}
							/>
							<span className='text-blue-600 md:text-3xl fond-bold'>{item.short}</span>
						</Link>)}
					</div>
        </section>

      </main>

      <footer className="bg-indigo-900 text-white text-center p-6">
        &copy; 2025 Бизнес-импорт. Все права защищены.
      </footer>
    </div>
  );
}

// Компонент для карусели отзывов
const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    '/business-import/assets/main/main-1.png',
    '/business-import/assets/main/main-2.png',
    '/business-import/assets/main/main-3.png',
    '/business-import/assets/main/main-4.png',
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="bg-gray-100 py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Отзывы клиентов</h2>
        <div className="relative max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden">
          <Image
            src={reviews[currentReview]}
            alt={`Отзыв ${currentReview + 1}`}
            layout="responsive"
            width={1200}
            height={800}
            objectFit="cover"
            className="rounded-xl"
          />
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20"
            aria-label="Предыдущий отзыв"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>
  );
};

// ... (остальной код остается без изменений)

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [
    // '/business-import/assets/logo/Logo.png',
    '/business-import/assets/main/main-1.png',
    '/business-import/assets/main/main-2.png',
    '/business-import/assets/main/main-3.png',
    '/business-import/assets/main/main-4.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section id="main" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Карусель на заднем фоне */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
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
					Импорт без границ: <br /> ваш бизнес — наши возможности.
				</h1>
				<p className="mt-4 text-xl md:text-2xl text-gray-300 drop-shadow-md">
					Надёжный партнёр для вашего бизнеса в сфере импорта. Эффективно, выгодно, без лишних хлопот.
				</p>
			</div>

			 <div className="z-10 text-center md:text-start text-white self-start my-10 mx-2  md:mx-20 md:max-w-[600px]">
				<h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-md">
					Импортируем успех
				</h3>
				<p className="text-lg text-gray-300 drop-shadow-md">
					Более 6 лет на рынке, более 1200 успешно выполненных заявок в год. Мы не просто импортируем товары, мы строим надёжные и долгосрочные партнёрские отношения.
				</p>
			</div>
    </section>
  );
};

// <section id="main" className="relative text-center min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
// 	<div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10"></div>
// 	<div className="container mx-auto px-8 relative z-10 flex justify-end items-start h-full">
// 		
// 		{/* Дополнительная информация слева снизу */}
// 		<div className="absolute bottom-16 left-8 text-left max-w-sm">
// 			<h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
// 				Импортируем успех
// 			</h3>
// 			<p className="text-lg text-gray-300">
// 				Более 6 лет на рынке, более 1200 успешно выполненных заявок в год. Мы не просто импортируем товары, мы строим надёжные и долгосрочные партнёрские отношения.
// 			</p>
// 		</div>
// 		
// 		{/* Основной заголовок и слоган справа сверху */}
// 		<div className="absolute top-1/2 md:top-24 right-8 transform -translate-y-1/2 md:-translate-y-0 text-right max-w-2xl">
// 			<h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
// 				Импорт без границ: <br /> ваш бизнес — наши возможности.
// 			</h1>
// 			<p className="mt-4 text-xl md:text-2xl text-gray-300 drop-shadow-md">
// 				Надёжный партнёр для вашего бизнеса в сфере импорта. Эффективно, выгодно, без лишних хлопот.
// 			</p>
// 		</div>
// 	</div>
// </section>