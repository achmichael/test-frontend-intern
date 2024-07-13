import React from 'react';

function ConversionResult({ firstCurrency, targetCurrency, inputCurrency, result }) {
  return (
    <div className="conversion-result">
      <p className='conversion-title'>Conversion Result</p>
      <p className='result'>
        {inputCurrency} {firstCurrency} = {result} {targetCurrency}
      </p>
    </div>
  );
}
export default ConversionResult;
