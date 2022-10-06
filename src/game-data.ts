import {
  Ego,
  Job,
  Location,
  Todo,
  LocationObject
} from './types';

const egos: Ego[] = [
  { name: '나탈리아', icon: `👩🏻‍🦰` },
  { name: '김삿갓', icon: `🧑🏻‍🦱` },
  { name: '제프리', icon: `👨‍🦰` },
  { name: '아고르', icon: `🧑🏽‍🦳` },
];

const jobs: Job[] = [
  { id: 1, title: '무직', pay: 0, location: 1, required: [] },
  { id: 2, title: '캐쉬어', pay: 10, location: 2, required: [], description: '카운터에서 물건을 계산합니다.' },
  { id: 3, title: '재고관리', pay: 15, location: 2, required: [1], description: '매대의 재고를 관리합니다.' },
];

const vehicles = [
  { name: '자전거', icon: '🚲', speed: 30, }
];

const locations: Location[] = [
  { id: 1, name: '집', icon: '🏠', },
  { id: 2, name: '마트24', icon: '🏪', },
  { id: 3, name: '직업소개소', icon: '🏢', },
];

const locationObjects: LocationObject[] = [
  { id: 1, location: 1, name: '냉장고', src: 'emoji-icon-fridge.png', width: 40 },
  { id: 2, location: 1, name: '침대', icon: '🛏' },
  { id: 3, location: 2, name: '쇼핑카트', icon: '🛒' },
  { id: 5, location: 2, name: '푸드코트', icon: '🍔' },
  { id: 4, location: 3, targetLocation: 2, name: '마트24 구인', icon: '🏪'},
];

const todoList: Todo[] = [
  { id: 1, title: '식품재고 확인하기' },
  { id: 2, title: '마트 장보기' },
  { id: 3, title: '직장 구하기' }
];

const groceries = [
  '🍏', '🍎', '🍊', '🍌', '🍇', '🍓', '🫐', '🍅',
  '🥑', '🥦', '🥬', '🌶', '🥕', '🧄', '🧅', '🥔', '🥐', '🍞', '🥖',
  '🧀', '🥚', '🥩', '🥫', '🧃', '🍰', '🥙', '🍖', '🍣', '🍱', '🥟',
  '🍙', '🍩', '🫘', '🍺'
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