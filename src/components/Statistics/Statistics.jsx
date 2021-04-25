//модули
import PropTypes from 'prop-types';

//компоненты
import Section from '../Section';
import StatisticsListItem from '../Statistics/StatisticsListItem';
import NotificationMessage from '../NotificationMessage';

//стили
import styles from './Statistics.module.css';

const Statistics = statisticsItems => {
  const StatListClasses = [styles.StatisticsList, 'List'].join(' ');
  const statisticsItemsArr = Object.entries(statisticsItems);
  console.log(statisticsItemsArr);
  const isFeedbackExist = Object.values(statisticsItems).find(
    value => value !== 0,
  );
  return (
    <Section title={'Statistics'}>
      {!!isFeedbackExist ? (
        <ul className={StatListClasses}>
          {statisticsItemsArr.map(item => {
            return (
              <StatisticsListItem
                key={item[0]}
                name={item[0]}
                value={item[1]}
              />
            );
          })}
        </ul>
      ) : (
        <NotificationMessage message="No feedback given" />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  statisticsItems: PropTypes.object,
};

export default Statistics;
