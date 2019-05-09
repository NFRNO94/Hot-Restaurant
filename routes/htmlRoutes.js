let path = require("path");

module.exports = function(app) {
    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });
    
    app.get("/view", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
