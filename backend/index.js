import express from "express";
import blogRoutes from "./routes/blogs.js";

const photoapp = express()

photoapp.use(express.json())

photoapp.use("/api/blogs",blogRoutes)

photoapp.listen(8800,()=>{
    console.log("Connected the Photography App to the server!")
})