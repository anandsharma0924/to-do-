import express from "express";
import { GetData, userData, userDelete } from "../controllers/userController.js";

const router = express.Router();
router.post("/user", userData);  //localhost:5000/api/data/user
router.get('/GetData' , GetData)  //localhost:5000/api/data/GetData
router.delete('/:id', userDelete); //localhost:5000/api/data/1
export default router;
