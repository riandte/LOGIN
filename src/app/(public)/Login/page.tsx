'use client';

import { useState } from 'react';
import Button from '../../../components/Button/page';
import Input from '../../../components/Input/page';
import { doLogin } from '../../../services/auth';

export default function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState<any>(null);

	async function handleLogin(e: React.FormEvent) {
		e.preventDefault();
		try {
			const u = await doLogin(username, password);
			setUser(u);
		} catch (err) {
			alert('Login falhou!');
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded-lg bg-white p-8">
				<h1 className="m-6 text-center text-2xl text-gray-800">Welcome back</h1>

				{!user ? (
					<form className="flex flex-col gap-4" onSubmit={handleLogin}>
						<Input
							id="email"
							type="text"
							label="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<Input
							id="senha"
							type="password"
							label="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<p className="text-xs text-blue-500">
							<a href="/forgotpassword">Forgot your password?</a>
						</p>
						<Button type="submit">Sign In</Button>
						<p className="text-xs text-blue-500">
							<a href="/cadastro">Don't have an account?</a>
						</p>
					</form>
				) : (
					<div>
						<p>Bem-vindo, {user.username}!</p>
					</div>
				)}
			</div>
		</div>
	);
}
