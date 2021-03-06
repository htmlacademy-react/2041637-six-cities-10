import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('main/changeCity', (city) => ({
  payload: {
    currentCity: city,
  }
}));

export const changeSorting = createAction('main/changeŠ”urrentSorting', (sorting) => ({
  payload: {
    currentSorting: sorting,
  }
}));
