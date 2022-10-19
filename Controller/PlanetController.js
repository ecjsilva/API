//CONTROLLER PARA ADICIONAR DADOS A TABELA
const Planet = require("../models/Planet");


//CRUD
module.exports = {
  //CONTROLLER PARA CRIAR - CREATE
  async store(req, res) {
    const { name, position } = req.body;
    const planet = await Planet.create({ name, position });
    return res.json(planet);
  },
  //CONTROLLER PARA VISUALIZAR - READ
  async index(req, res) {
    const planets = await Planet.findAll();
    return res.json(planets);
  },
  //CONTROLLER PARA ATUALIZAR - UPDATE
  async patch(req, res) {
    const { name, size, position } = req.body;
    await Planet.update(
      { name, position },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.send("Planet update with sucess");
  },
  //CONTROLLER PARA DELETAR - DELETE
  async delete(req, res) {
    await Planet.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send("Sucess! Planet exclude.");
  },
};