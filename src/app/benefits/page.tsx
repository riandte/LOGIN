import React from 'react';

const benefits = [
	'Treinos personalizados para cada objetivo',
	'Acompanhamento próximo pelo WhatsApp',
	'Planos adaptados ao seu nível',
	'Resultados sustentáveis e duradouros',
];

export default function Benefits() {
	return (
		
		<section className="py-16 px-6 bg-orange-600 text-center inset-0 bg-gradient-to-b from-gray-950 to-100%">
			<h2 className="text-3xl font-bold my-20 text-gray-200">Benefícios da Consultoria</h2>
			<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
				{benefits.map((benefit, id) => (
					<div key={id} className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
						{benefit}
					</div>
				))}
			</div>
		</section>
	);
}
