import express from "express";
import controller from "../../controller";
import { TFindUserRequest } from "../../request/user/FindUserRequest";
import { UpdateUserRequest } from "../../request/user/UpdateUserRequest";
import { TCreateUserRequest } from "../../request/user/CreateUserRequest";
import { TDeleteUserRequest } from "../../request/user/DeleteUserRequest";

const userController = new controller.UserController();
const router = express.Router();

router.get("/", async (_: express.Request, res: express.Response) => {
  let results = await userController.findAllUser();
  res.send(results);
});

router.get("/:id", async (req: TFindUserRequest, res: express.Response) => {
  let results = await userController.findUser(req);
  res.send(results);
});

router.post("/", async (req: TCreateUserRequest, res: express.Response) => {
  let results = await userController.createUser(req);
  res.send(results);
});

router.patch("/:id", async (req: UpdateUserRequest, res: express.Response) => {
  let results = await userController.updateUser(req);
  res.send(results);
});

router.delete(
  "/:id",
  async (req: TDeleteUserRequest, res: express.Response) => {
    let results = await userController.deleteUser(req);
    res.send(results);
  }
);

export default router;
