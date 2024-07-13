import Select from "react-select";

export const CountrySelect = ({ countries, label, setCurrency }) => {
  const options = countries.map((country) => ({
    value: country.currencyCode,
    label: (
      <div>
        <img
          src={country.img}
          alt={country.country}
          style={{ width: "20px", marginRight: "10px" }}
        />
        {country.country}
      </div>
    ),
  }));

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: 30,
    }),
    container: (base) => ({
      ...base,
      width: "100%",
      marginLeft: "1rem",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: "12px",
    }),
    clearIndicator: (base) => ({
      ...base,
      padding: 4,
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0px 6px",
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  return (
    <div className="input-group">
      <label className={`${label}`} htmlFor={`${label}`}>
        {label}
      </label>
      <Select
        options={options}
        styles={customStyles}
        onChange={(selectedOption) => setCurrency(selectedOption.value)}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};
