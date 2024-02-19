import React from 'react';

function ErrorComponent(props) {
  return (
    <div>
      <p>{props.errorMessage}</p>
    </div>
  );
}

export default ErrorComponent;