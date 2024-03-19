import express, { Request, Response } from "express";

import { Worker } from "worker_threads";

const thread_count: number = 4;

function createWorker(): Promise<number> {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./four-workers.js", {
      workerData: { thread_count },
    });
    worker.on("message", (data: number) => {
      resolve(data);
    });
    worker.on("error", (error: Error) => {
      reject(error);
    });
  });
}

const app = express();
const port = process.env.PORT || 3000;

app.get("/non-blocking", (_req: Request, res: Response) =>
  res.status(200).send("This page is non-blocking!")
);

app.get("/blocking", async (_req: Request, res: Response) => {
  const workers: Promise<number>[] = [];
  for (let index = 0; index < thread_count; index++) {
    workers.push(createWorker());
  }
  try {
    const results: number[] = await Promise.all(workers);
    const total: number = results.reduce((acc, cur) => acc + cur, 0);
    res.status(200).send(`Response: ${total}`);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
});

app.get("/test", (_req: Request, res: Response) =>
  res.status(200).send("This page is a test page!")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
