import React, {Component} from 'react';

export default class PeopleSearch extends Component {
    render(){
        return (
            <form id="characterSearch">
                <label>
                    <span>Search for any character below: </span>
                    <input type="text" name="characterName" defaultValue="Luke"/>
                </label>
                <input type="submit" value="search"/>
            </form>
        )
    }
}