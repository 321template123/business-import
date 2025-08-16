"use client"
// pages/index.js
// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PhoneIcon, EnvelopeIcon, PaperAirplaneIcon, UserIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
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
            <a href="#articles" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors">Полезные статьи</a>
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
          <a href="#articles" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Полезные статьи</a>
          <a href="#reviews" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Отзывы</a>
          <a href="#contact-form" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors border-b">Связь</a>
          <a href="#contacts" onClick={toggleMenu} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-semibold transition-colors">Контакты</a>
        </div>
      </header>

      <main className="pt-24">
        {/* Главный блок */}
				<HeroSection />

        {/* Блок "О нас" */}
        <section id="about" className="relative py-20 bg-white min-h-screen flex items-center">
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

				{/* Блок "Статьи" */}
				<ArticleCarousel />

        {/* Блок "Отзывы" */}
        <ReviewCarousel />

        {/* Формочка для связи */}
        <section id="contact-form" className="container mx-auto p-8 py-20 bg-gray-100 min-h-screen flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Оставить заявку</h2>
          <form className="max-w-lg mx-auto bg-white p-10 rounded-xl shadow-2xl space-y-6 md:min-w-[600px]">
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
              <textarea id="message" rows={4} placeholder="Ваше сообщение..." className="mt-1 block w-full border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500 transition-colors" required></textarea>
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
							<span className='text-blue-600 md:text-3xl font-bold'>{item.short}</span>
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
    <section id="reviews" className="bg-gray-100 py-20 min-h-screen flex items-center">
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

					<button
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20"
            aria-label="Следующий отзыв"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
    <section id="main" className="relativeflex flex-col items-center justify-center overflow-hidden min-h-screen flex items-center">
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
  );
};

interface IArticle{
	id: number
	title: string
	preview: string
	content: string
	image: string
}

const articles:IArticle[] = [
	{
		id: 1,
		title: "Как импортировать товары из Китая: пошаговая инструкция",
		preview: "Импорт товаров из Китая — это отличная возможность для развития бизнеса. В этой статье мы расскажем о ключевых этапах...",
		content: `Импорт товаров из Китая — это отличная возможность для развития бизнеса. В этой статье мы расскажем о ключевых этапах, от поиска поставщика до таможенного оформления. Мы разберёмся в тонкостях логистики, документации и сертификации, чтобы вы смогли избежать ошибок и начать импортировать с максимальной выгодой. Наши специалисты всегда готовы помочь вам на каждом шагу, обеспечивая безопасность и прозрачность сделки.

		## Этап 1: Поиск надёжного поставщика

		Выбор правильного поставщика — это основа успешного импорта. Рекомендуется использовать такие платформы, как Alibaba, Made-in-China или Global Sources. Обращайте внимание на рейтинг поставщика, отзывы других покупателей и наличие сертификатов качества. Не стесняйтесь запрашивать образцы продукции перед оформлением крупного заказа.

		## Этап 2: Заключение контракта и оплата

		После выбора поставщика необходимо заключить контракт, в котором будут прописаны все условия: цена, количество, сроки доставки, условия оплаты и ответственность сторон. Всегда используйте безопасные способы оплаты, такие как аккредитивы или Trade Assurance на Alibaba. Это защитит вас от мошенничества.

		## Этап 3: Таможенное оформление

		Таможенное оформление — один из самых сложных этапов. Вам потребуется подготовить полный пакет документов: коммерческий инвойс, упаковочный лист, коносамент (или накладную) и сертификаты. Лучше всего доверить этот процесс профессиональному таможенному брокеру. Наша компания предоставляет полный спектр услуг по таможенному оформлению, гарантируя быстрое и беспроблемное прохождение всех процедур.

		## Этап 4: Логистика и доставка

		Выбор способа доставки зависит от типа товара, его объёма и срочности. Мы предлагаем различные варианты: морские, железнодорожные и авиаперевозки. Морские перевозки подходят для больших объёмов, железнодорожные — для оптимального соотношения цены и скорости, а авиаперевозки — для срочных и небольших грузов.

		## Этап 5: Получение товара

		После прохождения всех этапов ваш товар будет доставлен на склад. Вам останется только принять груз и проверить его на соответствие заказанному. Мы предоставляем услуги по контролю качества на всех этапах, чтобы вы были уверены в конечном результате.
		`,
		image: "/business-import/assets/article/article-1.png",
	},
	{
		id: 2,
		title: "Топ-5 ошибок при импорте, и как их избежать",
		preview: "Многие компании сталкиваются с трудностями при импорте. Мы собрали самые распространённые ошибки...",
		content: `Многие компании сталкиваются с трудностями при импорте. Мы собрали самые распространённые ошибки, которые могут привести к задержкам и дополнительным расходам. В этой статье мы подробно рассмотрим каждую из них, от неправильного оформления документов до выбора ненадёжного партнёра. Следуя нашим рекомендациям, вы сможете минимизировать риски и сделать процесс импорта максимально эффективным.

		1.  **Неправильная классификация товара.** Ошибки в коде ТН ВЭД могут привести к неправильному расчёту пошлин и штрафам. Всегда проверяйте классификацию с помощью таможенного брокера.
		2.  **Недостаточная проверка поставщика.** Работайте только с проверенными поставщиками. Запрашивайте образцы, проверяйте отзывы и проводите аудит производства, если это возможно.
		3.  **Неверное оформление документов.** Малейшая неточность в инвойсе или упаковочном листе может стать причиной задержки груза на таможне.
		4.  **Экономия на логистике.** Выбор самого дешёвого перевозчика может обернуться долгим ожиданием, повреждением груза или его потерей.
		5.  **Отсутствие страховки.** Всегда страхуйте груз, чтобы защититься от непредвиденных ситуаций.
		`,
		image: "/business-import/assets/article/article-2.png",
	},
	{
		id: 3,
		title: "Логистика импорта: оптимизация расходов и сроков",
		preview: "Грамотная логистика — ключ к успешному импорту. Узнайте, как выбрать оптимальный маршрут...",
		content: `Грамотная логистика — ключ к успешному импорту. Узнайте, как выбрать оптимальный маршрут, вид транспорта и как правильно рассчитать сроки доставки. Мы расскажем о преимуществах морских, железнодорожных и авиаперевозок, а также о том, как консолидация грузов помогает экономить. Наши эксперты готовы разработать для вас индивидуальное решение, которое позволит оптимизировать расходы и сократить время доставки.`,
		image: "/business-import/assets/article/article-3.png",
	},
	{
		id: 4,
		title: "Таможенные пошлины: как правильно рассчитать и сэкономить",
		preview: "Рассчёт таможенных пошлин — сложная задача. В статье мы объясним, как это работает...",
		content: "Рассчёт таможенных пошлин — сложная задача. В статье мы объясним, как это работает, и расскажем о способах сэкономить. Мы разберёмся в тонкостях таможенного кодекса и поделимся секретами, которые помогут вам избежать лишних трат.",
		image: "/business-import/assets/article/article-4.png",
	},
	{
		id: 5,
		title: "Страхование грузов: почему это важно",
		preview: "Никто не застрахован от непредвиденных ситуаций. Узнайте, как страхование грузов защитит ваш бизнес...",
		content: "Никто не застрахован от непредвиденных ситуаций. Узнайте, как страхование грузов защитит ваш бизнес от финансовых потерь. Мы расскажем о видах страхования, их преимуществах и о том, как правильно оформить полис.",
		image: "/business-import/assets/article/article-5.png",
	},
	{
		id: 6,
		title: "Доставка от двери до двери: преимущества и возможности",
		preview: "Мы предлагаем комплексный подход к доставке. От склада поставщика до вашего склада...",
		content: "Мы предлагаем комплексный подход к доставке. От склада поставщика до вашего склада. Узнайте о преимуществах услуги «от двери до двери» и как она поможет вам сэкономить время и силы. Мы возьмём на себя всю логистику и документацию.",
		image: "/business-import/assets/article/article-6.png",
	}
];

