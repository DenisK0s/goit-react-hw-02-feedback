//модули
import PropTypes from 'prop-types';

//компоненты
import Section from '../../Section';

const Button = ({ onReset, children }) => {
  return (
    <Section>
      <button type="button" className="Button" onClick={onReset}>
        {children}
      </button>
    </Section>
  );
};

Button.propTypes = {
  onReset: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
