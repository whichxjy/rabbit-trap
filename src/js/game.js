import { World } from './world.js'

class Game {
  constructor () {
    this.world = new World()

    // update game state
    this.update = () => {
      this.world.update()
    }
  }
}

export { Game }
