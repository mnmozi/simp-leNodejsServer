export const testFunction = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "this is a simple app", data: req.body });
};
