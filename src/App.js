import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Grid from './Components/Grid/Grid';
import Paginator from './Components/Paginator/Paginator';
import SearchBox from './Components/SearchBox/SearchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPages: 1,
      currentPage: 1,
      isLoading: false,
      searchParam: "",
      characters: []
    }
  }

  onSubmitSearch = (searchKey) => {
    console.log(searchKey);
    this.setState({
      searchParam: searchKey
    });
  }

  fetchCharacters = async () => {

    try {
      this.setState({ isLoading: true })

      const url = new URL("https://rickandmortyapi.com/api/character/");
      
      const params = {
        page: this.state.currentPage,
        name: this.state.searchParam
      }

      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
      });

      const response = await fetch(url);
      const json = await response.json();
      this.setState({ 
        characters: json.results,
        totalPages: json.info.pages
      })
    } catch (e) { }
    finally {
      this.setState({ isLoading: false })
    }
  }

  onPaginatorChange = (nextPage) => {
    this.setState({currentPage: nextPage});
  } 

  componentDidMount = () => {
    this.fetchCharacters();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.currentPage !== this.state.currentPage || prevState.searchParam !== this.state.searchParam){
      this.fetchCharacters();
    }
  };

  render() {

    const { characters, isLoading, currentPage, totalPages } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBox updateFetch={this.onSubmitSearch}/>
        <Grid characters={characters} isLoading={isLoading} />
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={this.onPaginatorChange}
        />
      </div>
    );
  }
}

export default App;
