import Image from 'next/image';
import React from 'react';
import antes1 from '@/images/antes1.jpg';
import antes2 from '@/images/antes2.jpg';
import depois1 from '@/images/depois1.jpg';
import depois2 from '@/images/depois2.jpg';

export default function Results() {
	return (
		<section className="py-16 px-6 bg-gray-900 text-center inset-0 bg-gradient-to-b from-orange-600">
			<h2 className="text-3xl font-bold mb-6 text-gray-50">Resultados — Antes e Depois</h2>
			<p className="mb-8 text-gray-200 font-semibold">Confira alguns resultados de alunos que seguiram o programa.</p>
			<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
				<div>
					<p className="mt-2 font-semibold text-gray-100">Antes</p>
					<Image 
						src={antes1} 
						alt="Antes" 
						className="rounded-lg shadow-md " />
				</div>
				<div>
					<p className="mt-2 font-semibold text-gray-100">Depois</p>
					<Image 
						src={depois1} 
						alt="Depois" 
						className="rounded-lg shadow-md" />
				</div>
				<div>
					<p className="mt-2 font-semibold text-gray-50">Antes</p>
					<Image 
						src={antes2}
						alt="Antes"
						className="rounded-lg shadow-md" />
				</div>
				<div>
					<p className="mt-2 font-semibold text-gray-50">Depois</p>
					<Image
						src={depois2}
						alt="Depois"
						className="rounded-lg shadow-md" />
				</div>
			</div>
		</section>
	);
}
