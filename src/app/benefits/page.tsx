import React from 'react';

const benefits = [
	'Treinos personalizados para cada objetivo',
	'Acompanhamento próximo pelo WhatsApp',
	'Planos adaptados ao seu nível',
	'Resultados sustentáveis e duradouros',
];

export default function Benefits() {
	return (
		<section className="py-16 px-6 bg-gray-50 text-center">
			<h2 className="text-3xl font-bold mb-8">Benefícios da Consultoria</h2>
			<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
				{benefits.map((benefit, i) => (
					<div key={i} className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
						{benefit}
					</div>
				))}
			</div>
		</section>
	);
}
