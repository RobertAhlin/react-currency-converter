import PropTypes from 'prop-types';

const ErrorComponent = ({ message }) => {
  return (
    <div className="error-message">
      <h3>{message}</h3>
    </div>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired, // Assuming message is a string and is required
};

export default ErrorComponent;
