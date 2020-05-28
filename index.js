// console.log("Hey Lu!")
function getArtists () {
  return fetch('http://localhost:3000/artists')
  .then((res) => res.json())
    .then((artists) => {
      artists.forEach((artist) => {
    //     //function to render toys goes here or something
        renderArtists(artist);
      });
    });
  }

function renderArtists(artist){
  let h2 = document.createElement("h2");
  // let h3 = document.createElement("h3");
  h2.innerText = [artist.id + ". " + artist.name];
  // h3.innerText = "Hi Lu!";

  // let img = document.createElement("img");
  // img.setAttribute("src", toy.image);
  // img.setAttribute("class", "toy-avatar");

  // let p = document.createElement("p");
  // p.innerText = `${toy.likes} likes`;

  // let btn = document.createElement("button");
  // btn.setAttribute("class", "like-btn");
  // btn.setAttribute("id", toy.id);
  // btn.innerText = "like";
  // btn.addEventListener("click", (e) => {
  //   console.log(e.target.dataset);
  //   likes(e);
  // });

  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card");
  divCard.append(h2);
  // divCard.append(h3);
  document.body.appendChild(divCard)
  // divCollect.append(divCard);
}

getArtists()