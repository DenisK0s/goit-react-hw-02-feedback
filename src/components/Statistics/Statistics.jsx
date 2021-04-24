//модули
import PropTypes from 'prop-types';

//компоненты
import Section from '../Section';

//стили
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, totat, positivePercentage }) => {
  const StatListClasses = [styles.StatisticsList, 'List'].join(' ');
  return (
    <Section title={'Statistics'}>
      <ul className={StatListClasses}>
        <li className={styles.StatisticsListItem}>Good: {good}</li>
        <li className={styles.StatisticsListItem}>Neutral: {neutral}</li>
        <li className={styles.StatisticsListItem}>Bad: {bad}</li>
        <li className={styles.StatisticsListItem}>Total: {totat}</li>
        <li className={styles.StatisticsListItem}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totat: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
