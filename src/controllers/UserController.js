const Users = require("../models/UserData");

module.exports = {
  async read(request, response) {
    const userList = await Users.find();

    return response.json(userList);
  },

  async create(request, response) {
    const { firstName, lastName, email, password } = request.body;

    if (!firstName || !lastName || !email || !password) {
      return response.status(400).json({ error: "Preencha todos os campos!" });
    }

    const userCreated = await Users.create({
      firstName,
      lastName,
      email,
      password,
    });

    return response.json(userCreated);
  },

  async delete(request, response) {
    const { id } = request.params;

    const userDeleted = await Users.findOneAndDelete({ _id: id });
    if (userDeleted) {
      return response.json(userDeleted);
    }

    return response.status(401).json({ error: "Usuário não encontrado!" });
  },
};
