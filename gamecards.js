export function gameCards(list) {
  const grid = document.querySelector("#game-grid");
  grid.textContent = "";

  for (let i = 0; i < list.length; i++) {
    const game = list[i];

    const item = document.createElement("li");
    const card = document.createElement("article");

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = game.image;
    img.alt = game.alt;
    figure.append(img);

    const genre = document.createElement("p");
    genre.textContent = game.genre + " · " + game.year;

    const title = document.createElement("h3");
    title.textContent = game.title;

    const rating = document.createElement("p");
    rating.textContent = "★ " + game.rating + " (" + game.hours + " hrs)";

    const link = document.createElement("a");
    link.href = "#game-" + game.id;
    link.textContent = "Explore review";

    card.append(figure, genre, title, rating, link);
    item.append(card);
    grid.append(item);
  }
}