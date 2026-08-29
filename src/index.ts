import express from "express";
import db from "./database";

const app = express();
const PORT = 9000;

app.use(express.json());

app.get("/api/students", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM STUDENT");

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

app.post("/api/students", async (req, res) => {
    try {
        const { sid, sname, email, tutor_id } = req.body;

        await db.execute(
            "INSERT INTO STUDENT (SID, SNAME, EMAIL, Tutor_Id) VALUES (?, ?, ?, ?)",
            [sid, sname, email, tutor_id]
        );

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: {
                sid,
                sname,
                email,
                tutor_id
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

app.put("/api/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { sname, email, tutor_id } = req.body;

        const [result]: any = await db.execute(
            "UPDATE STUDENT SET SNAME = ?, EMAIL = ?, Tutor_Id = ? WHERE SID = ?",
            [sname, email, tutor_id, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.json({
            success: true,
            message: "Student updated successfully",
            data: {
                sid: id,
                sname,
                email,
                tutor_id
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

app.delete("/api/students/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const [result]: any = await db.execute(
            "DELETE FROM STUDENT WHERE SID = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.json({
            success: true,
            message: "Student deleted successfully",
            data: {
                sid: id
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