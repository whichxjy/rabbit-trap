class Game {
    constructor() {
        this.world = new World();

        // update game state
        this.update = () => {
            this.world.update();
        };
    }
}
