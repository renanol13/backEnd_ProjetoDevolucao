const ReturnModel = require("../models/ReturnModel");

const verifyFieldsExist = (dataReturn) => {
  return Object.values(dataReturn).some((value) => value === "");
};

const ReturnController = {
  createReturn: async (req, res) => {
    try {
      const dataReturn = req.body;
      console.log(dataReturn);

      if (verifyFieldsExist(dataReturn)) {
        return res.status(400).json({
          message: "Todos os campos são necessários!",
        });
      }

      await ReturnModel.create(dataReturn);

      res.status(201).json({ message: "Devolução criada com sucesso" });
    } catch (error) {
      res.status(500).json({
        message: "Erro interno. Tente novamente!",
        statusError: "500",
        error: error.message,
      });
    }
  },

  findReturn: async (req, res) => {
    try {
      const { item, date, technical, client, pendding } = req.query;

      const { permission, _id } = req;

      const query = {};

      if (item) query.item = { $regex: item, $options: "i" };
      if (client) query.client = { $regex: client, $options: "i" };
      if (date) query.date = date;
      query.pendding = pendding;

      if (permission === "admin") {
        if (query.technical)
          query.technical = { $regex: technical, $options: "i" };
      } else {
        query.technical = _id;
      }

      const response = await ReturnModel.find(query).populate(
        "technical",
        "user",
      );

      formatted = response.map((returns) => ({
        ...returns.toObject(),
        technical: returns.technical.user,
      }));

      res.status(200).json(formatted);
    } catch (error) {
      res.status(500).json({
        message: "Erro interno. Tente novamente!",
        statusError: "500",
        error: error.message,
      });
    }
  },

  deleteReturn: async (req, res) => {
    try {
      const idReturn = req.params._id;

      const response = await ReturnModel.findByIdAndDelete(idReturn);

      if (!response)
        return res.status(404).json({
          message: "Id de devolição não encontrado. Tente Novamente!",
        });

      res.status(200).json({ message: "Devolução removida com sucesso!" });
    } catch (error) {
      res.status(500).json({
        message: "Erro interno. Tente novamente!",
        statusError: "500",
        error: error.message,
      });
    }
  },

  editReturn: async (req, res) => {
    try {
      const idReturn = req.params._id;
      const itemReturn = req.body;


      const response = await ReturnModel.findByIdAndUpdate(
        idReturn,
        { $set: itemReturn },
        { new: true },
      );

      if (!response) {
        res
          .status(404)
          .json({ message: "Devolução não encontrada. Tente novamente!" });
      }

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: "Erro interno. Tente novamente!",
        statusError: "500",
        error: error.message,
      });
    }
  },
};

module.exports = ReturnController;
