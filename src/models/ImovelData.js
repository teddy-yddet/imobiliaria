const mongoose = require("mongoose");

const ImovelDataSchema = new mongoose.Schema({
  tipo: String,
  endereco: String,
  cidade: String,
  uf: String,
  valor: Number,
  descricao: String,
});

module.exports = mongoose.model("Imoveis", ImovelDataSchema);
