//модули
import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => (
  <h2 className="SectionTitle">{message}</h2>
);

NotificationMessage.defaultProps = {
  message: 'No feedback given',
};

NotificationMessage.propTypes = {
  message: PropTypes.string,
};

export default NotificationMessage;
