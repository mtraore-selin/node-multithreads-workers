// import express, { Request, Response } from "express";
// import { Worker } from "worker_threads";

// const app = express();
// const port = process.env.PORT || 3000;

// app.get("/non-blocking", (_req: Request, res: Response) =>
//   res.status(200).send("This page is non-blocking!")
// );

// app.get("/blocking", (_req: Request, res: Response) => {
//   const worker = new Worker("./worker.js");
//   worker.on("message", (data: any) => {
//     res.status(200).send(`Response: ${data}`);
//   });
//   worker.on("error", (error: any) => {
//     res.status(400).send(`An error occurred: ${error}`);
//   });
// });

// app.get("/test", (_req: Request, res: Response) =>
//   res.status(200).send("This page is a test page!")
// );

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
