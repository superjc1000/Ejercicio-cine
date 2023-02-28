const Trending = async () => {
  let url_general =
    "https://api.themoviedb.org/3/trending/all/day?api_key=75b5d3032fe9c1f4c8f28e1cc2858dfc";
  const api = await fetch(url_general);
  const data = await api.json();
  console.log(data);
};

const Find = async (external_id) => {
  let url_general =
    "https://api.themoviedb.org/3/find/" +
    external_id +
    "?api_key=75b5d3032fe9c1f4c8f28e1cc2858dfc&language=en-US&external_source=imdb_id";
  const api = await fetch(url_general);
  const data = await api.json();
  console.log(data);
};

Trending();
Find(213);
