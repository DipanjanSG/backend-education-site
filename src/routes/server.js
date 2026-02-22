import express from "express";
import CourseController from '../controllers/CourseController.js';
import connectToDb from "../../config/connectToDb.js";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//dotenv.config({ path: "../../.env" });

dotenv.config({
          path: path.resolve(__dirname, "../../.env")
});

const app = express();

const port = 3000;
console.log("MONGO_URL =", process.env.MONGO_URL);
await connectToDb();
app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "..", "..", "public")));
app.post("/course", (req, res)=>  CourseController.createCourse(req,res));
app.get("/course/:id", (req, res)=>  CourseController.getCourse(req,res));

app.listen(port, () => { console.log("Server is running")});
