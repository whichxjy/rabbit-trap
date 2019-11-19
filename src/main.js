window.addEventListener("load", _ => {
    // handle user input
    const controller = new Controller();
    // hold game logic
    const game = new Game();
    // deal with canvas
    const display = new Display(
        document.querySelector("canvas"),
        game.world.width,
        game.world.height
    );

    // update function for the game
    const gameUpdate = () => {
        if (controller.leftButton.active) {
            // left button is pressed
            game.world.player.moveLeft();
        }
        else if (controller.rightButton.active) {
            // right button is pressed
            game.world.player.moveRight();
        }
        else if (controller.upButton.active) {
            // up button is pressed
            game.world.player.jump();
        }
        game.update();
    };

    // render function for the game
    const gameRender = () => {
        // fill background
        display.fill(game.world.backgroundColor);
        // draw player
        display.drawRectangle(
            game.world.player.posX,
            game.world.player.posY,
            game.world.player.width,
            game.world.player.height,
            game.world.player.color
        );
        // render
        display.render();
    }

    // game engine
    const engine = new Engine(2, gameUpdate, gameRender);

    // handle events
    window.addEventListener("keydown", event => {
        controller.keyDownUp(event);
    });
    window.addEventListener("keyup", event => {
        controller.keyDownUp(event);
    });
    window.addEventListener("resize", _ => {
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        const heightWidthRatio = game.world.height / game.world.width;
        display.resize(clientWidth, clientHeight, heightWidthRatio);
    });

    // init
    display.resize();

    // start game engine
    engine.start();
});