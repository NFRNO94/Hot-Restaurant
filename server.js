// Dependencies
// =============================================================
let express = require("express");

//setup express app
let app = express();
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("public"));

require("../Hot-Restaurant/routes/apiRoutes")(app);
require("../Hot-Restaurant/routes/htmlRoutes")(app);

  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });