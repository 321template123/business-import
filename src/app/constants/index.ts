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
}
export const SocialLinks:ISocialLink[] = [
	{
		name: "VK",
		icon: "/business-import/assets/logo/vkontakte.png",
		link: "https://vk.com/id101595763"
	},
	{
		name: "Telegram",
		icon: "/business-import/assets/logo/telegram.png",
		link: "https://t.me/template123"
	},
	{
		name: "Mail",
		icon: "/business-import/assets/logo/mailru.png",
		link: "mailto:politkovskiyd@mail.ru"
	},
	{
		name: "Phone",
		icon: "/business-import/assets/logo/phone.png",
		link: "tel:+70000000000"
	}
]