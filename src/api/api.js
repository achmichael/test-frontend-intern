export function getCountries() {
  return fetch("/api/forex/?country")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    //   console.log(response.json())
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("There has been a problem with your fetch operation:", error);
    });
}

export async function getCurrencies(targetCurrency) {
  try {
    const response = await fetch(`/api/forex/?currency=${targetCurrency}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data from API: ", error);
    return [];
  }
}
