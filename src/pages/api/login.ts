import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		try {
			const response = await fetch('https://dummyjson.com/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(req.body),
			});

			const data = await response.json();
			res.status(response.status).json(data);
		} catch (error) {
			res.status(500).json({ error: 'Erro no servidor' });
		}
	} else {
		res.status(405).json({ error: 'Método não permitido' });
	}
}
