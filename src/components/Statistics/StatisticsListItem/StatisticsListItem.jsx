//модули
import PropTypes from 'prop-types';

//стили
import styles from './StatisticsListItem.module.css';

const StatisticsListItem = ({ name, value }) => {
  const valueCorrection = name === 'positivePercentage' ? `${value} %` : value;
  return (
    <li className={styles.StatisticsListItem}>
      {name}: {valueCorrection}
    </li>
  );
};

StatisticsListItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};

export default StatisticsListItem;
