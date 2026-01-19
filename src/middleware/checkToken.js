const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token de acesso não informado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req._id = decoded._id;
    req.user = decoded.user;
    req.permission = decoded.permission;
    
    next()
  } catch (error) {
    res.status(401).json({ message: "Token inválido!" });
  }
};

module.exports = checkToken
