//модули
import PropTypes from 'prop-types';

//стили
// import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
