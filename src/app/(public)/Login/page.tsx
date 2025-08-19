import Button from '../../../components/Button/page';
import Input from '../../../components/Input/page';

export default function LoginPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded-lg bg-white p-8">
				<h1 className="m-6 text-center text-2xl text-gray-800">Login</h1>

				<form className="flex flex-col gap-4">
					<Input id="email" type="email" label="E-mail" />
					<Input id="senha" type="password" label="Senha" />
					<Button type="submit">Entrar</Button>
				</form>
			</div>
		</div>
	);
}
