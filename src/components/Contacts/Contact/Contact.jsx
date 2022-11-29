import PropTypes from 'prop-types';

export const Contact = ({ name, number }) => (
  <div>
    <span>{name}:</span>
    <span> {number}</span>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
