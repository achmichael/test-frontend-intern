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

// Jika Ingin Menggunakan Fungsi Diatas Masuk Ke file vite.config.js dan hidupkan baris kode yang saya command

// export async function getCountries() {
//   try {
//     const apiUrl = 'https://api.rawp.info/forex/?country';
//     //Membuat URL proxy menggunakan layanan allorigins.win untuk mengatasi masalah CORS pada server API.
//     const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
//     const response = await axios.get(proxyUrl);
//     return JSON.parse(response.data.contents);
//   } catch (error) {
//     console.error('Error fetching data from API:', error);
//     return [];
//   }
// }
// export async function getCurrencies(targetCurrency) {
//   try {
//     const apiUrl = `https://api.rawp.info/forex/?currency=${targetCurrency}`;
//     const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
//     const response = await fetch(proxyUrl);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return JSON.parse(data.contents);
//   } catch (error) {
//     console.error('Error fetching data from API:', error);
//     return [];
//   }
// }
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
