const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const UserController = {
  login: async (req, res) => {
    try {
      let { user, password } = req.body;
      user = user?.toLowerCase().trim();

      if (!user || !password) {
        res.status(400).json({
          message: "Todos os campos são necessários",
        });
        return;
      }

      const userData = await UserModel.findOne({ user });

      if (!userData || userData.password !== password) {
        return res.status(422).json({
          message: "Usuário ou senha inválidos",
        });
      }

      const token = jwt.sign(
        {
          _id: userData._id,
          user: userData.user,
          permission: userData.permission,
        },
        process.env.SECRET,
      );

      return res.status(200).json({
        message: "Usuário logado com sucesso",
        userData: {
          _id: userData._id,
          user: userData.user,
          permission: userData.permission,
        },
        token: token,
      });
    } catch (error) {
      res.status(500).json({
        message: "Erro interno. Tente novamente!",
        statusError: "500",
        error: error.message,
      });
    }
  },

  findUsersFromSelect: async (req, res) => {
    try {
      const response = await UserModel.find({permission: "user"}, "user _id");

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

module.exports = UserController;
