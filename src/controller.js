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
        this.downButton = new ButtonInput();
        this.leftButton = new ButtonInput();
        this.rightButton = new ButtonInput();

        // handle keyboard event
        this.keyDownUp = (event) => {
            if (event.type === "keydown") {
                switch(event.keyCode) {
                    case 37: this.leftButton.getInput(down); break;
                    case 38: this.upButton.getInput(down); break;
                    case 39: this.rightButton.getInput(down); break;
                    case 40: this.downButton.getInput(down); break;
                }
            }
            alert("You pressed a key (" + event.keyCode + ")!");
        }
    }
}