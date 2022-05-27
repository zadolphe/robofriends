import React from "react";
import CardList from "./CardList";
import { robots } from "./robots.js";
import SearchBox from "./SearchBox";


class App extends React.Component {
    render() {
        return (
            <div className='tc '>
            <h1>Robofriends</h1>
            <SearchBox />
            <CardList robots={robots} />
            </div>
        )
    }
    
}

export default App;