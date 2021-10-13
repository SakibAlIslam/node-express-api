import express from 'express';

//import Router function middleware from express
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello i am user')
})

export default router;