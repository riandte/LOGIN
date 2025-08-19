interface ButtonProps {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, type = 'button' }: ButtonProps) {
	return (
		<button type={type} className="rounded-md bg-blue-600 h-10 px-4 text-white hover:bg-blue-700 transition-colors">
			{children}
		</button>
	);
}
