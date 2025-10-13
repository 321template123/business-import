export interface INavbarLink{
	name: string
	link: string
}

export const NavbarLinks:INavbarLink[] = [
	{
		name: "Главная",
		link: "#main"
	},
	{
		name: "О нас",
		link: "#about"
	},	
	{
		name: "Услуги",
		link: "#service"
	},
	{
		name: "Статьи",
		link: "#blog"
	},
	{
		name: "Контакты",
		link: "#contacts"
	},
]

export interface ISocialLink{
	name: string
	icon: string
	link: string
	short: string
}
export const SocialLinks:ISocialLink[] = [
	{
		name: "Telegram",
		icon: "/business-import/assets/icon/telegram.png",
		link: "https://t.me/businessimport_official",
		short: "t.me/businessimport_official"
	},
	{
		name: "VK",
		icon: "/business-import/assets/icon/vkontakte.png",
		link: "https://vk.com/grishania99",
		short: "grishania99"
	},
	{
		name: "Mail",
		icon: "/business-import/assets/icon/mailru.png",
		link: "mailto:business-import@mail.ru",
		short: "business-import@mail.ru"
	},
	{
		name: "Phone",
		icon: "/business-import/assets/icon/phone.png",
		link: "tel:+79870004605",
		short: "+79870004605"
	},
]