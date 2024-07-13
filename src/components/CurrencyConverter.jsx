import React, { useState, useEffect } from "react";
import { getCountries, getCurrencies } from "../api/api.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ConvertionResult from "./ConvertionResult.jsx";
import { Form } from "./Form.jsx";
import Loader from "./Loader.jsx";
const MySwal = withReactContent(Swal);

function CurrencyConverter() {
  const [countries, setCountries] = useState([]);
  const [inputCurrency, setInputCurrency] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [conversionResult, setConversionResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await getCountries();
        const parsedData = response.data;
        setCountries(parsedData); //isi variable country dengan variable array data dari API
        setLoading(false); // set loading menjadi false ketika data sudah selesai di return
      } catch (error) {
        console.log(error);
        setCountries([]); //jika error maka isi variable country dengan array kosong
        setLoading(false); // set loading menjadi false ketika terjadi error
      }
    }
    fetchCountries();
  }, []);

  const handleConvert = async (event) => {
    event.preventDefault();
    if (!firstCurrency || !targetCurrency || !inputCurrency) {
      MySwal.fire({
        title: "Input Fields Missing",
        text: "Please select a currency for both the first and target fields.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    try {
      const result = await getCurrencies(targetCurrency);
      convert(result.data);
      
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const convert = async (data) => {
    if (data) {
      data.forEach((element) => {
        if (element[`${firstCurrency}`] && !isNaN(element[`${firstCurrency}`])) {
          const amount = parseFloat(inputCurrency);
          const result = amount * parseFloat(element[`${firstCurrency}`]);
          setConversionResult(result);
        }else{
          MySwal.fire({
            title: "Invalid Currency😢😢😢",
            text: "Maaf Salah Satu Mata Uang Pilihan Anda tidak tersedia.",
            icon: "error",
            confirmButtonText: "Okay",
          });
          setConversionResult(null);
          return;
        }
      });
    }
  };

  return (
    <div className="container-converter">
      {loading ? (
        <Loader />
      ) : (
        <>
          {conversionResult !== null && (
            <ConvertionResult
              firstCurrency={firstCurrency}
              inputCurrency={inputCurrency}
              targetCurrency={targetCurrency}
              result={conversionResult}
            />
          )}
          <Form
            countries={countries}
            setInputCurrency={setInputCurrency}
            setFirstCurrency={setFirstCurrency}
            setTargetCurrency={setTargetCurrency}
            handleConvert={handleConvert}
          />
        </>
      )}
    </div>
  );
}

export default CurrencyConverter;
