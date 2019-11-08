import React from 'react'
import './App.css'

import Header from './components/Header'
import FavoriteDogs from './components/FavoriteDogs'
import SearchBar from './components/SearchBar'
import AdoptableDogs from './components/AdoptableDogs'
import AddDogForm from './components/AddDogForm'

const BASE_URL = `https://dogs-backend.herokuapp.com/dogs`

class App extends React.Component {
  state = {
    adoptableDogs: [],
    favoriteDogs: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(adoptableDogs => this.setState({ adoptableDogs }))
  }

  addDog = (dog) => {
    console.log("add dog clicked", dog)
    this.setState({ favoriteDogs: [...this.state.favoriteDogs, dog] })
  }

  render() {
    console.log("favrote dogs in state", this.state.favoriteDogs)
    return (
      <div className="App">
        <Header />
        <FavoriteDogs />
        <SearchBar />
        <AdoptableDogs addDog={this.addDog} adoptableDogs={this.state.adoptableDogs} />
        <AddDogForm />
      </div>
    );
  }
}

export default App;
