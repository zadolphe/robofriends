import React from "react";
import CardList from "../components/CardList";
//import { robots } from "./robots.js";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";



class App extends React.Component {
    constructor() {
        console.log('state constructor');
        super()
        this.state = {
            robots: [], 
            searchfield: ''
        }
    }

    componentDidMount(){
        console.log("mount");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        //we are getting users from the web page link fetch and update state
    .then(users => this.setState({ robots: users}) 
    );
}

    //function for changing state
    onSearchChange = (event) => {
        //do this to change state
        this.setState({ searchfield: event.target.value })        
    }
    render() {
        console.log('render');
        //allows you to remove this.state in front of every call for robots and searchfield
        const { robots, searchfield } = this.state;
        //change state 
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //use ternerary operator instead of if statement
        return !robots.length ? <h1>Loading robots</h1> : 

        (
            <div className='tc '>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
            </div>
        );
    
        }
    }

export default App;