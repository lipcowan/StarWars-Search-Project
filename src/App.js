import React, {Component} from 'react';
import Header from './Header';
import PeopleSearch from './PeopleSearch';
import SearchResults from './SearchResults';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			characterName: "Luke Skywalker"
		}
	}

	render(){
		return (
			<>
				<Header/>
				<main className='App'>
					<PeopleSearch character={this.state.characterName}/>
					<SearchResults character={this.state.characterName}/>
				</main>
			</>
		);
	}
	
}

export default App;
