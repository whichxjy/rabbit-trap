window.addEventListener("load", _ => {
    // handle user input
    const controller = new Controller();
    // handle canvas
    const display = new Display(document.querySelector("canvas"));
    // hold game logic
    const game = new Game();

    // update function for the game
    const gameUpdate = () => {
        game.update();
    };

    // render function for the game
    const gameRender = () => {
        display.renderColor(game.color);
        display.render();
    }

    // game engine
    const engine = new Engine(1, gameUpdate, gameRender);

    // handle events
    window.addEventListener("keydown", event => {
        controller.keyDownUp(event);
    });
    window.addEventListener("keyup", event => {
        controller.keyDownUp(event);
    });
    window.addEventListener("resize", _ => {
        display.resize();
    });

    // init
    display.resize();
    engine.start();
});