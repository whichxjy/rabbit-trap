class Player {
    constructor() {
        this.color = "#FF0000";
        this.width = 16;
        this.height = 16;

        this.posX = 100;
        this.posY = 50;

        this.velocityX = 0;
        this.velocityY = 0;

        this.jumping = false;
        this.jumpPower = 20;

        this.jump = () => {
            if (!this.jumping) {
                // random color
                this.color = "#" + Math.floor(Math.random() * 16777216).toString(16);
                if (this.color.length < 7) {
                    this.color = this.color.slice(0, 1) + "0" + this.color.slice(1, 6);
                }
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