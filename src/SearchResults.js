import React, {Component} from 'react';

export default class SearchResults extends Component {

// static defaultProps = {
//     resultingNames: ["Luke"]
// }

    render(){
        const namesArr = this.props.characters
        return (
            <div>
                {namesArr.map(name => <p key={name}>{name}</p>)}
            </div>
        )
    }
}