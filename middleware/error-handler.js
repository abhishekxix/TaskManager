const { CustomAPIErrpr } = require('../Errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIErrpr) {
    return req.status(err.statusCode).json({ msg: err.msg });
  }
  return res.status(500).json({ msg: err });
};

module.exports = errorHandlerMiddleware;
