

const Trending=async()=>{
let url_general = "https://api.themoviedb.org/3/trending/all/day?api_key=75b5d3032fe9c1f4c8f28e1cc2858dfc"
const api= await fetch(url_general);
    const data=await api.json();
    console.log(data);
}

Trending();