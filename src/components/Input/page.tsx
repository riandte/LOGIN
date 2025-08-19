interface InputProps {
	label: string;
	id: string;
	type: string;
}

export default function Input({ label, id, type = 'text' }: InputProps) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="text-sm text-gray-700">
				{label}
			</label>
			<input
				id={id}
				type={type}
				className="rounded-lg border border-gray-300 px-3 py-2 text-sm 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
			/>
		</div>
	);
}
