import React, { Component } from'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import {robots} from './robots';
import './App.css'



class App extends Component {
    constructor(){
        super();
        this.state = {
             robots:[],
             searchfield:''
        }
    }

    // componentDidMount(){
    //     // console.log('CHECK');
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(users => {
    //         this.setState({robots:users})
    //     });
    //     // this.setState({robots:robots})
    // }

   componentDidMount(){
        // console.log('CHECK');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
        // this.setState({robots:robots})
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
        // console.log(event.target.value);

        //console.log(filteredRobots);
    }


    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return (<h1>Loading ....</h1>)
        }else{
            return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchchange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredRobots}/>
            </ErrorBoundry>
            </Scroll>
        </div>
    );
            }
    }
}

export default App;