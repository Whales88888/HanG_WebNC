import express from "express";
import db from "./database";

const app = express();
const PORT = 9000;

app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({
        message: "Server is working!"
    });
});

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

        const [result] = await db.execute(
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

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});