import React, { Component } from 'react';
import styles from './Calendar.module.scss';
import * as dateFns from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;

    return (
      <article>
        <div className={styles.container}>{dateFns.format(currentDate, 'ww')}</div>
        <button
          onClick={() => {
            this.setState({
              currentDate: dateFns.add(currentDate, {
                years: 1,
              }),
            });
          }}
        >
          year
        </button>

        <button
          onClick={() => {
            this.setState({
              currentDate: dateFns.add(currentDate, {
                months: 1,
              }),
            });
          }}
        >
          month
        </button>

        <button
          onClick={() => {
            this.setState({
              currentDate: dateFns.add(currentDate, {
                days: 1,
              }),
            });
          }}
        >
          day
        </button>

        <button
          onClick={() => {
            this.setState({
              currentDate: dateFns.add(currentDate, {
                weeks: 1,
              }),
            });
          }}
        >
          week
        </button>

        <button
          onClick={() => {
              const dates = []
              for(let i =30; i < 37; ++i) {
                  dates.push(dateFns.parse(`${2020}-${i}`, 'Y-w', new Date()))
              }
            this.setState({
              currentDate: dateFns.add(currentDate, {
                weeks: 1,
              }),
            });
          }}
        >
          week
        </button>
      </article>
    );
  }
}

export default Calendar;
