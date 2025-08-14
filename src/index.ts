import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { prisma } from "./db/db";

const app: Application = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const user = await prisma.user.findMany({});
  return res.json({ message: "Server is running", user });
});

app.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await prisma.user.create({
    data: {
      username,
      password,
    },
  });

  return res.json({ message: "Post Endpoint", user });
});

app.listen(3000, () => console.log("Server is running"));
