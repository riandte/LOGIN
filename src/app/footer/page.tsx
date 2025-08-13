import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-4 text-center text-sm">
			© {new Date().getFullYear()} Jesley Slayter - Todos os direitos reservados.
		</footer>
	);
}
