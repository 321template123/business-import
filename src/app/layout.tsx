import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
// import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Бизнес Import",
  description: 'Профессиональные услуги по импорту товаров и бизнес-решениям. Доступные цены, надёжные партнёры и комплексная поддержка для вашего бизнеса.',
  keywords: 'импорт, бизнес, товары, поставки, Россия',  // Для SEO (опционально)
  openGraph: {
    title: 'Бизнес Import - Экспорт и Импорт Бизнеса',
    description: 'Узнайте о наших услугах по импорту бизнеса: от поставок до консультаций. Свяжитесь с нами сегодня!',
    url: 'http://businessimport.ru',  // Полный URL вашего сайта
    siteName: 'Business Import',
    images: [
      {
        url: 'http://businessimport.ru/assets/og.jpg',  // Загрузите изображение для превью: 1200x630 px, с текстом и лого. Можно сгенерировать на https://og-image.vercel.app/
        width: 1200,  // Рекомендуется
        height: 630,
        alt: 'Business Import Logo and Services',  // Альтернативный текст для картинки
      },
    ],
    type: 'website',
    locale: 'ru_RU',  // Для русской аудитории
  },
  twitter: {
    card: 'summary_large_image',  // Тип карточки для Twitter/X
    title: 'Бизнес Import - Ваши Импортные Решения',
    description: 'Комплексные услуги по импорту для бизнеса в России.',
    images: ['http://businessimport.ru/assets/og.jpg'],  // То же изображение
  },
  // Дополнительно для других платформ
  other: {  // Можно добавить вручную через Head или здесь
    'article:author': 'Бизнес Import',
  },
	icons: "/assets/logo/LogoMini.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<Head>
				<title>Бизнес Import</title>
				<meta name="description" content="Надёжные услуги импорта для вашего бизнеса" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
				{/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
