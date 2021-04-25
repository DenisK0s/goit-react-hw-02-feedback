//модули
import PropTypes from 'prop-types';

//стили
import styles from './FeedbackOptionButton.module.css';

const FeedbackOptionButton = ({ optionName, optionHandler }) => {
  const feedbackOptionButtonClasses = ['Button', styles.FeedbackButton].join(
    ' ',
  );
  return (
    <button
      key={optionName}
      id={optionName}
      className={feedbackOptionButtonClasses}
      type="button"
      onClick={optionHandler}
    >
      {optionName}
    </button>
  );
};

FeedbackOptionButton.propTypes = {
  optionName: PropTypes.string,
  optionHandler: PropTypes.func,
};

export default FeedbackOptionButton;
