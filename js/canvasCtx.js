import { createPaddle } from "./View/createPaddle.js";
import { createBall } from "./View/createBall.js";

export const canvasCtx = () => {
   createPaddle();
   createBall();
}
