import moment from 'moment'
import router from '@/router'
import _ from 'lodash'

import { createStore } from 'vuex'
import { Ego } from '@/types/index';
import { locations, jobs, vehicles, todoList } from '@/game-data';

export default createStore({
  state: {
    ego: null as Ego | null,
    now: moment('2022-09-01 07:00'),
    here: locations[0],
    cash: 100,
    job: jobs[0],
    vehicle: vehicles[0],
    todoList,
    todoChecked: [] as number[],
    foodStock: [] as string[],
    calory: 100,
    energy: 100,

    // 저장 필요없는 state
    movingModal: false,
    messageModal: {
      open: false,
      icon: '',
      title: '',
      message: '',
    },
  },
  getters: {
    state: state => state,
    ego: state => state.ego,
    now: state => state.now,
    here: state => state.here,
    cash: state => state.cash,
    job: state => state.job,
    vehicle: state => state.vehicle,
    todoList: state => state.todoList,
    todoChecked: state => state.todoChecked,
    foodStock: state => state.foodStock,
    calory: state => state.calory,
    energy: state => state.energy,
    movingModal: state => state.movingModal,
    messageModal: state => state.messageModal,
  },
  mutations: {
    setState(state, payload) {
      state.ego = payload.ego;
      state.now = payload.now;
      state.here = payload.here;
      state.cash = payload.cash;
      state.job = payload.job;
      state.vehicle = payload.vehicle;
      state.todoList = payload.todoList;
      state.todoChecked = payload.todoChecked;
      state.foodStock = payload.foodStock;
      state.calory = payload.calory;
      state.energy = payload.energy;
    },
    setEgo(state, ego) { state.ego = ego; },
    setNow(state, now) { state.now = now; },
    setHere(state, here) { state.here = here; },
    setCash(state, cash) { state.cash = cash; },
    setJob(state, job) { state.job = job; },
    setVehicle(state, vehicle) { state.vehicle = vehicle; },
    setTodoList(state, todoList) { state.todoList = todoList; },
    setTodoChecked(state, todoId) { state.todoChecked.push(todoId); },
    setFoodStock(state, foods) { state.foodStock = foods; },
    setCalory(state, calory) { state.calory = calory; },
    setEnergy(state, energy) { state.energy = energy; },
    setMovingModal(state, opened) { state.movingModal = opened; },
    setMessageModal(state, payload) { state.messageModal = payload; },
  },
  actions: {
    saveGame({state}) {
      const saveData = {
        ...state,
        now: moment(state.now).format('YYYY-MM-DD HH:mm')
      }

      localStorage.setItem('state', JSON.stringify(saveData));
    },
    loadGame({commit}) {
      const savedState = localStorage.getItem('state');

      if (savedState) {
        const state = JSON.parse(savedState);
        state.now = moment(state.now);
        commit('setState', state);
      }
    },
    restart() {
      localStorage.removeItem('state');
      router.go(0)
    },
    goLocation({commit, state, dispatch}, location) {
      if (location.id !== state.here.id) {
        commit('setMovingModal', true);
        setTimeout(() => {
          commit('setHere', location);
          dispatch('spendTime', 40);
        }, 2200);
      }
    },
    spendTime({commit, state, dispatch}, minutes) {
      commit('setNow', moment(state.now).add(minutes, 'minutes'));

      dispatch('spendCalory', minutes * 0.2);
      dispatch('spendEnergy', minutes * 0.1);
      dispatch('saveGame');
    },
    checkTodo({commit, state, dispatch}, todoId) {
      if (!state.todoChecked.includes(todoId)) {
        commit('setTodoChecked', todoId);
        dispatch('saveGame');
      }
    },
    spendCalory({commit, state}, spend) {
      const calory = state.calory - spend;
      commit('setCalory', calory >= 0 ? calory : 0);
    },
    chargeCalory({commit, state}, spend) {
      const calory = state.calory + spend;
      commit('setCalory', calory <= 100 ? calory : 100);
    },
    spendEnergy({commit, state}, spend) {
      const energy = state.energy - spend;
      commit('setEnergy', energy >= 0 ? energy : 0);
    },
    chargeEnergy({commit, state}, spend) {
      const energy = state.energy + spend;
      commit('setEnergy', energy <= 100 ? energy : 100);
    },
    cook({commit, dispatch}, foodStock) {
      commit('setFoodStock', foodStock);
      dispatch('spendTime', 30);
      dispatch('chargeCalory', 100);
      dispatch('saveGame');
      commit('setMessageModal', {
        open: true,
        icon: '🍽',
        message: '맛있게 먹었습니다.',
      });
    },
    addFood({commit, state, dispatch}, foods) {
      const foodStock = _.concat(state.foodStock, foods);
      commit('setFoodStock', foodStock);
      dispatch('saveGame');
    },
    spendCash({commit, state}, spend) {
      const cash = state.cash - spend;
      commit('setCash', cash);
    },
    addCash({commit, state}, add) {
      const cash = state.cash + add;
      commit('setCash', cash);
    },
    sleep({state, dispatch}) {
      const minutesToSleep = Math.round((100 - state.energy) * 4.2);
      dispatch('spendTime', minutesToSleep);
      dispatch('chargeEnergy', 100);
      dispatch('saveGame');
    },
    getJob({commit, dispatch}, jobId) {
      const job = _.find(jobs, { id: jobId });

      if(job) {
        commit('setJob', job);
        commit('setMessageModal', {
          open: true,
          icon: '👏🏼',
          message: `짝짝짝 ${job.title} 직업을 얻었습니다.`,
        });
      }

      dispatch('saveGame');
    },
    work({state, commit, dispatch}) {
      const job = state.job;
      dispatch('spendTime', 60);
      dispatch('addCash', job.pay);
      dispatch('saveGame');
      commit('setMessageModal', {
        open: true,
        icon: '💵',
        message: `시급 $${job.pay}을 받았습니다.`,
      });
    }
  },
  modules: {
  }
})
