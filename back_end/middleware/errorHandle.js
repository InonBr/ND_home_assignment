const errorHandle = (res, err) => {
  console.error(err.message);

  return res.status(500).json({ err: 'Server error', message: err.message });
};

module.exports = errorHandle;
