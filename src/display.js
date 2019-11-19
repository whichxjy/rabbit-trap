class Display {
    constructor(canvas) {
        // buffer to draw
        this.buffer =  document.createElement("canvas").getContext("2d");
        // context to display
        this.context = canvas.getContext("2d");

        this.renderColor = (color) => {
            // set color
            this.buffer.fillStyle = color;
            // draw in the buffer
            const bufferWidth = this.buffer.canvas.width;
            const bufferHeight = this.buffer.canvas.height;
            this.buffer.fillRect(0, 0, bufferWidth, bufferHeight);
        };
    
        this.render = () => {
            const bufferWidth = this.buffer.canvas.width;
            const bufferHeight = this.buffer.canvas.height;
            const displayWidth = this.context.canvas.width;
            const displayHeight = this.context.canvas.height;
            // display the context in the buffer
            this.context.drawImage(
                this.buffer.canvas,
                0, 0, bufferWidth, bufferHeight,
                0, 0, displayWidth, displayHeight
            );
        };
    
        this.resize = () => {
            const clientWidth = document.documentElement.clientWidth;
            const clientHeight = document.documentElement.clientHeight;
            // update the display context
            this.context.canvas.width = clientWidth - 32;
            this.context.canvas.height = clientHeight - 32;
            // display the context
            this.render();
        };
    }
}