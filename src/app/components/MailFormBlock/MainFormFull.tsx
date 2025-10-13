import { EnvelopeIcon, PaperAirplaneIcon, UserIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const MainFormFull = () => {

	const [name, setName] = useState<string>()
	const [mail, setMail] = useState<string>()
	const [comt, setcomt] = useState<string>()

	const [showAnswer, setShowAnswer] = useState<boolean>(true)

	const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const form = new FormData()

		if(!mail || !name || !comt){
			return
		}

		form.append("email",mail)
		form.append("fio",name)
		form.append("message",comt)
		setShowAnswer(true)

		axios.post(`http://businessimport.ru:8080/api/send-email`,form).then(()=>setShowAnswer(true))
	}

	useEffect(() => {
		const timer = setTimeout(()=>{
			setShowAnswer(false)},5000)
		return ()=>{clearTimeout(timer)}
	},[showAnswer])

	return <section id="contact-form" className="pb-20 bg-gray-100 flex justify-center">
		<div className="container p-8 py-20 flex flex-col justify-center">
			<h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Оставить заявку</h2>
			<form className="max-w-lg mx-auto bg-white p-10 rounded-xl shadow-2xl space-y-6 w-full md:min-w-[600px]" onSubmit={sendEmail}>
				<div className="flex items-center space-x-4 border-b border-gray-200 py-2">
					<UserIcon className="h-6 w-6 text-gray-400" />
					<input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="name" placeholder="Ваше имя" className="flex-1 block w-full outline-none text-gray-700" required />
				</div>
				<div className="flex items-center space-x-4 border-b border-gray-200 py-2">
					<EnvelopeIcon className="h-6 w-6 text-gray-400" />
					<input value={mail} onChange={(e)=>setMail(e.target.value)} type="email" id="email" placeholder="Электронная почта" className="flex-1 block w-full outline-none text-gray-700" required />
				</div>
				<div>
					<label htmlFor="message" className="sr-only">Сообщение</label>
					<textarea value={comt} onChange={(e)=>setcomt(e.target.value)} id="message" rows={4} placeholder="Ваше сообщение..." className="mt-1 block w-full border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500 transition-colors" required></textarea>
				</div>
				<button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex justify-center items-center space-x-2">
					<span>Отправить заявку</span>
					<PaperAirplaneIcon className="h-5 w-5" />
				</button>
				{showAnswer && <>
					<h4 className='text-green-700 font-bold text-center'>Ваша заявка принята!</h4>
					<h4 className='text-green-700 font-bold text-center'>Ожидайте ответа от консультанта</h4>
				</>}
			</form>
		</div>
	</section>
}
