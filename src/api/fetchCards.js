import axios from 'axios';

const URL = 'https://db.ygoprodeck.com/api/v6/cardinfo.php';

const fetchCards = async () => {
  try {
    const response = await axios.get(URL);
  
    const cards = response.data.sort(() => 0.5 - Math.random()).slice(0, 100).map((card) => {
      const strippedCard = {
        name: card.name,
        type: card.type,
        description: card.desc,
        image: card.card_images[0].image_url,
      }
      
      return strippedCard;
    });

    return cards;
  } catch (error) {
    console.log('ERROR', error);
  }
}

export default fetchCards;

