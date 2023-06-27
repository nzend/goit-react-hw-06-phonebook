import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';


import { setStatusFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    const filterQuey = evt.target.value;

    dispatch(setStatusFilter(filterQuey));
  };

  return (
    <label className={css.filterLabel}>
      Filter by name:
      <input
        className={css.filterInput}
        type="text"
        onChange={handleFilterChange}
      />
    </label>
  );
};
