import Head from 'next/head';
import LoginPage from './(public)/Login/page';

export default function Home() {
	return (
		<>
			<Head>
				<title>Tela de Login</title>
			</Head>
			<main>
				<LoginPage />
			</main>
		</>
	);
}
