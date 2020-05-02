import axios from 'axios';
//importing from axios in order to use the API
const URL = 'https://db.ygoprodeck.com/api/v6/cardinfo.php';

const fetchCards = async (searchTerm = '', attribute = '', type = '', race = '', archetype = '', fromAttack ='', toAttack = '', fromDefense ='', toDefense='', fromLevel = '', toLevel = '', sortBy = '', sortOrder='') => {
  try {
    let changeableUrl = URL;

    changeableUrl = `${URL}?&fname=${searchTerm}`;

    if (type) {
      changeableUrl = changeableUrl.concat(`&type=${type.toLowerCase().replace(' ', '%20')}`);
    }

    if (attribute) {
      changeableUrl = changeableUrl.concat(`&attribute=${attribute}`);
    }
    
    if (race) {
      changeableUrl = changeableUrl.concat(`&race=${race}`);
    }

    if (archetype) {
      changeableUrl = changeableUrl.concat(`&archetype=${archetype}`);
    }

    if (sortBy) {
      changeableUrl = changeableUrl.concat(`&sort=${sortBy}`);
    }

    const { data } = await axios.get(changeableUrl);
    
    const cards = data.map((card) => {
      const strippedCard = { 
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
        };

      return strippedCard;
    });

    const filteredCards = cards
    .filter((card) => fromAttack || toAttack ? (card.properties[0].value >= fromAttack) && (card.properties[0].value <=toAttack) : true)
    .filter((card) => fromDefense || toDefense ? (card.properties[1].value >= fromDefense) && (card.properties[1].value <=toDefense) : true)
    .filter((card) => fromLevel || toLevel ? (card.properties[2].value >= fromLevel) && (card.properties[2].value <= toLevel) : true);

    if(sortOrder === 'asc') {
        filteredCards.reverse();

        const sortedCards = filteredCards.filter((card)=> card.isMonster);
    
        return sortedCards;
    }

    return filteredCards;
  } catch (error) {
    return [];
  }
};

export default fetchCards;

