import React from 'react'
import AddMovieForm from './AddMovieForm'
import SearchForm from './SearchForm'
import { Button } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'


export default class NavBar extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            displayForm: 0
        }
    }

handleSwitch = () => {
       switch(this.state.displayForm){
        case 1: return <AddMovieForm handleForm = {this.props.handleForm} /> 
        case 2: return <SearchForm handleSearch = {this.props.handleSearch}/>
      }
}
handleToggle = () =>{
    this.setState( prev => { return{ displayForm: (prev.displayForm+1)%3}})
}
    render(){
        return (
            <div className="ui inverted teal menu">
                <Button onClick={this.handleToggle}primary>Toggle Forms</Button>
                {this.handleSwitch()}
            </div>
        )
    }

}