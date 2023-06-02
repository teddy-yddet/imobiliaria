const Imoveis = require("../models/ImovelData");

module.exports = {
  async read(request, response) {
    const ImovelList = await Imoveis.find();

    return response.json(ImovelList);
  },

  async create(request, response) {
    const { tipo, endereco, cidade, uf, valor, descricao } = request.body;

    if (!tipo || !endereco || !cidade || !uf || !valor || !descricao) {
      return response.status(400).json({ error: "Preencha todos os campos!" });
    }

    const imovelCreated = await Imoveis.create({
      tipo,
      endereco,
      cidade,
      uf,
      valor,
      descricao,
    });

    return response.json(imovelCreated);
  },

  async delete(request, response) {
    const { id } = request.params;

    const imovelDeleted = await Imoveis.findOneAndDelete({ _id: id });
    if (imovelDeleted) {
      return response.json(imovelDeleted);
    }

    return response.status(401).json({ error: "Imóvel não encontrado!" });
  },
};
