import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, cards, icon} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div className={styles.card}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*<div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>*/}
      </section>
    );
  }
}

export default Column;