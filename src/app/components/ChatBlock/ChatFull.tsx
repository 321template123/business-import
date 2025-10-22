import { ChevronLeftIcon, ChevronRightIcon, LinkIcon, XMarkIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {createPortal} from 'react-dom'
import { BounceLoader } from 'react-spinners'

interface IPrice{
	min_quantity: string
	original_price_cny: string
	price_rub: string
	price_usd: string
}

interface IItem{
	dimensions: {
		height: string
		length: string
		weight: string
		width: string
	}
	id: string
	image: string
	location: string
	original_title: string
	min_order_quantity: string
	price_cny: string
	price_rub: string
	price_usd: string
	quantity_prices: IPrice[]
	title: string
	url: string
	vendor: string
	selected: boolean
}

export const ChatFull = () => {

	const [title, setTitle] = useState<string>("")
	const [minPrice, setMinPrice] = useState<number>()
	const [maxPrice, setMaxPrice] = useState<number>()
	const [volume, setVolume] = useState<number>()

	const [load, setLoad] = useState<boolean>(false)

	const [showItem, setShowItem] = useState<number>(-1)
	const [page, setPage] = useState<number>(1)
	const ITEMS_PER_PAGE = 2

	const [items, setItems] = useState<IItem[]>([])
// 	const [items, setItems] = useState<IItem[]>(JSON.parse(`[
//     {
//         "dimensions": {
//             "height": "3.934583333",
//             "length": "8.04375",
//             "weight": "0.098129687",
//             "width": "5.588333333"
//         },
//         "id": "abb-559315837908",
//         "image": "",
//         "location": "Цзиньхуа Сити",
//         "min_order_quantity": "2.0",
//         "original_title": "红蓝绿白百叶窗冷光眼镜led发光节日眼镜闪光助威眼镜节日用品批",
//         "price_cny": "1.45",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "2",
//                 "original_price_cny": "1.45",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "576",
//                 "original_price_cny": "1.42",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "5760",
//                 "original_price_cny": "1.4",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Красный, синий, зеленый, белый лувер холодные очки светодиодные светящиеся праздничные очки Flash Cheer Festivals Festival Supplies Parath",
//         "url": "https://detail.1688.com/offer/559315837908.html",
//         "vendor": "义乌海派1688"
//     },
//     {
//         "dimensions": {
//             "height": "9.642857142",
//             "length": "18.071428571",
//             "weight": "2.076857142",
//             "width": "11.857142857"
//         },
//         "id": "abb-522670951422",
//         "image": "",
//         "location": "Линьи",
//         "min_order_quantity": "1.0",
//         "original_title": "热销推荐 双翻紫外线电焊眼镜 白电焊工电焊眼镜 焊接电焊眼镜",
//         "price_cny": "3.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "1",
//                 "original_price_cny": "3.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "100",
//                 "original_price_cny": "2.8",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "10000",
//                 "original_price_cny": "2.6",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Горячие рекомендуемые сварки сварки сварки сварки сварки.",
//         "url": "https://detail.1688.com/offer/522670951422.html",
//         "vendor": "爱信德防护用品"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.2",
//             "width": "-"
//         },
//         "id": "abb-520061370067",
//         "image": "",
//         "location": "город Вэньчжоу",
//         "min_order_quantity": "30.0",
//         "original_title": "批发眼镜购物纸袋各大品牌眼镜店白卡黑卡牛皮纸手提纸袋定 制",
//         "price_cny": "1.2",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "30",
//                 "original_price_cny": "1.2",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "5000",
//                 "original_price_cny": "1.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "10000",
//                 "original_price_cny": "0.8",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Оптовые очки для торговых бумажных пакет",
//         "url": "https://detail.1688.com/offer/520061370067.html",
//         "vendor": "辰欧纸塑制品厂"
//     },
//     {
//         "dimensions": {
//             "height": "12.819298245",
//             "length": "23.950877192",
//             "weight": "0.692833333",
//             "width": "15.0"
//         },
//         "id": "abb-598199773232",
//         "image": "",
//         "location": "Линьи Сити",
//         "min_order_quantity": "-",
//         "original_title": "厂家防风伸缩腿护目镜 防飞溅防冲击劳保眼镜蓝白防雾电焊眼镜",
//         "price_cny": "1.25",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Ветроистойные телескопические ножки производителя Наблюдая за зеркальными анти -плашными защитными стеклами синие и белые анти -ффо -школьные стекла",
//         "url": "https://detail.1688.com/offer/598199773232.html",
//         "vendor": "临沂浩迈劳保"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.03",
//             "width": "-"
//         },
//         "id": "abb-626968106604",
//         "image": "",
//         "location": "Цзиньхуа",
//         "min_order_quantity": "300.0",
//         "original_title": "护目镜防护眼镜伸缩腿眼镜防尘防飞溅防冲击眼镜黑架白片",
//         "price_cny": "1.8",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "300",
//                 "original_price_cny": "1.8",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "3000",
//                 "original_price_cny": "1.6",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Goggles защитные очки телескопические ноги пылеистотливые брызгостойки против бокал. Черная рама белая таблетка",
//         "url": "https://detail.1688.com/offer/626968106604.html",
//         "vendor": "yshjtools"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.01",
//             "width": "-"
//         },
//         "id": "abb-695148721225",
//         "image": "",
//         "location": "Чжэньцзян",
//         "min_order_quantity": "-",
//         "original_title": "复古多边形眼镜框白鹿同款大框眼镜架防蓝光眼镜丹阳眼镜32057",
//         "price_cny": "22.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Ретро полигональная оправа для очков Bailu в том же стиле, большая оправа для очков, оправа для очков с защитой от синего света, очки Danyang 32057",
//         "url": "https://detail.1688.com/offer/695148721225.html",
//         "vendor": "丹阳眼镜厂"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.05",
//             "width": "-"
//         },
//         "id": "abb-853448094570",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "2.0",
//         "original_title": "发光百叶窗眼镜 蹦迪七彩led冷白光眼镜 KTV酒吧荧光用品助威玩具",
//         "price_cny": "1.38",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "2",
//                 "original_price_cny": "1.38",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "600",
//                 "original_price_cny": "1.36",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "6000",
//                 "original_price_cny": "1.35",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Светящиеся очки с разбивающимися красочными светодиодными холодными белыми светлы",
//         "url": "https://detail.1688.com/offer/853448094570.html",
//         "vendor": "双彩贸易有限公司"
//     },
//     {
//         "dimensions": {
//             "height": "5.0",
//             "length": "20.0",
//             "weight": "0.016",
//             "width": "8.0"
//         },
//         "id": "abb-673450030352",
//         "image": "",
//         "location": "Тайчжоу",
//         "min_order_quantity": "2.0",
//         "original_title": "白熊猫敦敦儿童眼镜墨镜卡通眼镜防紫外线卡通眼镜小孩儿童太阳镜",
//         "price_cny": "3.5",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "2",
//                 "original_price_cny": "3.5",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "24",
//                 "original_price_cny": "3.2",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "240",
//                 "original_price_cny": "2.9",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Мультяшные детские солнцезащитные очки, защита от ультрафиолета",
//         "url": "https://detail.1688.com/offer/673450030352.html",
//         "vendor": "椒江神龙眼镜厂"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.378333333",
//             "width": "-"
//         },
//         "id": "abb-920105583579",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "三光眼镜白光蓝光黄光眼镜太阳镜",
//         "price_cny": "8.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Сангуанские очки белые голубые светлые светильники солнцезащитные очки",
//         "url": "https://detail.1688.com/offer/920105583579.html",
//         "vendor": "蓝凌实力工厂"
//     },
//     {
//         "dimensions": {
//             "height": "4.555555555",
//             "length": "47.333333333",
//             "weight": "0.188777777",
//             "width": "5.277777777"
//         },
//         "id": "abb-562062768510",
//         "image": "",
//         "location": "Тайчжоу",
//         "min_order_quantity": "2.0",
//         "original_title": "白框彩片护目镜 X400户外运动眼镜 摩托车风沙骑行眼镜现货滑雪镜",
//         "price_cny": "5.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "2",
//                 "original_price_cny": "5.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "20",
//                 "original_price_cny": "4.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "1000",
//                 "original_price_cny": "3.6",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Белый -рамный цвет пленка зеркало x400 открытые спортивные очки мотоциклевые бокалы для песка езды на песке Стала Spot лыжный зеркало",
//         "url": "https://detail.1688.com/offer/562062768510.html",
//         "vendor": "名品淘金外贸"
//     },
//     {
//         "dimensions": {
//             "height": "5.1",
//             "length": "16.0",
//             "weight": "0.04",
//             "width": "7.1"
//         },
//         "id": "abb-719787140408",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "1.0",
//         "original_title": "白山眼镜莉贝琳同款BOSTON眼镜框复古板材眼镜镜架新款",
//         "price_cny": "70.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "1",
//                 "original_price_cny": "70.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "20",
//                 "original_price_cny": "65.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "50",
//                 "original_price_cny": "60.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Baishan Glasses Lelly Boston Glasses рамки ретро -борт",
//         "url": "https://detail.1688.com/offer/719787140408.html",
//         "vendor": "木子九眼镜批发"
//     },
//     {
//         "dimensions": {
//             "height": "10.0",
//             "length": "17.0",
//             "weight": "0.04",
//             "width": "11.0"
//         },
//         "id": "abb-858109945823",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "欧美ins猫眼老花镜冷茶色高清防蓝光眼镜架高级素颜显白老花眼镜",
//         "price_cny": "5.8",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Европейские и американские очки для чтения кошачьей кошки холодные коричневые стаканы с синим цветом высокой четкости.",
//         "url": "https://detail.1688.com/offer/858109945823.html",
//         "vendor": "b2b-22007960119452747c"
//     },
//     {
//         "dimensions": {
//             "height": "15.0",
//             "length": "15.0",
//             "weight": "0.025",
//             "width": "5.0"
//         },
//         "id": "abb-576735283595",
//         "image": "",
//         "location": "Цзиньхуа",
//         "min_order_quantity": "1.0",
//         "original_title": "韩国进口蜡绳白宇同款眼镜绳时尚眼镜链子老花镜防滑链条彩色挂绳",
//         "price_cny": "2.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "1",
//                 "original_price_cny": "2.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "12",
//                 "original_price_cny": "1.5",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "100",
//                 "original_price_cny": "1.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Импортные очки, модная цепочка, нескользящая цепь, ремешок, в корейском стиле",
//         "url": "https://detail.1688.com/offer/576735283595.html",
//         "vendor": "义乌盈美有限公司"
//     },
//     {
//         "dimensions": {
//             "height": "2.0",
//             "length": "18.0",
//             "weight": "1.0",
//             "width": "8.0"
//         },
//         "id": "abb-935908377385",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "变色高级感眼镜近视配有度数防蓝光茶色眼镜学生素颜显白平光眼镜",
//         "price_cny": "4.3",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Измешающие цвет высококачественные очки, миопия, с анти-синие светло-коричневые очки, студенты с белыми и плоскими очками без макияжа",
//         "url": "https://detail.1688.com/offer/935908377385.html",
//         "vendor": "b2b-2211824725495d1bd6"
//     },
//     {
//         "dimensions": {
//             "height": "4.0",
//             "length": "16.0",
//             "weight": "0.03",
//             "width": "6.0"
//         },
//         "id": "abb-622200411852",
//         "image": "",
//         "location": "Линьи",
//         "min_order_quantity": "1.0",
//         "original_title": "安全眼镜伸缩腿护目镜防护镜劳保透明眼镜防飞溅防冲击蓝白护目镜",
//         "price_cny": "1.2",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "1",
//                 "original_price_cny": "1.2",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "480",
//                 "original_price_cny": "1.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "48000",
//                 "original_price_cny": "0.8",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Безопасные очки телескопические очки для ног Защитные очки.",
//         "url": "https://detail.1688.com/offer/622200411852.html",
//         "vendor": "临沂思安劳保用品有限公司"
//     },
//     {
//         "dimensions": {
//             "height": "5.0",
//             "length": "18.0",
//             "weight": "0.13",
//             "width": "70.0"
//         },
//         "id": "abb-824140510527",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "定制太阳镜GM白板皮夹眼镜盒子套装近视墨镜收纳盒纸盒磁吸眼镜包",
//         "price_cny": "7.5",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Солнцезащитные очки, комплект, коробка для хранения, делается под заказ",
//         "url": "https://detail.1688.com/offer/824140510527.html",
//         "vendor": "b2b-2217947771494a816d"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.03",
//             "width": "-"
//         },
//         "id": "abb-643463940079",
//         "image": "",
//         "location": "Тайчжоу",
//         "min_order_quantity": "2.0",
//         "original_title": "黑架白片防雾伸缩腿眼镜防喷溅劳保眼镜防尘防护拉拉镜腿护目镜",
//         "price_cny": "2.9",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "2",
//                 "original_price_cny": "2.9",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "48",
//                 "original_price_cny": "2.8",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "120",
//                 "original_price_cny": "2.7",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "Черная рама белый лист анти-плюс телескопические очки для ног Защитные очки для защиты от пыли тяговые защитные очки",
//         "url": "https://detail.1688.com/offer/643463940079.html",
//         "vendor": "临海市航丞眼镜有限公司"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.06",
//             "width": "-"
//         },
//         "id": "abb-705031002797",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "定制眼镜纸袋手提袋子 白卡纸烫金包装袋订做装饰品手提袋子 批发",
//         "price_cny": "5.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Очки, льняная сумка, упаковка, украшение, делается под заказ, оптовые продажи",
//         "url": "https://detail.1688.com/offer/705031002797.html",
//         "vendor": "cocker1688"
//     },
//     {
//         "dimensions": {
//             "height": "5.5",
//             "length": "17.5",
//             "weight": "0.025",
//             "width": "8.5"
//         },
//         "id": "abb-835634218112",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "平光镜超轻冷茶色眼镜框女素颜显白圆框眼镜架新款时尚防蓝光眼镜",
//         "price_cny": "1.36",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Сверхлегкие модные очки, городской стиль",
//         "url": "https://detail.1688.com/offer/835634218112.html",
//         "vendor": "tzgujin"
//     },
//     {
//         "dimensions": {
//             "height": "12.0",
//             "length": "32.0",
//             "weight": "0.25",
//             "width": "25.0"
//         },
//         "id": "abb-914144848245",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "企业手提袋定制logo白卡纸袋服装店礼品袋眼镜店展销会手提袋定制",
//         "price_cny": "2.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Льняная сумка, очки, делается под заказ, с печатью вашего логотипа, подарок на день рождения",
//         "url": "https://detail.1688.com/offer/914144848245.html",
//         "vendor": "b2b-22162778529336bfee"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.015",
//             "width": "-"
//         },
//         "id": "abb-853166056975",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "百款处理混批TR超轻光学眼镜框柔软舒适老花近视眼镜框架白平眼镜",
//         "price_cny": "2.58",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Сверхлегкие мягкие комфортные очки, оптика",
//         "url": "https://detail.1688.com/offer/853166056975.html",
//         "vendor": "b2b-262305189154370"
//     },
//     {
//         "dimensions": {
//             "height": "-",
//             "length": "-",
//             "weight": "0.025",
//             "width": "-"
//         },
//         "id": "abb-889991964919",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "新款猫眼老花镜高档老人高清防蓝光眼镜架高级素颜显白老花眼镜",
//         "price_cny": "6.8",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Новые очки для чтения кошачьих глаз высококлассные пожилые стаканы с синим светильником высокого уровня.",
//         "url": "https://detail.1688.com/offer/889991964919.html",
//         "vendor": "tzyinxin0823"
//     },
//     {
//         "dimensions": {
//             "height": "5.0",
//             "length": "15.0",
//             "weight": "0.028",
//             "width": "5.0"
//         },
//         "id": "abb-900271522259",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "5.0",
//         "original_title": "古月红老花镜白片防蓝光老花眼镜批发金属全框TR眼镜中老年人老花",
//         "price_cny": "10.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "5",
//                 "original_price_cny": "10.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "10",
//                 "original_price_cny": "9.5",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "古月红 Пресбиопические очки, белые линзы, анти-синий свет, пресбиопические очки, оптовые металлические полнокадровые TR-очки, пресбиопические очки среднего и пожилого возраста",
//         "url": "https://detail.1688.com/offer/900271522259.html",
//         "vendor": "b2b-220144566793845ce1"
//     },
//     {
//         "dimensions": {
//             "height": "10.0",
//             "length": "5.0",
//             "weight": "0.005",
//             "width": "5.0"
//         },
//         "id": "abb-655685886298",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "厂家直供眼镜清洁剂包装盒白卡纸盒长方形折叠彩印礼品盒印刷logo",
//         "price_cny": "1.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Очки, чистящее средство, прямоугольная коробка, прямая поставка с фабрики, подарок на день рождения, с печатью вашего логотипа",
//         "url": "https://detail.1688.com/offer/655685886298.html",
//         "vendor": "苍南致兴纸塑制品包装厂"
//     },
//     {
//         "dimensions": {
//             "height": "17.625",
//             "length": "19.625",
//             "weight": "0.1",
//             "width": "18.5"
//         },
//         "id": "abb-609800660417",
//         "image": "",
//         "location": "Шаньтоу",
//         "min_order_quantity": "-",
//         "original_title": "国庆节派对眼镜 生日眼镜 搞怪爱国眼镜装饰道具 成人儿童太阳镜",
//         "price_cny": "1.1",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Забавное украшение, реквизит, солнцезащитные очки для детей и взрослых",
//         "url": "https://detail.1688.com/offer/609800660417.html",
//         "vendor": "玩具大掌柜"
//     },
//     {
//         "dimensions": {
//             "height": "2.0",
//             "length": "18.0",
//             "weight": "0.05",
//             "width": "8.0"
//         },
//         "id": "abb-803743415736",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "公路自行车骑行眼镜墨镜白水银登山跑步连体太阳眼镜防紫外线男女",
//         "price_cny": "2.2",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Шоссейный дорожный велосипед для велоспорта, белые солнцезащитные очки на солнечной энергии подходит для мужчин и женщин, защита от ультрафиолета",
//         "url": "https://detail.1688.com/offer/803743415736.html",
//         "vendor": "轩达眼镜"
//     },
//     {
//         "dimensions": {
//             "height": "8.333333333",
//             "length": "9.166666666",
//             "weight": "1.07375",
//             "width": "7.916666666"
//         },
//         "id": "abb-826592820525",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "HP服装魔法长袍帽子围巾毛衣领带眼镜白衬衫魔术棒套装",
//         "price_cny": "1.35",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Шапка, шарф, свитер, галстук, очки, рубашка, комплект",
//         "url": "https://detail.1688.com/offer/826592820525.html",
//         "vendor": "静悦商贸公司"
//     },
//     {
//         "dimensions": {
//             "height": "4.7",
//             "length": "14.3",
//             "weight": "0.03",
//             "width": "5.2"
//         },
//         "id": "abb-853050769050",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "5.0",
//         "original_title": "古月红老花镜防蓝光老花眼镜玫瑰金女款树脂白片金属全框老花眼镜",
//         "price_cny": "12.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [
//             {
//                 "min_quantity": "5",
//                 "original_price_cny": "12.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             },
//             {
//                 "min_quantity": "10",
//                 "original_price_cny": "11.0",
//                 "price_rub": "-",
//                 "price_usd": "-"
//             }
//         ],
//         "title": "古月红 Очки для пресбиопии, антисиний свет, розовое золото, женские, смола, белые, металл, полнокадровые, пресбиопические очки",
//         "url": "https://detail.1688.com/offer/853050769050.html",
//         "vendor": "luowen18685192402"
//     },
//     {
//         "dimensions": {
//             "height": "0.266666666",
//             "length": "3.383333333",
//             "weight": "0.020666666",
//             "width": "0.266666666"
//         },
//         "id": "abb-41266419063",
//         "image": "",
//         "location": "Вэньчжоу",
//         "min_order_quantity": "-",
//         "original_title": "螺丝批 钟表眼镜起子 螺丝刀 铜柄白钢头起子",
//         "price_cny": "2.0",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Отвертка, медные очки",
//         "url": "https://detail.1688.com/offer/41266419063.html",
//         "vendor": "高梵钟表"
//     },
//     {
//         "dimensions": {
//             "height": "2.0",
//             "length": "18.0",
//             "weight": "0.05",
//             "width": "8.0"
//         },
//         "id": "abb-809744929589",
//         "image": "",
//         "location": "-",
//         "min_order_quantity": "-",
//         "original_title": "女生自行车骑行眼镜白框透明大框户外太阳镜防风沙紫外线墨镜批发",
//         "price_cny": "1.8",
//         "price_rub": "-",
//         "price_usd": "-",
//         "quantity_prices": [],
//         "title": "Прозрачный велосипед для велоспорта, дорожные ветрозащитные солнцезащитные очки, оптовые продажи",
//         "url": "https://detail.1688.com/offer/809744929589.html",
//         "vendor": "轩达眼镜"
//     }
// ]`))

	const findItem = async () => {
		let query = ""
		query += "language=ru&"
		query += `framePosition=${0}&`
		query += `frameSize=${30}&`
		query += `ItemTitle=${title}&`
		query += `MinPrice=${minPrice}&`
		query += `MaxPrice=${maxPrice}&`
		query += `MinVolume=${volume}`
		setLoad(!load)
		axios.get(`/api/search?${query}`)
			.then(responce => {
				setItems(responce.data.items)
				setPage(1)
			})
			.then(() => setLoad(false))
			.catch(() => setLoad(false))
	}

	const toggleSelected = (index: number) => {
		// Обновляем глобальный индекс в массиве items (учитывая пагинацию)
		setItems(prevItems => 
			prevItems.map((item, i) => 
				i === index ? { ...item, selected: !item.selected } : item
			)
		)
	}

	useEffect(()=>{
		localStorage.setItem("card",JSON.stringify(items.filter(item => item.selected)))
	},[items])

	// Отображаемые товары на текущей странице
	// const displayedItems = items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
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
							{items.map((item, index) => {
								// <MiniCardV1 key={index} item={item} select={()=>toggleSelected(index)} view={()=>setShowItem(item)}/>
								return <MiniCardV2 key={index} item={item} select={()=>toggleSelected(index)} view={()=>setShowItem(index)} show={((page - 1) * ITEMS_PER_PAGE <= index) && ((page) * ITEMS_PER_PAGE) > index}/>
							})}
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
	item:IItem
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
						<Image 
							src={item.image} 
							alt={`Детальное изображение: ${item.title}`} 
							className="w-full h-auto rounded-lg" 
						/>
					</div>
									
					{/* Детали */}
					<div className="md:w-1/2 flex flex-col justify-between">
					{/* Описание */}
						{/* <div>
							<h3 className="text-lg font-semibold mb-2">Описание</h3>
							<p className="text-sm text-gray-700">
								{item.description || 'Подробное описание товара отсутствует. Свяжитесь с продавцом для дополнительной информации.'}
							</p>
						</div> */}
											
						{/* Цены со всеми опциями */}
						<div>
							<h3 className="text-lg font-semibold mb-2">Ценообразование</h3>
							{item.quantity_prices && <>
								{item.price_rub && <p className="text-lg font-bold text-blue-400">От {item.price_rub} ₽</p>}
								<ul className="text-sm text-gray-700 space-y-1">
									{item.quantity_prices.map((qp:IPrice, index:number) => (
										<li key={index}>
											{qp.min_quantity} шт.+: {qp.price_rub} ₽ за штуку
										</li>
									))}
								</ul>
							</>}
						</div>
											
						{/* Характеристики */}
						<div>
							<h3 className="text-lg font-semibold mb-2">Характеристики</h3>
							<ul className="text-sm text-gray-700 space-y-1">
								<li><strong>ID:</strong> {item.id}</li>
								<li><strong>Размеры:</strong> {item.dimensions.height}×{item.dimensions.width}×{item.dimensions.length} см</li>
								<li><strong>Вес:</strong> {item.dimensions.weight} кг</li>
								{/* {item.rating && <li><strong>Рейтинг:</strong> {item.rating}/5 ⭐</li>} */}
							</ul>
						</div>
											
						{/* Отзывы (если есть) */}
						{/* {item.reviews && item.reviews.length > 0 && (<>
							 <div>
							 	<h3 className="text-lg font-semibold mb-2">Отзывы</h3>
							 	<ul className="text-sm text-gray-300 space-y-2">
							 		{item.reviews.map((review, index) => (
							 			<li key={index} className="bg-gray-700 p-2 rounded">{review}</li>
							 		))}
							 	</ul>
							 </div>
						</>)} */}
											
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
	item:IItem
	select:()=>void
	view:()=>void
	show: boolean
}
	
// const MiniCardV1 = ({item,select,view}:IItemMiniView) => 
// <div 
// 	className={`bg-gray-700/50 p-3 rounded-lg hover:bg-gray-600/50 transition-all duration-200 relative ${item.selected ? 'ring-2 ring-green-400' : ''} w-full h-full`}
// >
// 	<img src={item.image} alt={item.title} className="w-40 h-40 object-cover rounded mx-auto mb-2" />
// 	<p className="text-white text-sm truncate text-center">{item.title}</p>
// 	<p className="text-white text-center font-bold">{item.price}</p>
// 	<div className="flex flex-col items-center md:flex-row ">
// 		<button 
// 			onClick={select} 
// 			className={`w-full flex-1 p-1 m-1 text-xs rounded ${item.selected ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'} hover:bg-opacity-80 transition-colors`}
// 		>
// 			{item.selected ? 'Выбрано' : 'Выбрать'}
// 		</button>
// 		<button 
// 			onClick={view} 
// 			className="w-full flex-1 p-1 m-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
// 		>
// 			Посмотреть
// 		</button>
// 	</div>
// 	{item.selected && (
// 		<div className="absolute top-1 right-1">
// 			<CheckBadgeIcon className="w-6 h-6 text-green-400" />
// 		</div>
// 	)}
// </div>

const MiniCardV2 = ({item,select,view,show}:IItemMiniView) => 
<div className={`m-2 ${show ? '' : 'hidden'}`}>
	<div className={`md:w-full bg-gray-700 rounded-lg overflow-hidden ${item.selected ? 'ring-2 ring-green-400' : ''}`}>
		{/* Изображение */}
		<div className="relative">
			<Image 
				src={item.image} 
				alt={item.title} 
				className="object-cover rounded-xl p-2" 
				width={800}
				height={800}
				quality={80}
				loading='eager'
				placeholder="blur"
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
			/>
		</div>
		
		{/* Информация о товаре */}
		<div className="p-3">
			<h4 className="text-sm font-medium text-white line-clamp-2 mb-2 break-all">
				{item.title}
			</h4>
			
			{/* Цены */}
			<div className="mb-2">
				<span className="text-lg font-bold text-blue-600">
					<p className="text-lg font-bold text-blue-400">От {item.price_rub} ₽</p>
				</span>
				{/* {item.quantity_prices && item.quantity_prices.length > 1 && (
					<div className="text-xs text-gray-500">
						<ul className="list-disc pl-4">
							{item.quantity_prices.map((qp:IPrice, index:number) => (
								<li key={index} className="py-1">
									{qp.min_quantity} шт.: {qp.price_rub} ₽
								</li>
							))}
						</ul>
					</div>
				)} */}
			</div>
			
			{/* Габариты */}
			{/* <div className="text-xs text-gray-500 mb-2">
				Габариты: {item.dimensions.height}×{item.dimensions.width}×{item.dimensions.length} см, вес: {item.dimensions.weight} кг
			</div> */}
			
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
	