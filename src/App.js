import './App.css';
import About from './components/About';
import Detail from './components/Detail';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from './components/Contact';
import Menu from './components/Menu';

function App() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="App">
			<Router>
				<About />
				<Detail />
				<Skills />
				<Projects />
				<Contact />
				<Menu />
			</Router>
		</div>
	);
}

export default App;
