import { Player } from './player.js'

class World {
  constructor (gravity = 3, friction = 0.9) {
    // forces
    this.gravity = gravity
    this.friction = friction

    // the number of rows in the game map
    this.row = 9
    // the number of columns in the game map
    this.column = 12

    // the size of each tile (size = height = width)
    this.tileSize = 16
    // the width of the game map
    this.width = this.column * this.tileSize
    // the height of the game map
    this.height = this.row * this.tileSize
    // game map
    this.gameMap = [
      48, 17, 17, 17, 49, 48, 18, 19, 16, 17, 35, 36,
      10, 39, 39, 39, 16, 18, 39, 31, 31, 31, 39, 7,
      10, 31, 39, 31, 31, 31, 39, 12, 5, 5, 28, 1,
      35, 6, 39, 39, 31, 39, 39, 19, 39, 39, 8, 9,
      2, 31, 31, 47, 39, 47, 39, 31, 31, 4, 36, 25,
      10, 39, 39, 31, 39, 39, 39, 31, 31, 31, 39, 37,
      10, 39, 31, 4, 14, 6, 39, 39, 3, 39, 0, 42,
      49, 2, 31, 31, 11, 39, 39, 31, 11, 0, 42, 9,
      8, 40, 27, 13, 37, 27, 13, 3, 22, 34, 9, 24
    ]

    this.player = new Player()

    this.checkCollision = () => {
      // x position
      if (this.player.posX < 0) {
        this.player.posX = 0
        this.player.velocityX = 0
      } else if (this.player.posX + this.player.width > this.width) {
        this.player.posX = this.width - this.player.width
        this.player.velocityX = 0
      }
      // y position
      if (this.player.posY < 0) {
        this.player.posY = 0
        this.player.velocityY = 0
      } else if (this.player.posY + this.player.height > this.height) {
        this.player.ground()
        this.player.posY = this.height - this.player.height
        this.player.velocityY = 0
      }
    }

    this.update = () => {
      this.player.velocityY += this.gravity
      this.player.velocityX *= this.friction
      this.player.velocityY *= this.friction
      this.player.update()
      this.checkCollision()
    }
  }
}

export { World }
