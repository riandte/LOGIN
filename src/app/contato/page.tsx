import React from 'react';
import { BotaoWhatspp } from '@/components/BotaoWpp';

export default function Contact() {
	return (
		<section id="contato" className="py-16 px-6 bg-gray-900 text-white text-center">
			<h2 className="text-3xl font-bold mb-6">Vamos Começar?</h2>
			<p className="mb-6">Fale comigo agora e dê o primeiro passo para sua transformação.</p>
			<BotaoWhatspp />
		</section>
	);
}
