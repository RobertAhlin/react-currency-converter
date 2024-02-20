import PropTypes from 'prop-types';

const ConversionResult = ({ result, currency }) => {
  return (
    <p>
      Conversion Result: {result} {currency}
    </p>
  );
};

ConversionResult.propTypes = {
  result: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ConversionResult;
