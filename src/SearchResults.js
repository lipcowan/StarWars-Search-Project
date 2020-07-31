import React, {Component} from 'react';

export default class SearchResults extends Component {

// static defaultProps = {
//     resultingNames: ["Luke"]
// }

    render(){
        const namesArr = this.props.characters
        return (
            <div>
               <ul> {namesArr.map(name => <li key={name}>{name}</li>)}
               </ul>
            </div>
        )
    }
}