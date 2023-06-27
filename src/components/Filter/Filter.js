import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ filter, onChangefilter }) => {
  return (
    <label className={css.filterLabel}>
      Filter by name:
      <input
        className={css.filterInput}
        type="text"
        onChange={onChangefilter}
        value={filter}
      />
    </label>
  );
};
