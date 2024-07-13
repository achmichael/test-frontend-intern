import React, {useState} from 'react';
import { CountrySelect } from './CountrySelect';
import Button from './Button.jsx';
export function Form({
  countries,
  setInputCurrency,
  setFirstCurrency,
  setTargetCurrency,
  handleConvert,
}) {

  const [isLoading , setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleConvert(e);
    setIsLoading(false);
  }

  return (
    <div className="container-form">
      <form className="currency-form" onSubmit={handleSubmit}>
        <InputCurrency setInputCurrency={setInputCurrency} />
        {countries.length > 0 && (
          <CountrySelect countries={countries} label={"first-currency"} setCurrency={setFirstCurrency} />
        )}
        {countries.length > 0 && (
          <CountrySelect countries={countries} label={"target-currency"} setCurrency={setTargetCurrency} />
        )}
        <Button isLoading={isLoading}/>
      </form>
    </div>
  );
}



function InputCurrency({ setInputCurrency }) {
  return (
    <div className="input-group">
      <label htmlFor="input-currency">Enter Currency</label>
      <input
        className="input-currency"
        type="text"
        id="input-currency"
        name="input-currency"
        onChange={(e) => setInputCurrency(e.target.value)}
      />
    </div>
  );
}
