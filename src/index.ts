import express from "express";
import router from "./interface/routes/v1/index";
import bodyParser from "body-parser";

const app = express();

// JSONオブジェクトの受信設定
app.use(bodyParser.json());
// POSTオブジェクトの受信設定
app.use(bodyParser.urlencoded({ extended: true }));

// ルーティング
app.use("/v1", router);

// 3000ポートで受信
const port = process.env.PORT || 3000;

// APIサーバ起動
app.listen(port);
console.log("Express WebApi listening on port " + port);
