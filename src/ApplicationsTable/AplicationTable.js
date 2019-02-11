import React, { useState } from 'react';
import { Columns } from './Columns/Columns';
import { Filter } from './Filter/Filter';

export const ApplicationTable = ({ initialApplications }) => {
  const [nameQuery, onNameChange] = useState('');
  const [cityQuery, onCityChange] = useState('');

  const filterFn = ({ name: { first, last }, location: { city } }) =>
    `${first} ${last}`.includes(nameQuery) &&
    city.includes(cityQuery)

  return (
    <>
      <Filter
        city={cityQuery}
        onCityChange={onCityChange}
        name={nameQuery}
        onNameChange={onNameChange}
      />
      <Columns
        initialApplications={initialApplications}
        filterFn={filterFn}
      />
    </>
  )
}