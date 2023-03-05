const fetch = require("cross-fetch");

const fetchData = async () => {
  const firstCall = fetch("https://swapi.dev/api/films/1");
  const secondCall = fetch("https://swapi.dev/api/films/2");
  const thirdCall = fetch("https://swapi.dev/api/films/3");
  const fourthCall = fetch("https://swapi.dev/api/films/4");
  const fifthCall = fetch("https://swapi.dev/api/films/5");
  const sixthCall = fetch("https://swapi.dev/api/films/6");

  const results = await Promise.all([
    firstCall,
    secondCall,
    thirdCall,
    fourthCall,
    fifthCall,
    sixthCall,
  ]);

  const resultsJson = await Promise.all(results.map((result) => result.json()));

  const crawls = resultsJson.map((result) => result.opening_crawl);

  console.log(crawls);
};

fetchData();
