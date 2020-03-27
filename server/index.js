const express = require("express");
const app = express();

app.use(express.json());

// app.get("/api/travel", getDestinations);
// app.post("/api/travel", postDestination);
// app.put("/api/travel/:id", updateDestination);
// app.delete("/api/travel/:id", removeDestination);

const PORT = 5000;

app.listen(PORT, () => console.log(`Big brother is listening PORT ${PORT}`));
