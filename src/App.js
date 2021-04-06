import './App.scss';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ToDo from './pages/ToDo/ToDo';
import GetUsers from './pages/GetUsers/GetUsers';

function App() {
	return (
		<>
			<Header />
			<div className='wrapper'>
				<Switch>
					<Route path='/react' exact render={() => <Home />} />
					<Route path='/react/ToDo' render={() => <ToDo />} />
					<Route path='/react/getUsers' render={() => <GetUsers />} />
					<Redirect to='/react' />
				</Switch>
			</div>
		</>
	);
}

export default App;