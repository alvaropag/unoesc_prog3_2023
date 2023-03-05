const fetch = require("cross-fetch");

const fetchDados = async () => {
  const result = await fetch("https://swapi.dev/api/films/1");
  const resultJson = await result.json();

  const result2 = await fetch("https://swapi.dev/api/films/2");
  const resultJson2 = await result2.json();

  const result3 = await fetch("https://swapi.dev/api/films/3");
  const resultJson3 = await result3.json();

  const result4 = await fetch("https://swapi.dev/api/films/4");
  const resultJson4 = await result4.json();

  const result5 = await fetch("https://swapi.dev/api/films/5");
  const resultJson5 = await result5.json();

  const result6 = await fetch("https://swapi.dev/api/films/6");
  const resultJson6 = await result6.json();

  const crawls = {
    1: resultJson.opening_crawl,
    2: resultJson2.opening_crawl,
    3: resultJson3.opening_crawl,
    4: resultJson4.opening_crawl,
    5: resultJson5.opening_crawl,
    6: resultJson6.opening_crawl,
  };

  console.log(crawls);
  return crawls;
};
fetchDados();
