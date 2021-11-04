export const createElements = () => {
    const ctx = document.getElementById('canvas').getContext('2d');

    // CREATE BALL
    let ray = 10;
    let posBallX = canvas.width / 2;
    let posBallY = canvas.height - 30;
    let dirX = 2;
    let dirY = -2;
    // let deltaV = -6; // speed
    const createBall = () => {
        ctx.beginPath();
        ctx.arc(posBallX, posBallY, ray, 0, Math.PI * 2);
        ctx.fillStyle = "#C3C3C3";
        ctx.fill();
        ctx.closePath();
    }
    //MOVEMENT BALL
    const ballMvt = () => {
        if (posBallX + dirX > canvas.width - ray || posBallX + dirX < ray) {
            dirX = -dirX;
        }
        if (posBallY + dirY > canvas.height - ray || posBallY + dirY < ray) {
            dirY = -dirY;
        }
        posBallX += dirX;
        posBallY += dirY;
    }

    // CREATE PADDLE   
    let padWid = 100;
    let padHei = 10;
    let posPadX = (canvas.width - padWid) / 2;
    let posPadY = (canvas.height - padHei) - 35;
    const createPaddle = () => {
        ctx.beginPath();
        ctx.rect(posPadX, posPadY, padWid, padHei);
        ctx.fillStyle = '#C3C3C3';
        ctx.fill();
        ctx.closePath();
    }

    // KEY PRESSED
    let rightPressed = false;
    let leftPressed = false;

    const keyDownHandler = (e) => {
        if (e.keyCode == 39) {
            rightPressed = true;
        } else if (e.keyCode == 37) {
            leftPressed = true;
        }
    }

    const keyUpHandler = (e) => {
        if (e.keyCode == 39) {
            rightPressed = false;
        } else if (e.keyCode == 37) {
            leftPressed = false;
        }
    }
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    // MOVEMENT PADDLE
    const paddleMvt = () => {
        if (rightPressed && posPadX < canvas.width - padWid) {
            posPadX += 5;
        } else if (leftPressed && posPadX > 0) {
            posPadX -= 5;
        }
    }

    // BEHAVIOR
    const behaviorObject = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        createBall();
        createPaddle();
        ballMvt();
        paddleMvt();
    }

    setInterval(behaviorObject, 10);
}