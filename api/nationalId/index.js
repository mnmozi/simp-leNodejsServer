import validate from "./validate.js";
export default (router) => {
  router.get("/", validate);
};
