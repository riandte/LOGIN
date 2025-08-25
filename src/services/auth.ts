export async function doLogin(username: string, password: string) {
	const res = await fetch('/api/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});

	if (!res.ok) throw new Error('Login falhou');

	const data = await res.json();
	localStorage.setItem('accessToken', data.accessToken);
	localStorage.setItem('refreshToken', data.refreshToken);
	localStorage.setItem('user', JSON.stringify(data.user));

	return data.user;
}
