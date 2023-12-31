const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
	console.log("Servidor ejecutando en el puerto", 3000);
});

