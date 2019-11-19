class Game {
    constructor() {
        this.color = "rgb(0, 0, 0)";
        this.rgb = [0, 0, 0];
        this.shifts = [1, 1, 1];

        // update game state
        this.update = () => {
            for (let i = 0; i < 3; i++) {
                let color = this.rgb[i];
                let shift = this.shifts[i];
                if (color + shift > 255 || color + shift < 0) {
                    if (shift >= 0) {
                        shift = Math.floor(Math.random() * -2) - 1;
                    }
                    else {
                        shift = Math.floor(Math.random() * 2) + 1;
                    }
                }
                color += shift;
                this.rgb[i] = color;
                this.shifts[i] = shift;
            }
            this.color = "rgb(" + this.rgb[0] + ", " + this.rgb[1] + ", " + this.rgb[2] + ")";
        };
    }
}
