const trending = async () => {
  let url_general =
    "https://api.themoviedb.org/3/trending/all/day?api_key=75b5d3032fe9c1f4c8f28e1cc2858dfc";
  const api = await fetch(url_general);
  const data = await api.json();
  console.log(data);
  div_cine = document.querySelector("#resultado");
  data.results.map((item) => {
    divItem = document.createElement("div");
    item.name ? (titulo = item.name) : (titulo = item.title);
    divItem.innerHTML = `
        <div class="card" style="width: 12rem; height: 100%;">
            <img class="card-img-top" src="${
              "https://www.themoviedb.org/t/p/w440_and_h660_face" +
              item.poster_path
            }" alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">Fecha de salida: ${item.release_date}</p>
                <p class="card-text">Nota media: ${item.vote_average}</p>
            </div>
        </div>
        `;
    div_cine.appendChild(divItem);
  });
};

const find = async (external_id) => {
  let url_general =
    "https://api.themoviedb.org/3/find/" +
    external_id +
    "?api_key=75b5d3032fe9c1f4c8f28e1cc2858dfc&language=en-US&external_source=imdb_id";
  const api = await fetch(url_general);
  const data = await api.json();
  console.log(data);
};

trending();
find("937278");