const ArticleCarousel = () => {
  const [fullscreenArticle, setFullscreenArticle] = useState<IArticle | undefined>();  
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const visibleArticles = articles.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < articles.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

	useEffect(() => {
    // Отключаем или включаем прокрутку страницы в зависимости от состояния модального окна
    if (fullscreenArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Очистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [fullscreenArticle]);

  return (
    <>
      <section id="articles" className="py-20 bg-gray-100 min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Полезные статьи</h2>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {visibleArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setFullscreenArticle(article)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600">{article.preview}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Кнопка "Назад" */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20"
                aria-label="Предыдущие статьи"
              >
                <ArrowLeftIcon className="h-6 w-6 text-indigo-900" />
              </button>
            )}

            {/* Кнопка "Вперёд" */}
            {currentIndex + 3 < articles.length && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20"
                aria-label="Следующие статьи"
              >
                <ArrowRightIcon className="h-6 w-6 text-indigo-900" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Полноэкранное отображение статьи */}
      {fullscreenArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 md:p-8 z-50">
          <div className="bg-white rounded-lg shadow-xl md:max-w-7/12 w-full max-h-full overflow-y-auto relative">
            <button
              onClick={() => setFullscreenArticle(undefined)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 z-50 p-2"
              aria-label="Закрыть"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={fullscreenArticle.image}
                alt={fullscreenArticle.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">{fullscreenArticle.title}</h1>
              <div className="prose max-w-none text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: fullscreenArticle.content.replace(/\n/g, '<br />') }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface IReview{
	id: number
	icon: string
	name: string
	post: string
	content: string
}

const reviews:IReview[] = [
	{
		id:1,
		icon:"/business-import/assets/article/article-1.png",
		name: "Алексей Чайкин",
		post:"Начальник отдела снабжения",
		content:"Работаем с этой компанией уже больше двух лет. Заказывали комплектующие для нашего производства. Особенно ценим надежность и четкое соблюдение сроков. Ни разу не подвели, даже когда требовалась срочная поставка. Менеджеры всегда на связи и готовы помочь с любыми вопросами. Рекомендую как стабильного и ответственного партнера."
	},
	{
		id:2,
		icon:"/business-import/assets/article/article-1.png",
		name: "Елена Смирнова",
		post:"Индивидуальный предприниматель",
		content:"Для нашего интернет-магазина заказывали через них партию трендовых товаров. Боялись сложностей с поиском надежного поставщика в Китае и таможней. Ребята взяли все на себя: нашли фабрику, проверили качество образцов, организовали доставку и полное таможенное оформление. Все прошло гладко и даже быстрее, чем ожидали. Спасибо за профессионализм!"
	},
	{
		id:3,
		icon:"/business-import/assets/article/article-1.png",
		name: "Дмитрий Тихомиров",
		post:"Технический директор",
		content:"Нам было важно найти партнера, который не просто доставит груз, но и поможет с контролем качества на производстве в Китае. Эта компания предоставила такую услугу. Их инспектор провел проверку на фабрике, прислал подробный отчет с фотографиями. В итоге мы получили именно тот товар, который заказывали, без брака. Очень довольны таким комплексным подходом."
	},
	{
		id:4,
		icon:"/business-import/assets/article/article-1.png",
		name: "Надежда Кузнецова",
		post: "Руководитель отдела закупок",
		content: "Обратились в компанию для импорта оборудования. Задача была не самая простая, требовалась тщательная проработка логистики и документации. Команда справилась на отлично! Особенно хочу отметить оперативность в решении возникающих вопросов и прозрачность на всех этапах сделки. Цены на услуги также оказались конкурентными."
	},
	{
		id:5,
		icon:"/business-import/assets/article/article-1.png",
		name: "Марат Тухбатуллин",
		post: "Генеральный директор",
		content: "Как владелец небольшой сети магазинов сувениров, я постоянно ищу интересные новинки. Эта компания помогает мне находить уникальные товары в Китае и организовывать сборные грузы от разных поставщиков, что очень удобно и выгодно при небольших партиях. Всегда четкая коммуникация и своевременная доставка."
	},
	{
		id:6,
		icon:"/business-import/assets/article/article-1.png",
		name: "Валерия Новикова",
		post: "Менеджер по развитию бизнеса",
		content: `Начинали работать с Китаем впервые и искали компанию, которая проведет "за руку" через весь процесс. Выбрали этих ребят и не пожалели. Нам подробно объяснили все этапы, помогли с переговорами, документами, растаможкой. Чувствовалась реальная поддержка и заинтересованность в успехе нашего проекта. Огромная благодарность всей команде!`
	}
];

const ReviewCarousel = () => {
  const [fullscreenReview, setFullscreenReview] = useState<IReview | undefined>();  
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const visibleArticles = reviews.slice(currentIndex, currentIndex + 1);

  const handleNext = () => {
    if (currentIndex + 1 < reviews.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

	useEffect(() => {
    // Отключаем или включаем прокрутку страницы в зависимости от состояния модального окна
    if (fullscreenReview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Очистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [fullscreenReview]);

  return (
    <>
      <section id="reviews" className="py-20 bg-gray-100 min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Отзывы</h2>
          <div className="relative">
            <div className="grid md:grid-cols-1 gap-8 place-items-center">
              {visibleArticles.map((article) => (
                <div
                  key={article.id}
                  // onClick={() => setFullscreenReview(article)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden md:max-w-[600px]"
                >
                  <div className="relative flex flex-row items-center justify-start px-6 py-5">
                    <Image
                      src={article.icon}
                      alt={article.name}
                      // layout="fill"
                      // objectFit="cover"
											width={75}
											height={75}
											className='rounded-full'
                    />
										<div className="px-6">
											<h3 className="text-xl font-bold text-indigo-900 mb-2">{article.name}</h3>
											<h3 className="text font-bold text-indigo-900 mb-2">{article.post}</h3>
										</div>
                  </div>
									<div className="p-6">
                    <p className="text-gray-600">{article.content}</p>
									</div>
                </div>
              ))}
            </div>

            {/* Кнопка "Назад" */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20"
                aria-label="Предыдущие статьи"
              >
                <ArrowLeftIcon className="h-6 w-6 text-indigo-900" />
              </button>
            )}

            {/* Кнопка "Вперёд" */}
            {currentIndex + 1 < reviews.length && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20"
                aria-label="Следующие статьи"
              >
                <ArrowRightIcon className="h-6 w-6 text-indigo-900" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Полноэкранное отображение статьи */}
      {/* {fullscreenReview && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 md:p-8 z-50">
          <div className="bg-white rounded-lg shadow-xl md:max-w-7/12 w-full max-h-full overflow-y-auto relative">
            <button
              onClick={() => setFullscreenReview(undefined)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 z-50 p-2"
              aria-label="Закрыть"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={fullscreenReview.icon}
                alt={fullscreenReview.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">{fullscreenReview.name}</h1>
              <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">{fullscreenReview.post}</h1>
              <div className="prose max-w-none text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: fullscreenReview.content.replace(/\n/g, '<br />') }} />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};