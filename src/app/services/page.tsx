import React from 'react';

const services = [
	{ title: 'Treino Personalizado', desc: 'Planos adaptados ao seu objetivo e condicionamento.' },
	{ title: 'Acompanhamento Nutricional', desc: 'Sugestões e acompanhamento para potencializar resultados.' },
	{ title: 'Consultoria Online', desc: 'Treine de onde estiver com meu suporte.' },
];

export default function Services() {
	return (
		<section className="py-16 px-6 bg-white text-center">
			<h2 className="text-3xl font-bold mb-8">Meus Serviços</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{services.map((service, i) => (
					<div key={i} className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
						<h3 className="text-xl font-semibold mb-3">{service.title}</h3>
						<p className="text-gray-600">{service.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
