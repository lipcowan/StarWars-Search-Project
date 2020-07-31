import React, {Component} from 'react';

export default class PeopleSearch extends Component {


    onSubmit = e => {
        e.preventDefault();
        const { characterName } = e.target;
        const base_url = "https://swapi-thinkful.herokuapp.com/api/people/?search=";
        const name = characterName.value;
        console.log(name)
        fetch(`${base_url}${name}`)
        .then(resp => {
            if(!resp.ok)
                return resp.json().then(e => Promise.reject(e))
            return resp.json()
        })
        .then(data => this.props.popRes(data.results))
        .catch(err => console.error(err))
    }



    render(){
        return (
            <form id="characterSearch" onSubmit={this.onSubmit} >
                <label>
                    <span>Search for any character below: </span>
                    <input type="text" name="characterName" defaultValue="Luke" required/>
                </label>
                <input type="submit" value="search"/>
            </form>
        )
    }
}