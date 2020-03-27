const express = require("express");
const {
  getItem,
  postItem,
  updateItem,
  removeItem
} = require("./Controllers/travelController");
const app = express();

app.use(express.json());

app.get("/api/todo", getItem);
app.post("/api/todo", postItem);
app.put("/api/todo/:id", updateItem);
app.delete("/api/todo/:id", removeItem);

const PORT = 5000;

app.listen(PORT, () => console.log(`Big Brother is running on PORT ${PORT}`));
