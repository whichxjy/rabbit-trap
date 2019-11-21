class World {
    constructor() {
        this.backgroundColor = "rgba(40, 48, 56, 0.25)";
        this.gravity = 3;
        this.friction = 0.9;
        this.height = 72;
        this.width = 128;

        this.player = new Player();

        this.checkCollision = () => {
            // x position
            if (this.player.posX < 0) {
                this.player.posX = 0;
                this.player.velocityX = 0;
            }
            else if (this.player.posX + this.player.width > this.width) {
                this.player.posX = this.width - this.player.width;
                this.player.velocityX = 0;
            }
            // y position
            if (this.player.posY < 0) {
                this.player.posY = 0;
                this.player.velocityY = 0;
            }
            else if (this.player.posY + this.player.height > this.height) {
                this.player.ground();
                this.player.posY = this.height - this.player.height;
                this.player.velocityY = 0;
            }
        };

        this.update = () => {
            this.player.velocityY += this.gravity;
            this.player.velocityX *= this.friction;
            this.player.velocityY *= this.friction;
            this.player.update();
            this.checkCollision();
        };
    }
}