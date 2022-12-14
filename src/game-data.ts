import {
  Ego,
  Job,
  Location,
  Todo,
  LocationObject
} from './types';

const egos: Ego[] = [
  { name: 'λνλ¦¬μ', icon: `π©π»βπ¦°` },
  { name: 'κΉμΏκ°', icon: `π§π»βπ¦±` },
  { name: 'μ νλ¦¬', icon: `π¨βπ¦°` },
  { name: 'μκ³ λ₯΄', icon: `π§π½βπ¦³` },
];

const jobs: Job[] = [
  { id: 1, title: 'λ¬΄μ§', pay: 0, location: 1, required: [] },
  { id: 2, title: 'μΊμ¬μ΄', pay: 10, location: 2, required: [], description: 'μΉ΄μ΄ν°μμ λ¬Όκ±΄μ κ³μ°ν©λλ€.' },
  { id: 3, title: 'μ¬κ³ κ΄λ¦¬', pay: 15, location: 2, required: [1], description: 'λ§€λμ μ¬κ³ λ₯Ό κ΄λ¦¬ν©λλ€.' },
];

const vehicles = [
  { name: 'μμ κ±°', icon: 'π²', speed: 30, }
];

const locations: Location[] = [
  { id: 1, name: 'μ§', icon: 'π ', },
  { id: 2, name: 'λ§νΈ24', icon: 'πͺ', },
  { id: 3, name: 'μ§μμκ°μ', icon: 'π’', },
];

const locationObjects: LocationObject[] = [
  { id: 1, location: 1, name: 'λμ₯κ³ ', src: 'emoji-icon-fridge.png', width: 40 },
  { id: 2, location: 1, name: 'μΉ¨λ', icon: 'π' },
  { id: 3, location: 2, name: 'μΌνμΉ΄νΈ', icon: 'π' },
  { id: 5, location: 2, name: 'νΈλμ½νΈ', icon: 'π' },
  { id: 4, location: 3, targetLocation: 2, name: 'λ§νΈ24 κ΅¬μΈ', icon: 'πͺ'},
];

const todoList: Todo[] = [
  { id: 1, title: 'μνμ¬κ³  νμΈνκΈ°' },
  { id: 2, title: 'λ§νΈ μ₯λ³΄κΈ°' },
  { id: 3, title: 'μ§μ₯ κ΅¬νκΈ°' }
];

const groceries = [
  'π', 'π', 'π', 'π', 'π', 'π', 'π«', 'π',
  'π₯', 'π₯¦', 'π₯¬', 'πΆ', 'π₯', 'π§', 'π§', 'π₯', 'π₯', 'π', 'π₯',
  'π§', 'π₯', 'π₯©', 'π₯«', 'π§', 'π°', 'π₯', 'π', 'π£', 'π±', 'π₯',
  'π', 'π©', 'π«', 'πΊ'
];

export {
  egos,
  jobs,
  locations,
  locationObjects,
  vehicles,
  todoList,
  groceries
};