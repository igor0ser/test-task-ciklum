import React, { useCallback } from 'react';
import { Input } from 'antd';
import styles from './Filter.module.css';

export const Filter = ({ name, onNameChange, city, onCityChange }) => {

  const handleNameChange = useCallback((e) => onNameChange(e.target.value), []);
  const handleCityChange = useCallback((e) => onCityChange(e.target.value), []);

  return (
    <section className={styles.filter}>
      <Input
        addonBefore="Name"
        onChange={handleNameChange}
        value={name}
      />
      <Input
        addonBefore="City"
        onChange={handleCityChange}
        value={city}
      />
    </section>
  );
}
