import React from 'react';
import Cards from './components/Cards/Cards';

import styles from './App.module.css';

import fetchCards from './api/fetchCards.js';

class App extends React.Component {
  state = {
    cards: [],
  }

  async componentDidMount() {
    const data = await fetchCards(); 
    
    this.setState({ cards: data }); 
  }
  
  render() {
    const{ cards } = this.state;

    return (
      <div>
        { cards.length === 0 ? null : <Cards cards={cards} /> }
      </div>
    )
  }
}

export default App;