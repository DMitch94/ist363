// const roomName = "Luxury King Room";
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription =
//   "A pristine view out across the Hudson with a king size bed, private bathroom and a balcony overlooking the river.";

// const room = {
//   name: "Luxury King Room",
//   price: 300,
//   guests: 2,
//   description:
//     "A pristine view out across the Hudson with a king size bed, private bathroom and a balcony overlooking the river.",
// };

//array of objects
// const rooms = [
//   {
//     name: "Luxury King Room",
//     price: 300,
//     guests: 2,
//     description:
//       "A pristine view out across the Hudson with a king size bed, private bathroom and a balcony overlooking the river.",
//   },
//   {
//     name: "Luxury King Room",
//     price: 300,
//     guests: 2,
//     description:
//       "A pristine view out across the Hudson with a king size bed, private bathroom and a balcony overlooking the river.",
//   },
//   {
//     name: "Luxury King Room",
//     price: 300,
//     guests: 2,
//     description:
//       "A pristine view out across the Hudson with a king size bed, private bathroom and a balcony overlooking the river.",
//   },
// ]; //end of rooms

// fetch("./js/properties.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     //console.log(data);
//     renderProperties(data);
//   });

function renderProperties(properties) {
  properties.forEach((room) => {
    // create elements
    const roomArticle = document.createElement("article");
    roomArticle.classList.add("room");

    const roomNameElement = document.createElement("h3");
    roomNameElement.classList.add("room--name");
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement("p");
    roomDescriptionElement.classList.add("room--description");
    roomDescriptionElement.textContent = room.description;

    const roomPriceElement = document.createElement("p");
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement("p");
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);

    document.body.appendChild(roomArticle);
  }); // end of forEach
} // end of renderProperties
