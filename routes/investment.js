import express  from "express";
import{ createinvestment ,getinvestment } from '../controllers/investment.js'

const router=express.Router();

router.get('/', getinvestment);
router.post('/' , createinvestment);

export default router;