import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
//parent feeds state into child component, and child component receives it as state ( unchangeable )


class App extends Component{


    constructor(){
        super()
        //state has the ability to change our app
        //they live in the parent component
        this.state= {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                return response.json();
            })
            .then (users => {
                this.setState({robots:users})
            });
        }
    onSearchChange = (event) => {
        console.log(event.target.value)
        //we always  do this whenever we want to change state
        this.setState({searchfield : event.target.value})
        //because this function is being called in the input div (searchbox), "this" refers to the searchbox and not the App
        //therefore we should use arrow functions (for functions that are not pre built into javascript like render and constructor)
        // const filteredRobots = this.state.robots.filter(robots => {
        //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // })
        // console.log(filteredRobots);
    }

    render () {
        //if we were to destructure, we would use " const {robots,searchfield} = this.state;"
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                    </Scroll>
                </div>
        );
    }
}

export default App;