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
};

module.exports = ReturnController;
