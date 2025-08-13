import Head from 'next/head';
import About from './about/page';
import Benefits from './benefits/page';
import Contact from './contato/page';
import Footer from './footer/page';
import Hero from './hero/page';
import Results from './results/page';
import WhatsAppButton from './WhatsAppButton.tsx/page';

export default function Home() {
	return (
		<>
			<Head>
				<title>Jesley Slayter | Personal Trainer</title>
				<meta
					name="description"
					content="Consultoria de treino e nutrição personalizada para emagrecimento e qualidade de vida."
				/>
			</Head>
			<main>
				<Hero />
				<About />
				<Benefits />
				<Results />
				<Contact />
				<Footer />
				<WhatsAppButton />
			</main>
		</>
	);
}
