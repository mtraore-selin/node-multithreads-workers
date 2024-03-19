"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker_threads_1 = require("worker_threads");
var counter = 0;
for (var index = 0; index < 20000000000 / worker_threads_1.workerData.thread_count; index++) {
    counter++;
}
worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 ? void 0 : worker_threads_1.parentPort.postMessage(counter);
