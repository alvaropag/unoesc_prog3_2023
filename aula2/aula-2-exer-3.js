const fetch = require("cross-fetch");

const fetchDados = () => {
  return new Promise((resolve, reject) => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const fatos = data.data.map((fato) => fato.fact);
        resolve(fatos);
      });
  });
};

fetchDados().then((fatos) => {
  console.log(fatos);
});
