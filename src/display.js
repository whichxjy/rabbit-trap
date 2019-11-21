class Display {
    constructor(canvas, bufferWidth, bufferHeight) {
        // buffer to draw
        this.buffer = document.createElement("canvas").getContext("2d");
        this.buffer.canvas.width = bufferWidth;
        this.buffer.canvas.height = bufferHeight;
        // context to display
        this.context = canvas.getContext("2d");

        // draw rectangle to the buffer
        this.drawRectangle = (x, y, width, height, color) => {
            this.buffer.fillStyle = color;
            this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
        };

        // fill the buffer with the given color
        this.fill = (color) => {
            const bufferWidth = this.buffer.canvas.width;
            const bufferHeight = this.buffer.canvas.height;
            this.drawRectangle(0, 0, bufferWidth, bufferHeight, color);
        };
    
        // display the context in the buffer
        this.render = () => {
            const bufferWidth = this.buffer.canvas.width;
            const bufferHeight = this.buffer.canvas.height;
            const displayWidth = this.context.canvas.width;
            const displayHeight = this.context.canvas.height;
            this.context.drawImage(
                this.buffer.canvas,
                0, 0, bufferWidth, bufferHeight,
                0, 0, displayWidth, displayHeight
            );
        };
    
        this.resize = (clientWidth, clientHeight, heightWidthRatio) => {
            if (clientHeight / clientWidth > heightWidthRatio) {
                this.context.canvas.width = clientWidth;
                this.context.canvas.height = clientWidth * heightWidthRatio;
            }
            else {
                this.context.canvas.width = clientHeight / heightWidthRatio;
                this.context.canvas.height = clientHeight;
            }
            this.context.imageSmoothingEnabled = false;
        };
    }
}