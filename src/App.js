import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";


class App extends React.Component{


    constructor(){
        super();
        this.state = {robots: [], searchfield: ""};
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});

    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => { 
            return response.json();
        })
        .then((users) =>{
            console.log({users});
            this.setState({robots: users});
        });
    }

    render(){
        
            const filteringRobots = this.state.robots.filter((robot) => {

                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            });
            console.log(filteringRobots);
        return (
            <div className="tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteringRobots}/>
                </Scroll>
            </div>
        );
    }
};

export default App;