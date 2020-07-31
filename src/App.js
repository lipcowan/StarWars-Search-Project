import React, {Component} from 'react';
import Header from './Header';
import PeopleSearch from './PeopleSearch';
import SearchResults from './SearchResults';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			characterName: "Luke Skywalker",
			resultingNames: []
		}
	}

	searchCharacter = (name) => {
		this.setState({
			characterName: name
		})
	}

	populateResults = (results) => {
		results.map(name => {
			this.setState({
				resultingNames: this.state.resultingNames + name
			})
		})
		return results
	}



	render(){
		return (
			<>
				<Header/>
				<main className='App'>
					<PeopleSearch 
					character={this.state.characterName} 
					searchCharacter={this.searchCharacter}
					popRes={this.populateResults}
					/>
					<SearchResults 
					characters={this.state.resultingNames}/>
				</main>
			</>
		);
	}
	
}

export default App;
