class ButtonInput {
    constructor() {
        // button states
        this.active = false;
        this.down = false;

        // get input from keyboard
        this.getInput = (keydown) => {
            if (this.down != keydown) {
                this.active = keydown;
            }
            this.down = keydown;
        };
    }
}

class Controller {
    constructor() {
        // states of buttons for the four directions
        this.upButton = new ButtonInput();
        this.leftButton = new ButtonInput();
        this.rightButton = new ButtonInput();

        // handle keyboard event
        this.keyDownUp = (event) => {
            const keydown = (event.type === "keydown");
            switch(event.keyCode) {
                case 37: this.leftButton.getInput(keydown); break;
                case 38: this.upButton.getInput(keydown); break;
                case 39: this.rightButton.getInput(keydown); break;
            }
        }
    }
}