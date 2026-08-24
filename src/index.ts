import express from "express";
import db from "./database";

const app = express();
const PORT = 9000;

// Middleware đọc dữ liệu JSON
app.use(express.json());

// GET test
app.get("/api/test", (req, res) => {
    res.json({
        message: "Server is working!"
    });
});

// GET danh sách users
app.get("/api/users", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM users");

        res.json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Database error"
        });
    }
});

// POST thêm user
app.post("/api/users", async (req, res) => {
    try {
        const { name, age, class: userClass } = req.body;

        await db.execute(
            "INSERT INTO users (name, age, class) VALUES (?, ?, ?)",
            [name, age, userClass]
        );

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                name,
                age,
                class: userClass
            }
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Database error"
        });
    }
});

// POST theo yêu cầu bài tập
app.post("/api/post", (req, res) => {

    // Lấy dữ liệu từ Query Parameter
    const id = req.query.id;

    // Lấy dữ liệu từ Header
    const idHeader = req.headers["idheader"];

    // Lấy dữ liệu từ Body
    const body = req.body;

    // Trả dữ liệu về Client
    res.status(200).json({
        message: "POST request successful",

        query: {
            id: id
        },

        header: {
            idHeader: idHeader
        },

        body: body
    });
});

// Khởi động Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});