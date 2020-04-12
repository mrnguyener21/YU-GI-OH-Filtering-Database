import React from 'react';
import Cards from './components/Cards/Cards';
import Search from './components/Search/SearchComponent';
import styles from './App.module.css';

import fetchCards from './api/fetchCards.js';

class App extends React.Component {
  state = {
    cards: [],
  }

  async componentDidMount() {
    const data = await fetchCards(); //we import the data from fetchCards but we put it within an async component so that the rest of the site can load first

    this.setState({ cards: data });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className={styles.container}>
        <Search />
        { cards.length === 0 ? null : <Cards cards={cards} /> }
        //this is done so while the the data from the api is being loaded nothing is shown and the site won't be affect
      </div>
    );
  }
}

export default App;
