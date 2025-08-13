'use client';

import { motion } from 'framer-motion';
import { BotaoWhatspp } from '@/components/BotaoWpp';

export default function Hero() {
	return (
		<motion.section
			className="relative bg-[url('/images/bghero.jpg')] bg-cover bg-center bg-no-repeat text-white py-70 px-6 text-center"
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			aria-label="Seção principal de destaque"
		>
			<div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-transparent to-transparent"></div>

			<div className="relative">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">Personal Jesley Slayter</h1>
				<p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
					Faço você conquistar seu corpo tão sonhado em pouco tempo, com resultados definitivos e sem uso de
					medicamentos.
				</p>
				<BotaoWhatspp />
			</div>
		</motion.section>
	);
}
