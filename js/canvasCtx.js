import { createPaddle } from "./createPaddle.js";
import { createBall } from "./createBall.js";

export const canvasCtx = () => {
   createPaddle();
   createBall();
}
