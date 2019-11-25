class ButtonInput {
    constructor() {
        // virtual state if the keyboard button
        this.active = false;
        // physical state of the keyboard button
        this.keyDown = false;

        // get input from keyboard
        this.getInput = (keyDown) => {
            // if the physical state changes, update virtual state
            if (this.keyDown != keyDown) {
                this.active = keyDown;
            }
            // set physical state
            this.keyDown = keyDown;
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
            // down or up?
            const keyDown = (event.type === "keydown");
            // which button is pressed?
            switch(event.keyCode) {
                case 37: this.leftButton.getInput(keyDown); break;
                case 38: this.upButton.getInput(keyDown); break;
                case 39: this.rightButton.getInput(keyDown); break;
            }
        }
    }
}