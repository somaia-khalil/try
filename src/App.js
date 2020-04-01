import React from 'react';
import NavBar from './NavBar'
import DisplayMovies from './DisplayMovies'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      movieList: props.MovieList,
      movieFilter: "",
    }
  }

  handleForm = (event) => {
    event.preventDefault()
   let  movie = {
      name: event.target[0].value,
      year: event.target[1].value,
      poster: event.target[2].value,
      description: event.target[3].value
    }
    this.setState(prev => { return {
      ...prev,
      movieList: [...prev.movieList ,  movie]
    }})
  }

  handleSearch = (event) => {
    event.preventDefault()
    let myfilter = event.target[0].value
    this.setState(prev => {return {
      ...prev,
      movieFilter: myfilter
    }})

  }


  render (){
  return (
    <div className="body" >
      
       <NavBar handleForm = {this.handleForm} handleSearch ={this.handleSearch} />
       <DisplayMovies MovieList = {this.state.movieList} movieFilter={this.state.movieFilter}/>
       

    </div>
  )
 }
}

export default App;



