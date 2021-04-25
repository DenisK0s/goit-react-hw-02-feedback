//модули
import PropTypes from 'prop-types';

//стили
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles.Section}>
      <h2 className="SectionTitle">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
