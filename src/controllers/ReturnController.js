const verifyFieldsExist = (dataUser) => {
  const items = [
    "item",
    "technical",
    "client",
    "code_OS",
    "date",
    "amount",
    "is_inventory",
    "pendding",
  ];

  return (isNullValuesForm = items.every((value) => dataUser[value]));
};

const ReturnController = {
  createReturn: async (req, res) => {
    try {
      const dataUser = req.body;

      if (!verifyFieldsExist(dataUser)) {
        res.status(400).json({
          message: "Todos os campos são necessários",
        });
        }
        
        res.status(201).json(req.body)
    } catch (error) {
      res.status(500).json({
        message: "Erro interno. Tente novamente!",
        statusError: "500",
        error: error.message,
      });
    }
  },
};

module.exports = ReturnController