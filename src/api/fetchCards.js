import axios from 'axios';
const URL = 'https://db.ygoprodeck.com/api/v6/cardinfo.php';

const fetchCards = async ({ searchTerm, type, attribute, race, archetype, fromLevel, toLevel, fromAttack, toAttack, fromDefense, toDefense, sortBy, sortOrder }) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        ...(searchTerm && { fname: searchTerm }),
        ...(sortBy && { sort: sortBy.value }),
        ...(type && { type: type.value }),
        ...(attribute && { attribute: attribute.value }),
        ...(race && { race: race.value }),
        ...(archetype && { archetype: archetype.value }),
      },
    });
    
    const cards = data.map((card) => ({ 
      name: card.name, 
      type: card.type, 
      description: card.desc, 
      image: card.card_images[0].image_url,
      isMonster: card.type.includes('Monster'),
      properties: [
        { label: 'Attack', value: card.atk },
        { label:'Defense', value: card.def },
        { label:'Level', value: card.level },
      ]
    }));

    const filteredCards = cards
      .filter((card) => (fromAttack || toAttack) ? (card.properties[0].value >= fromAttack) && (card.properties[0].value <=toAttack) : true)
      .filter((card) => (fromDefense || toDefense) ? (card.properties[1].value >= fromDefense) && (card.properties[1].value <=toDefense) : true)
      .filter((card) => (fromLevel || toLevel) ? (card.properties[2].value >= fromLevel) && (card.properties[2].value <= toLevel) : true)
      
    if(sortOrder === 'asc') {
      return filteredCards.reverse();
    }

    return filteredCards;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchCards;

