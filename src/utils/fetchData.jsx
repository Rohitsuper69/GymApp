export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/%7BbodyPart%7D",
  headers: {
    "X-RapidAPI-Key": "d95354f075msh0176b7227a2f1a4p1ace6fjsn3219b1c0614a",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d95354f075msh0176b7227a2f1a4p1ace6fjsn3219b1c0614a",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
