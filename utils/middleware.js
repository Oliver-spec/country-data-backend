const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: "unknown endpoint" });
};

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(400).json({ errorName: err.name, errorMessage: err.message });
};

module.exports = { unknownEndpoint, errorHandler };
