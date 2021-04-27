//модули
import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => <p>{message}</p>;

NotificationMessage.defaultProps = {
  message: 'No feedback given',
};

NotificationMessage.propTypes = {
  message: PropTypes.string,
};

export default NotificationMessage;
