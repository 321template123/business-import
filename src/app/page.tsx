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
import { MainFull } from './components/MainBlock/MainFull';
import { AboutFull } from './components/AboutBlock/AboutFull';
import { ArticleFull } from './components/ArticleBlock/ArticleFull';
import { ReviewFull } from './components/ReviewCarousel/ReviewFull';
import { MainFormFull } from './components/MailFormBlock/MainFormFull';
import { ContactFull } from './components/ContactBlock/ContactFull';
import { Header } from './components/Header/Header';
import { ServicesFull } from './components/ServicesBlock/ServicesFull';

export default function Home() {

  return <div className="font-sans text-gray-800">
		<Header />
		<main className="">
			{/* Главный блок */}
			<MainFull />
			
			{/* Блок "О нас" */}
			<AboutFull />

			{/* Блок "Статьи" */}
			<ArticleFull />
			
			{/* Блок "Услуги" */}
			<ServicesFull />
			
			{/* Формочка для связи */}
			<MainFormFull />
			{/* Контакты */}
			<ContactFull />
		</main>
		<footer className="bg-indigo-900 text-white text-center p-6">
			&copy; 2025 Бизнес-импорт. Все права защищены.
		</footer>
	</div>

	{/* Блок "Отзывы" */}
	{/* <ReviewFull /> */}
}