class CustomAPIError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return CustomAPIError(msg, statusCode);
};

module.exports = {
  createCustomError,
  CustomAPIError,
};
