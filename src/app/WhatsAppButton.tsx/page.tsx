import React from 'react';
import Image from 'next/image';
import Wpplogo from '@/images/wpplogo.svg'

export default function WhatsAppButton() {
	return (
		<a
			href="https://wa.me/5585988575122"
			target="_blank"
			rel="noopener noreferrer"
			className="h-20 w-20 fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
			aria-label="Falar no WhatsApp"
		>
			<Image
				src={Wpplogo}
				alt='Whatsapp logo'
			/>
		</a>
	);
}
