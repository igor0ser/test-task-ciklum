import React, { useState } from 'react';
import { Application } from '../Application/Application';
import styles from './ApplicationTable.module.css';

const COLUMNS = ['Applied', 'Interviewing', 'Hired'];

export const ApplicationTable = ({ initialApplications }) => {
  const [applications, setApplications] = useState(initialApplications.map(
    application => ({ status: COLUMNS[0], ...application })
  ));

  return (
    <section className={styles.wrapper}>
      {COLUMNS.map(column => (
        <div key={column}>
          <h3>{column}</h3>
          {applications.filter(a => a.status === column).map(application => (
            <Application
              key={application.id.value}
              data={application}
            />
          ))}
        </div>
      ))}
    </section>
  );
};
