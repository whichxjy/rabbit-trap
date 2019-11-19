class ButtonInput {
    constructor() {
        // button states
        this.active = false;
        this.down = false;

        // get input from keyboard
        this.getInput = (down) => {
            if (this.down != down) {
                this.active = down;
            }
            this.down = down;
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
            const down = (event.type === "keydown");
            if (down) {
                switch(event.keyCode) {
                    case 37: this.leftButton.getInput(down); break;
                    case 38: this.upButton.getInput(down); break;
                    case 39: this.rightButton.getInput(down); break;
                }
            }
        }
    }
}