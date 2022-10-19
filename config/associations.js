//Associação das tabelas
const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");

//"O PLANETA TEM UM SATELITE"
Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
//"O SATELITE PERTENCE A UM PLANETA"
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

module.exports = { Planet, Satelite };