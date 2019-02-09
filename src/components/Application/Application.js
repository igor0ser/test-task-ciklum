import React from 'react';
import { Card, Avatar, Icon } from 'antd';
import styles from './Application.module.css';

export const Application = ({ data }) => {
  console.log({ data });
  const {
    name: { title, first, last },
    picture: { thumbnail },
    location: { city },
  } = data;

  return (
    <Card
      className={styles.application}
      actions={[
        <Icon type="caret-left" onClick={() => console.log(12345)}/>,
        <Icon type="caret-right" />,
      ]}
    >
      <Card.Meta
        title={[title, first, last].join(' ')}
        avatar={<Avatar src={thumbnail} />}
        description={city}
      />
    </Card>
  )
};
