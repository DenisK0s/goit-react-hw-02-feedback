//модули
import PropTypes from 'prop-types';

//компоненты
import Section from '../Section';
import FeedbackOptionButton from './FeedbackOptionButton';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title={'Please Leave feedback'}>
      <div className="FeedbackTabs">
        {options.map(option => {
          return (
            <FeedbackOptionButton
              key={option}
              optionName={option}
              optionHandler={onLeaveFeedback}
            />
          );
        })}
      </div>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

export default FeedbackOptions;
