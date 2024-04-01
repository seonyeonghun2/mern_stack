import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("router works!");
  res.send("<h1>router works!</h1>");
});
// router.post("/test", (req, res) => {
//   console.log("router works!");
// });
// router.put("/test", (req, res) => {
//   console.log("router works!");
// });
// router.delete("/test", (req, res) => {
//   console.log("router works!");
// });

export default router;
