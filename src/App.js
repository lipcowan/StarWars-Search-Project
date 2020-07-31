import React, {Component} from 'react';
import Header from './Header';
import PeopleSearch from './PeopleSearch';
import SearchResults from './SearchResults';

class App extends Component {

	render(){
		return (
			<>
				<Header/>
				<main className='App'>
					<PeopleSearch/>
					<SearchResults/>
				</main>
			</>
		);
	}
	
}

export default App;
