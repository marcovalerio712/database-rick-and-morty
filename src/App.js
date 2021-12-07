import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Grid from './Components/Grid/Grid';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      characters: []
    }
  }

  fetchCharacters = async () => {

    try {
      this.setState({ isLoading: true })
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      this.setState({characters: json.results})
    } catch (e) {} 
    finally{
      this.setState({ isLoading: false })
    }
  }

  componentDidMount = () => {
    this.fetchCharacters();
  }

  render() {
    const {characters, isLoading} = this.state;
    return (
      <div className="App">
        <Header />
        <Grid characters={characters} isLoading={isLoading}/>
      </div>
    );
  }
}

export default App;
