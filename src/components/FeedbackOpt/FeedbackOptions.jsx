//модули
import PropTypes from 'prop-types';

//компоненты
import Section from '../Section';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Section title={'Please Leave feedback'}>
      <div className="FeedbackTabs">
        <button
          id="good"
          className="FeedbackButton"
          type="button"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          id="neutral"
          className="FeedbackButton"
          type="button"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          id="bad"
          className="FeedbackButton"
          type="button"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
