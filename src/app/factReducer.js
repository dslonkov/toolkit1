import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
  data: [
    'прообразом Чубакки стал пёс режиссёра;',
    'актёрам разрешили подобрать любимый цвет для своих световых мечей;',
    'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину;',
    'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу;',
    'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок.',
  ],
  reloadData: [
  'прообразом Чубакки стал пёс режиссёра;',
  'актёрам разрешили подобрать любимый цвет для своих световых мечей;',
  'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину;',
  'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу;',
  'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок.',
],
  value: '',
}

export const showFacts = createAction('SHOW')
export const changeValue = createAction('CHANGE')
export const reloadData = createAction('RELOAD')

export default createReducer(initialState, {
  [showFacts]: function (state, action) {
    state.data = state.data.slice(-state.value)
  },
  [changeValue]: function (state,action) {
    state.value = action.payload
  },
  [reloadData]: function (state, action) {
    state.data = action.payload
  }
})
