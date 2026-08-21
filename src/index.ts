import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 9000;

// Cho phép server nhận JSON
app.use(express.json());

// GET /
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Node.js server is running!"
    });
});

// GET /api/get
app.get("/api/get", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "This is a GET request!"
    });
});

// POST /api/post
app.post("/api/post", (req: Request, res: Response) => {
    const data = req.body;

    res.status(200).json({
        success: true,
        message: "This is a POST request!",
        data: data
    });
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});