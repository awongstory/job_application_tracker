import './Home.css';
import { useState } from 'react';
import { dadJokes, DadJoke } from '../types/DadJokes';

function getRandomJoke(): DadJoke {
	const index = Math.floor(Math.random() * dadJokes.length);
	return dadJokes[index];
}

export default function Home() {
	const [dadJoke, setDadJokes] = useState<DadJoke>(() => getRandomJoke());

	return (
		<div className="content">
			<div className="header-box">Job Application Tracker</div>
				<div className="home-content">
					{dadJoke.text}
				</div>
		</div>
	)
};