import expess from "express";
import { listCategory } from "../controllers/categoryController.js";
const router = expess.Router();

router.get("/",listCategory)

router.get("/create", function(req, res){
    res.send('Category created');
})

export default router;