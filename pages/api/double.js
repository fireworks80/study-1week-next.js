export default (req, res) => {
  const { value } = req.query;
  res.json({ value: parseInt(value, 10) * 2 });
};
