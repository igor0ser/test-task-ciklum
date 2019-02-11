import React, { PureComponent } from 'react';
import { Card, Button, Avatar, Icon } from 'antd';
import styles from './Application.module.css';

export class Application extends PureComponent {
  moveLeft = () => {
    const { moveLeft, data, columnIndex } = this.props;
    moveLeft(data.id.value, columnIndex);
  }

  moveRight = () => {
    console.log("MOVE RIGHT CLICK");
    const { moveRight, data, columnIndex } = this.props;
    moveRight(data.id.value, columnIndex);
  }

  render() {
    const { data, moveLeft, moveRight } = this.props;

    const {
      name: { title, first, last },
      picture: { thumbnail },
      location: { city },
    } = data;

    return (
      <Card
        className={styles.application}
        actions={[
          moveLeft &&
            <Button onClick={this.moveLeft} className={styles.action}>
              <Icon type="caret-left" />
            </Button>,
          moveRight &&
            <Button onClick={this.moveRight} className={styles.action}>
              <Icon type="caret-right" />
            </Button>,
        ]}
      >
        <Card.Meta
          title={[title, first, last].join(' ')}
          avatar={<Avatar src={thumbnail} />}
          description={city}
        />
      </Card>
    )
  }
}
