import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
		image: "/assets/article/article-1.png",
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
		image: "/assets/article/article-2.png",
	},
	{
		id: 3,
		title: "Логистика импорта: оптимизация расходов и сроков",
		preview: "Грамотная логистика — ключ к успешному импорту. Узнайте, как выбрать оптимальный маршрут...",
		content: `Грамотная логистика — ключ к успешному импорту. Узнайте, как выбрать оптимальный маршрут, вид транспорта и как правильно рассчитать сроки доставки. Мы расскажем о преимуществах морских, железнодорожных и авиаперевозок, а также о том, как консолидация грузов помогает экономить. Наши эксперты готовы разработать для вас индивидуальное решение, которое позволит оптимизировать расходы и сократить время доставки.`,
		image: "/assets/article/article-3.png",
	},
	{
		id: 4,
		title: "Таможенные пошлины: как правильно рассчитать и сэкономить",
		preview: "Рассчёт таможенных пошлин — сложная задача. В статье мы объясним, как это работает...",
		content: "Рассчёт таможенных пошлин — сложная задача. В статье мы объясним, как это работает, и расскажем о способах сэкономить. Мы разберёмся в тонкостях таможенного кодекса и поделимся секретами, которые помогут вам избежать лишних трат.",
		image: "/assets/article/article-4.png",
	},
	{
		id: 5,
		title: "Страхование грузов: почему это важно",
		preview: "Никто не застрахован от непредвиденных ситуаций. Узнайте, как страхование грузов защитит ваш бизнес...",
		content: "Никто не застрахован от непредвиденных ситуаций. Узнайте, как страхование грузов защитит ваш бизнес от финансовых потерь. Мы расскажем о видах страхования, их преимуществах и о том, как правильно оформить полис.",
		image: "/assets/article/article-5.png",
	},
	{
		id: 6,
		title: "Доставка от двери до двери: преимущества и возможности",
		preview: "Мы предлагаем комплексный подход к доставке. От склада поставщика до вашего склада...",
		content: "Мы предлагаем комплексный подход к доставке. От склада поставщика до вашего склада. Узнайте о преимуществах услуги «от двери до двери» и как она поможет вам сэкономить время и силы. Мы возьмём на себя всю логистику и документацию.",
		image: "/assets/article/article-6.png",
	}
];

export const ArticleFull = () => {
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

	return <>
		<section id="articles" className="py-20 flex items-center bg-gray-100">
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
		{fullscreenArticle && <ArticleFullScreenView article={fullscreenArticle} close={() => setFullscreenArticle(undefined)}/>}
	</>
}

interface IArticleFullScreenView {
	article:IArticle
	close:()=>void
}

const ArticleFullScreenView = ({article,close}:IArticleFullScreenView) =>
<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 md:p-8 z-50">
	<div className="bg-white rounded-lg shadow-xl md:max-w-7/12 w-full max-h-full overflow-y-auto relative">
		<button
			onClick={close}
			className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 z-50 p-2"
			aria-label="Закрыть"
		>
			<XMarkIcon className="h-8 w-8" />
		</button>
		<div className="relative w-full h-64 md:h-96">
			<Image
				src={article.image}
				alt={article.title}
				layout="fill"
				objectFit="cover"
			/>
		</div>
		<div className="p-6 md:p-8">
			<h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">{article.title}</h1>
			<div className="prose max-w-none text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
		</div>
	</div>
</div>
