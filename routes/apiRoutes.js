let tableData = require("../data/tableData");
let waitlistData = require("../data/waitlist");

module.exports = function(app) {
    app.get("/api/reservations", function(req, res) {
        res.json(tableData);
      });
    
      app.get("/api/waitlist", function(req, res) {
        res.json(waitlistData);
      });

      app.post("/api/reservations", function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitlistData.push(req.body);
            res.json(false);
          }
      });
    };

