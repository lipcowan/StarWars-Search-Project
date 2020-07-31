import React, {Component} from 'react';
import Header from './Header';
import PeopleSearch from './PeopleSearch';
import SearchResults from './SearchResults';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			resultingNames: []
		}
	}

	searchCharacter = (name) => {
		this.setState({
			characterName: name
		})
	}

	populateResults = (results) => {
		console.log(results)
		const people = results.map(people => people.name)
		this.setState({
			resultingNames: people
		})
	}



	render(){
		return (
			<>
				<Header/>
				<main className='App'>
					<PeopleSearch 
					searchCharacter={this.searchCharacter}
					popRes={this.populateResults}
					/>
					<SearchResults 
					characters={this.state.resultingNames}
					/>
				</main>
			</>
		);
	}
	
}

export default App;
