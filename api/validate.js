import { testFunction } from "../services/myService.js";

export default (req, res, next) => {
  // here you can do all the code regarding the request it self and send the data to your services

  console.log("IN the router of validating");
  const data = req.body;
  const result = testFunction(data);

  res.status(200).json({ message: "this is a simple app", data: result });
};
