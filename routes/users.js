import express from "express";

//import Router function middleware from express
const router = express.Router();

const users = [
  {
    name: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 19,
  },
];

router.get("/", (req, res) => {
    console.log(users)
  res.send(users);
});

router.post("/", (req, res) => {
    console.log('post route reached')
    res.status(200).send('post route reached')
})

export default router;
