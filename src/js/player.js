class Player {
    constructor() {
        this.color1 = "#404040";
        this.color2 = "#F0F0F0";

        this.width = 12;
        this.height = 12;

        this.posX = 100;
        this.posY = 50;

        this.velocityX = 0;
        this.velocityY = 0;

        this.jumping = false;
        this.jumpPower = 20;

        this.jump = () => {
            if (!this.jumping) {
                // jump
                this.jumping = true;
                this.velocityY -= this.jumpPower;
            }
        };

        this.ground = () => {
            this.jumping = false;
        };

        this.moveLeft = () => {
            this.velocityX -= 0.5;
        };

        this.moveRight = () => {
            this.velocityX += 0.5;
        };

        this.update = () => {
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        };
    }
}