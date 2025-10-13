import Link from 'next/link'
import React, { useState } from 'react'

interface IService{
	title: string
	description: string
	steps: string[]
	price: string
	blur?: boolean
}

const SERVICES:IService[] = [
	{
		title: "Импорт «под ключ».",
		description: "Комплекс услуг по организации импорта товаров.",
		steps: [
			"Минимальный набор*",
			"- Поиск товара",
			"- Переговоры с поставщиками",
			"- Оформление документов",
			"- Передача груза"
		],
		price: "Персональный рассчёт"
	},
	{
		title: "Поиск товара",
		description: "Поможем вам найти интерисующий вас товар.",
		steps: [
			"- Консультация",
			"- Поиск наиболее подходящих поставщиков",
			"- Проверка надёжности поставщиков",
		],
		price: "от 1500 ₽"
		
	},
	{
		title: "Переговоры с поставщиками",
		description: "Поможем договориться с поставщиками.",
		steps: [
			"- Проведение переговоров на Китайском языке (устно/письменно)",
			"- Получение подробной информации о продукции",
			"- Согласование условий сотрудничества",
		],
		price: "от 2500 ₽"
	},
	{
		title: "Оформление документов",
		description: "Формирование полного пакета документов для осуществления импорта продукции",
		steps: [
			"- Получение и перевод первичных документов (Китайских) от поставщика",
			"- Подготовка и оформление вторичных документов (Российских) необходимых для импорта",
		],
		price: "от 3500 ₽"
	},
	{
		title: "Перевод Английский/Китайский",
		description: "Если у вас возникают трудности в общении с поставщиком",
		steps: [
			"- Устный: перевод на встречах(онлайн/офлайн), ПНР, выставках и т.д.",
			"- Письменный: перевод документации, инструкций, сертификатов и т.д. (в том числе локализация ПО)"
		],
		price: "от 500 ₽"
	},
	{
		title: "Сопровождение в Китае",
		description: "Поможем реализовать выездные командировки в Китай",
		steps: [
			"- Подготовка плана поездки (проживание, питание, встречи, трансфер)",
			"- Подготовка документов для въезда в Китай (визы и прочее)",
			"- Сопровождение переводчиком (переговоры)",
		],
		price: "Персональный рассчёт"
	},
	{
		title: "Контроль производства и качества",
		description: "Удостоверимся в соблюдении условий Вашего с поставщиком договора",
		steps: [
			"- Формирование графика производства",
			"- Фото и видео фиксация готовой продукции",
			"- Выезд независимого эксперта, оценка товара по чек-листу клиента",
		],
		price: "Персональный рассчёт"
	},
	{
		title: "Консолидация товара",
		description: "Поможем собрать несколько товаров в единую поставку",
		steps: [
			"- Предоставление места на складе",
			"- Приём продукции от разных поставщиков",
			"- Отправка единой партии",
		],
		price: "Персональный рассчёт"
	},
	{
		title: "Брендирование",
		description: "Выпуск готовой продукции под Вашим брендом на китайских производственных площадках",
		steps: [
			"- Полное сопровождение «под ключ»",
			"- Помощь с ОЕМ-соглашением"
		],
		price: "Персональный рассчёт"
	},
	{
		title: "Консультирование",
		description: "Поможем разобраться в теории и практике международной торговли",
		steps: [
			"- Консультирование со специалистом",
			"- Поможем составить план поставки",
			"- Помощь в решении проблем с импортом",
		],
		price: "от 2000 ₽"
	},
	{
		title: "Платежи",
		description: "Осуществление оплат за товары/услуги",
		steps: [
			"- Перевод на банковские реквизиты контрагента",
			"- Перевод на AliPAY и WeChatPay"
		],
		price: "Персональный рассчёт"
	},
	{
		title: "Исследование и маркетинг",
		description: "Поможем разобраться в рынке услуг и товаров Китая",
		steps: [
			"- Анализ рынка и конкурентов в Китае",
			"- Поиск трендовых и нишевых товаров",
		],
		price: "от 5000 ₽"
	},
]

export const ServicesFull = () => {

	const [toogleMore, setToogleMore] = useState<boolean>(false)

	return <section id="services" className="pt-20 bg-gray-100 min-h-screen flex items-center">
		<div className="container mx-auto px-8">
			<h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Услуги</h2>
			<div className={`relative ${toogleMore? "":"h-[500px] xl:h-[600px] overflow-hidden"}`}>
				<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-10'>
					{SERVICES.map((item:IService,index:number) => {
						return <ServiceCard key={index} {...item} blur={!toogleMore && index > 2}/>
					})}
				</div>
			</div>
			{!toogleMore && <button onClick={()=>setToogleMore(true)} className="w-full m-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex justify-center items-center space-x-2">Показать ещё</button>}
			{toogleMore && <Link href={"#services"} onClick={()=>setToogleMore(false)} className="m-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex justify-center items-center space-x-2">Скрыть</Link>}
		</div>
	</section>
}

const ServiceCard = (service:IService) => 
	<div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden`}>
		<div className="p-6 flex flex-col justify-between min-h-[400px]">
			<h3 className="text-xl font-bold text-indigo-900 mb-2 h-[10%]">{service.title}</h3>
			<span className={`text-gray-600 ${service.blur?"blur-xs":""} h-[10%]`}>
				{service.description}
				{service.steps.length > 0 && <hr></hr>}
			</span>
			
			<ul className={`${service.blur?"blur-xs":""} h-[70%]`}>
				{service.steps.map((item,index) => <li key={index} className='font-medium '>{item}</li>)}
			</ul>
			<p className={`font-bold text-green-700 text-center ${service.blur?"blur-xs":""} h-[10%]`}>{service.price}</p>
		</div>
	</div>
