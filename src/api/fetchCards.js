import axios from 'axios';
//importing from axios in order to use the API
const URL = 'https://db.ygoprodeck.com/api/v6/cardinfo.php';
//api location
const fetchCards = async () => {
  try {
    const response = await axios.get(URL);

    const cards = response.data.sort(() => 0.5 - Math.random()).slice(0, 100).map((card) => {
      const strippedCard = {
        name: card.name,
        type: card.type,
        description: card.desc,
        image: card.card_images[0].image_url,
        //the properties are pulling their value from api and choosing which data set to correspond it to. so the propertie name is pulling from card(which is the first 100 of the api's data) and pulling the name object from each of the arrrays the card variable is pulling
      };

      return strippedCard;
    });

    return cards;
  } catch (error) {
    return error;
  }
  //above is a try and return method where we try to grab what we want from the api and catch for if we aren't succesful with it
};

export default fetchCards;

