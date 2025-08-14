"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    const user = await db_1.prisma.user.findMany({});
    return res.json({ message: "Server is running", user });
});
app.post("/", async (req, res) => {
    const { username, password } = req.body;
    const user = await db_1.prisma.user.create({
        data: {
            username,
            password,
        },
    });
    return res.json({ message: "Post Endpoint", user });
});
app.listen(3001, () => console.log("Server is running"));
