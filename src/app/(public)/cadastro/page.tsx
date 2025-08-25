import Button from '../../../components/Button/page';
import Input from '../../../components/Input/page';

export default function LoginPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded-lg bg-white p-8">
				<h1 className="m-6 text-center text-2xl text-gray-800">Welcome back</h1>

				<form className="flex flex-col gap-4">
					<Input id="email" type="text" label="Username" />
					<Input id="senha" type="password" label="Password" />
					<Button type="submit">Sign In</Button>
					<p className="text-xs text-blue-500">
						<a href="/login">Alread have an account?</a>
					</p>
				</form>
			</div>
		</div>
	);
}
