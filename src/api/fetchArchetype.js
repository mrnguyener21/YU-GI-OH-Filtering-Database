import axios from 'axios';

const URL = 'https://db.ygoprodeck.com/api/v7/archetypes.php';

const fetchArchetype = async () => {
    const { data } = await axios.get(URL);

    return data.map((archetype) => archetype.archetype_name);
}

export default fetchArchetype;