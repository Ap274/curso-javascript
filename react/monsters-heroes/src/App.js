import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <h1> Monster Heroes </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(event) => {
            this.setState({ searchfield: event.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
