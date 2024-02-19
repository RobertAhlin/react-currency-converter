import React from 'react';

function ConvertButton(props) {
  return (
    <div>
      <button onClick={props.onConvert}>Convert</button>
    </div>
  );
}

export default ConvertButton;
