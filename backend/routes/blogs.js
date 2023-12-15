import express from "express";
import { addBlog } from "../controllers/blog.js";

const router = express.Router()

router.get("/",) //get all post
router.get("/:id",) //get single post
router.post("/",)//new post
router.delete("/:id",)//delete post
router.update("/:id",)//update post


export default router;