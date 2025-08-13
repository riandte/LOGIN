import Image from 'next/image';
import React from 'react';
import jesley from '@/images/profile.jpg';

export default function About() {
	return (
		<section className="py-15 px-10 bg-orange-500 text-center">
			<h2 className="text-3xl font-bold mb-6">Quem sou eu?</h2>

			<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center text-justify">
				<Image src={jesley} alt="Jesley Slayter" width={400} height={400} className="rounded-full" />

				<p className="text-gray-900 leading-relaxed text-2xl md:pl-10 mt-6 md:mt-0">
					Sou Jesley Slayter, Personal Trainer especializado em emagrecimento e qualidade de vida, atendendo iniciantes
					e intermediários. Minha missão é transformar vidas através de treinos personalizados e acompanhamento próximo.
				</p>
			</div>
		</section>
	);
}
