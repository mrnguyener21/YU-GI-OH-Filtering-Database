import fetchArchetypes from '../api/fetchArchetype.js';

const attributes = [ 'Dark', 'Earth', 'Fire', 'Light', 'Water', 'Wind', 'Divine' ];
const types = [ "Effect Monster", "Flip Effect Monster", "Flip Tuner Effect Monster", "Gemini Monster", "Normal Monster", "Normal Tuner Monster", "Pendulum Effect Monster", "Pendulum Flip Effect Monster", "Pendulum Normal Monster", "Pendulum Tuner Effect Monster", "Ritual Effect Monster", "Ritual Monster", "Skill Card", "Spirit Monster", "Toon Monster", "Tuner Monster", "Union Effect Monster", "Fusion Monster", "Link Monster", "Pendulum Effect Fusion Monster", "Synchro Monster", "Synchro Pendulum Effect Monster", "Synchro Tuner Monster", "XYZ Monster", "XYZ Pendulum Effect Monster" ];
const monsterRaces = ["Aqua", "Beast", "Beast-Warrior", "Creator-God", "Cyberse", "Dinosaur", "Divine-Beast", "Dragon", "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged Beast"];
const spellRaces = ["Normal", "Field", "Equip", "Continuous", "Quick-Play", "Ritual"];
const trapRaces = ["Normal","Continuous","Counter"];

let archetypeOptions = [];
(async () => {
    const archetypes = await fetchArchetypes();
    
    archetypes.forEach((archetype) => {archetypeOptions.push({ value: archetype, label: archetype })});
})()

const monsterOptions = [{ value: '', label: '-' }];
monsterRaces.forEach((race) => {monsterOptions.push({ value: race, label: race })});

const spellOptions = [];
spellRaces.forEach((race) => {spellOptions.push({ value: race, label: race })});

const trapOptions = [];
trapRaces.forEach((race) => {trapOptions.push({ value: race, label: race })});

const sortByOptions = [
    { value: 'atk', label: 'Attack' },
    { value: 'def', label: 'Defense' },
    { value: 'level', label: 'Level' },
]

const sortOrderOptions = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
]

const groupedOptions = [
    {
      label: 'Monster Cards',
      options: monsterOptions,
    },
    {
      label: 'Spell Cards',
      options: spellOptions,
    },
    {
      label: 'Trap Cards',
      options: trapOptions,
    },
];

const attributeOptions = [{ value: '', label: '-' }];
const typeOptions = [{value: '', label: '-'}]

attributes.forEach((attribute) => {attributeOptions.push({ value: attribute, label: attribute })});
types.forEach((type) => {typeOptions.push({ value: type, label: type })});


export default {
  attributeOptions,
  typeOptions,
  monsterOptions,
  spellOptions,
  trapOptions,
  groupedOptions,
  archetypeOptions,
  sortByOptions,
  sortOrderOptions
};
