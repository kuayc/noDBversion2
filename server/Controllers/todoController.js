let todos = [];
let id = 1;

const getTodos = (req, res) => {
  res.status(200).json(todos);
};

const postTodos = (req, res) => {
const { items } = req.body;

todos.push(item);

id++;

  res.status(200).json(travelDestinations);
};

const updateDestination = (req, res) => {
const id = req.params.id;
const { img, place, dates, weather } = req.body;

const targetIndex = travelDestinations.findIndex(
    destinations => destinations.id === +id
);

  travelDestinations[targetIndex].img =
    img || travelDestinations[targetIndex].img;
  travelDestinations[targetIndex].place =
    place || travelDestinations[targetIndex].place;
  travelDestinations[targetIndex].dates =
    dates || travelDestinations[targetIndex].dates;
  travelDestinations[targetIndex].weather =
    weather || travelDestinations[targetIndex].weather;

  res.status(200).json(travelDestinations);
};

const removeDestination = (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < travelDestinations.length; i++) {
    if (travelDestinations[i].id == id) {
      travelDestinations.splice(i, 1);
    }
  }
  res.status(200).json(travelDestinations);
};

module.exports = {
  getDestinations,
  postDestination,
  updateDestination,
  removeDestination
};
